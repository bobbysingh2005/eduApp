"use strict";

var express = require('express');

var bodyParser = require('body-parser');

var cors = require('cors');

var mongoose = require('mongoose');

var App = express();
var mongoUrl = 'mongodb://localhost:27027/eduApp';
var port = process.env.PORT || 3001;
/* use Middleware  */

App.use(cors());
App.use(bodyParser.urlencoded({
  extended: false
}));
App.use(bodyParser.json());
/* use Routes */

App.get('/test', function (req, res) {
  return res.json({
    message: "pass"
  });
});
App.get('/', function (req, res) {
  return res.status(200).send("Welcome to Edu App Api");
}); //const server = App.listen(port, ()=>console.log(`EduAppApi server started on http://localhost:${port} \n press ctrl + c to exit`));

module.exports = App;
//# sourceMappingURL=index.js.map