// This file should provide functions megafon needs,
// therefore acting as a own little API, using the functionality
// given by the mastodon-api by vanita5 found at
// https://github.com/vanita5/mastodon-api
const Mastodon = require('mastodon-api');
const fs = require('fs');

// matching strings in the form of mastodon instances
// e.g. mastodon.social / botsin.space / mastodon.conxtor.com
const instance_regexp = /^\w+(\.\w+)+$/;

class MastApi {
  instance_url;
  clientId;
  clientSecret;
  accessToken;
  mast;

  constructor(instance_url) {
    if ( !instance_regexp.test(instance_url) ){
      console.error("Given instance URL has no valid syntax! Required form: \"foo.bar\"");
//TODO Check how to stop instanciating class
    }
    this.instanceUrl = instance_url;
    this.clientId = "";
    this.clientSecret = "";
    this.accessToken = "";
  }

  // Returns a URL to start a authentification process for a given Mastodon
  // instance url with following form: example.domain{.subdomains}
  getAuthUrl() {
    return new Promise( (resolve, reject) => {

      Mastodon.createOAuthApp(`https://${this.instanceUrl}/api/v1/apps`)
        .catch((err) => console.error(err))
        .then((res) => {

          this.clientId = res.client_id;
          this.clientSecret = res.client_secret;

          var auth_url = Mastodon.getAuthorizationUrl(
            this.clientId,
            this.clientSecret,
            `https://${this.instanceUrl}`
          );

          resolve(auth_url);
        })
    })
  }

  generateAccessToken(auth_code) {
    Mastodon.getAccessToken(
      this.clientId,
      this.clientSecret,
      auth_code,
      `https://${this.instanceUrl}`
    )
      .catch((err) => console.error(err))
      .then((access_token) => {
        this.accessToken = access_token;
        this.mast = new Mastodon({
          access_token: this.accessToken,
          timeout_ms: 60 * 1000,
          api_url: `https://${this.instanceUrl}/api/v1`,
        })
      });
  }

  toot(message) {
    params = {
      status: message
    };
    this.mast.post('statuses', params, (err, data) => {
      if (err) {
        console.error(err);
      } else {
        console.log(data);
      }
    })
  }

  getAccessToken() {
    return this.accessToken;
  }

  getInstanceUrl() {
    return this.instanceUrl;
  }

  setInstanceUrl(instance_url) {
    if ( !instance_regexp.test(instance_url) ){
      console.error("Given instance URL has no valid syntax! Required form: \"foo.bar\"");
    }
    this.instanceUrl = instance_url;
  }
}
module.exports.MastApi = MastApi;