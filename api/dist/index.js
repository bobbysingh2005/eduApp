"use strict";

var _polyfill = _interopRequireDefault(require("@babel/polyfill"));

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _cors = _interopRequireDefault(require("cors"));

var _routes = _interopRequireDefault(require("./routes"));

var _morgan = _interopRequireDefault(require("morgan"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var App = (0, _express["default"])();
var mongoUrl = 'mongodb://localhost:27027/eduApp';
var port = process.env.PORT || 3001;
/* use Middleware  */

App.use((0, _cors["default"])());
App.use(_bodyParser["default"].urlencoded({
  extended: false
}));
App.use(_bodyParser["default"].json());
App.use((0, _morgan["default"])('tiny'));
/* use Routes */

App.get('/test', function (req, res) {
  return res.json({
    message: "pass"
  });
});
App.get('/', function (req, res) {
  return res.status(200).send("Welcome to Edu App Api");
});
App.use('/api', _routes["default"]); //const server = App.listen(port, ()=>console.log(`EduAppApi server started on http://localhost:${port} \n press ctrl + c to exit`));
//module.exports = App;

App.listen(port, function () {
  return console.log("EduAppApi server started on http://localhost:".concat(port, " \n press ctrl + c to exit"));
});
//# sourceMappingURL=index.js.map