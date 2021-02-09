const express = require('express');
const path = require('path');
const jsonServer = require('json-server');
const app = express();

app.use(express.static(__dirname + '/dist/cvtest-fam'));

app.use('/api', jsonServer.router('db.json'));

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/cvtest-fam/index.html'));
});

app.listen(process.env.PORT || 3000);
