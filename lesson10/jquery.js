const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const fs = require('fs');
const gm = require('gm');

app.lisetn(3615);
app.use(express.static('public'));
app.use(bodyParser({limit:500mb}));



