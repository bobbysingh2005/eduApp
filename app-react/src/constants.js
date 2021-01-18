const { gql } = require("@apollo/client");


exports.GetUsers = gql`{users{
_id user email createdOn lastAccess updatedOn
}}`;//end;

exports.getUser = gql`query User($id: String){User(id:$id){_id user email}}`;
