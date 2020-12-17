const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
type Author {
name: String,
age: Int
}

type Query {
authors: [Author]
hello: String
}
`;//end;

const authorsObj = [
{name: "bobby", age: 11},
{name: "shital", age: 11}
];//end;

const resolver = {
Query: {
authors: ()=> authorsObj
},

};//end;

const server = new ApolloServer({ typeDefs, resolver });

server.listen().then(({url})=>{
console.log(`start server on url: ${url}`);
});//TheEnd;
