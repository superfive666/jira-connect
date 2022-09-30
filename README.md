# Jira Connect

This project acts as a temporary localhost for generating the oauth token and secrets.

Go through the following instructions for setting up the oauth key and tokens.

## Preparation

Prepare the following:

- [ ] Deployment Environment Preparation: 

```
# make sure the npm and node is present
node --version 
# v18.4.0
npm --version
# 8.12.1

# ts-node installation
npm install -g ts-node

# under the root directory of this project, execute the following 
npm install
```

- [ ] [RSA Private Key](./src/oauth/jiraPrivateKey.pem): copy and paste the content of the private key shared in separate channel into this file and save. The content should look like the following:

```
-----BEGIN RSA PRIVATE KEY-----
xxx
-----END RSA PRIVATE KEY-----
```

- [ ] Jira Create Application Links: copy the [RSA Public Key](./src/oauth/jiraPublicKey.pem) to the link

```
# application link consumer key: "DataPlatformKey"
```

## Start Localhost

Starting localhost by using the following command:

```
npm start

# Server listening on port 3000. Initialization completed...
```

## Start Scripting

Use the following step for generating the required oauth token:

- Login to `jira.bitdeer.vip` [JIRA](https://jira.bitdeer.vip) using the username and password of `datahub` AD user.

- Open another tab in browser of the [Oauth Init](http://localhost:3000/initOauth)

- Click `Allow` in the JIRA page and take note of the 4-digit `code`.

- Open browser for the `http://localhost:3000/exchangeAccess?code=<code>` replace the `<code>` from the previous step.

- Once see success, open the url [Export Oauth Token](http://localhost:3000/export).

- Copy and send the output to corresponding person in charge of the JIRA oauth token.
