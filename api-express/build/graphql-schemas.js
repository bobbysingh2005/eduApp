"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _graphql = require("graphql");

var _default = (0, _graphql.buildSchema)("\ntype User {\n    _id: String,\n    user: String,\n    password: String,\n    rePassword: String\n}\n\ntype Query {\n    hello: String\n    users: [User!]!\n}\n"); //Theend;


exports["default"] = _default;
//# sourceMappingURL=graphql-schemas.js.map