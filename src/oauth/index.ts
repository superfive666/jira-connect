import fs = require('fs');
import path = require('path');
import JiraClient from 'jira-connector';
import {Response} from 'express';

import credential from './credential';

interface IJiraCredential {
  accessToken: string;
  oauthSecret: string;
}

interface IJiraOauthResponse {
  token: string;
  token_secret: string;
  url: string;
}

const privateKey = fs.readFileSync(path.join(__dirname, 'jiraPrivateKey.pem'), 'utf8');
const consumerKey = 'DataPlatformKey';
const jiraHost = 'jira.bitdeer.vip';

export const initOAuth = (res: Response) => {
  JiraClient.oauth_util.getAuthorizeURL({
    host: jiraHost,
    oauth: {
      consumer_key: consumerKey,
      private_key: privateKey
    }
  }, (_: any, apiResponse: IJiraOauthResponse) => {
    const {token, token_secret, url} = apiResponse;
    credential.setOauthToken(token);
    credential.setOauthSecret(token_secret);

    res.redirect(308, url);
  });
}

export const exchangeAccess = (code: string, res: Response) => {
  JiraClient.oauth_util.swapRequestTokenWithAccessToken({
    host: jiraHost,
    oauth: {
      token: credential.getOauthToken(),
      token_secret: credential.getOauthSecret(),
      oauth_verifier: code
    }
  }, (_: any, apiResponse: any) => {
    console.log(apiResponse);
    res.send("success");
  });
};

export const exportCredential = (res: Response): IJiraCredential => {
  const exportResults: IJiraCredential = {
    accessToken: credential.getAccessToken(),
    oauthSecret: credential.getOauthSecret()
  };

  res.send(exportResults);

  return exportResults;
}
