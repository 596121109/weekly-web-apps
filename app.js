const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// middleware
app.use(express.static(__dirname + '/src'));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.listen(3000);

app.post('/', function (req, res) {
  mailchimpPost(req.body.email, req.body.name);
  res.end('Success!');
});

function mailchimpPost (email, name) {
  var request = require("request");

  var options = { method: 'POST',
    url: 'https://us16.api.mailchimp.com/3.0//lists/1871ee3a00/members',
    headers:
     { 'postman-token': 'f6fdffd5-caa6-c1a1-e1d3-f0e0cef5c7ef',
       'cache-control': 'no-cache',
       authorization: 'Basic amFzb246MTJkNDM1NjAxODkzOTQwN2UyYzkwMGU5YzE0ZmJiMzMtdXMxNg==',
       'content-type': 'application/json' },
    body:
     { email_address: email,
       status: 'subscribed',
       merge_fields: { FNAME: name } },
    json: true };

  request(options, function (error, response, body) {
    if (error) throw new Error(error);

    console.log(body);
  });
}
