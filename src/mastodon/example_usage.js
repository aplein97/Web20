//const fs = require('fs');
//const Readline = require('readline');

// Get Mastodon API
var MastApi = require('./mastodon_api.js')

// Ask User for Mastodon instance hosting his account!
// Then create API Instance.
// Here botsin.space is used as an example.
var M = new MastApi.MastApi('botsin.space');

// Get Authentification URL for Megafon application.
M.getAuthUrl()
  .catch((err) => console.error(err))
  .then((auth_url) => {
    console.log('Auth Url: ' + auth_url)
// 	Open Link and let User login with Mastodon account.
//	User should copy provided authorization code and insert
// 	into application.
  })

// Generate a access token for Mastodon API instance given
// the authorization code by User.
M.generateAccessToken('Pajpl0z-sUZJ9346MXkuq1hJGOmGBTt3qsL411wBkPY')

// Afterwards API instance should be usable for interacting with
// Mastodon.
M.toot('Hello Mastodon!');

