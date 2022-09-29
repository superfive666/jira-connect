class JiraOauthCredential {
  accessToken: string;
  oauthToken: string;
  oauthSecret: string;

  constructor() {
    this.accessToken = "";
    this.oauthToken = "";
    this.oauthSecret = "";
  }

  public setAccessToken = (accessToken: string) => {
    this.accessToken = accessToken;
  }

  public setOauthToken = (oauthToken: string) => {
    this.oauthToken = oauthToken;
  }

  public setOauthSecret = (oauthSecret: string) => {
    this.oauthSecret = oauthSecret;
  }

  public getAccessToken = (): string => {
    return this.accessToken;
  }

  public getOauthToken = (): string => {
    return this.oauthToken;
  }

  public getOauthSecret = (): string => {
    return this.oauthSecret;
  }
};

export default new JiraOauthCredential();
