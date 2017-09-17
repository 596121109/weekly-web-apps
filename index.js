const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// middleware
app.use(express.static(__dirname + '/src'));

app.listen(3000);
