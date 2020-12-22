"use strict";

var _polyfill = _interopRequireDefault(require("@babel/polyfill"));

var _http = _interopRequireDefault(require("http"));

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _cors = _interopRequireDefault(require("cors"));

var _graphqlResolver = _interopRequireDefault(require("./graphql-resolver"));

var _graphqlSchemas = _interopRequireDefault(require("./graphql-schemas"));

var _expressGraphql = require("express-graphql");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var port = process.env.PORT || 3001;
var api = (0, _express["default"])();
api.use(_bodyParser["default"].urlencoded({
  extended: false
}));
api.use(_bodyParser["default"].json());
api.use((0, _cors["default"])());
api.use('/', (0, _expressGraphql.graphqlHTTP)({
  schema: _graphqlSchemas["default"],
  rootValue: _graphqlResolver["default"],
  graphiql: true
})); //end;

api.listen(port, function () {
  console.log("eduApp express with graphql api started\nurl: http://localhost:".concat(port, "/\npress ctrl + c to exit"));
});
//# sourceMappingURL=index.js.map