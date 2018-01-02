var request = require("request");
require('dotenv').config();

var options = { method: 'POST',
  url: process.env.TEST_AUTH_URL,
  headers: 
   { 'postman-token': process.env.POSTMAN_TOKEN,
     'cache-control': 'no-cache',
     'content-type': 'application/json' },
  body: 
   { audience: 'https://helofriend',
     grant_type: 'client_credentials',
     client_id: process.env.AUTH0_CLIENT_ID,
     client_secret: process.env.AUTH0_CLIENT_SECRET,
  json: true };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
