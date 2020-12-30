import { buildSchema } from 'graphql';

export default buildSchema(`
scalar Date
enum Roles { admin, guest, teacher, student, account, principal }
enum Status { active, pending, disabled, rejected}
enum Genders { male, female, none}
enum ProfileTypes { 
administrators,
accountables,
solo,
groupAdmin
}
type User {
_id: String, user: String, password: String, rePassword: String, email: String, accountStatus: Status, private: String,
detail: Detail,
createdOn: Date,
lastAccess: Date,
updatedOn: Date
}

type Detail {
profileType: String, role: Roles, firstName: String, lastName: String, gender: Genders, dateOfBirth: Date, bloodGroup: String, classNo: String, classGroup: String, subjects: String,
address: String, city: String, state: String, country: String, updatedOn: Date
}

input UserInput {
firstName: String
lastName: String
email: String
password: String
rePassword: String
}

type Query {
users: [User]!,
User(id: String): User
}
type Mutation {
addUser(user: UserInput): User,
removeUser(id: String): User,
updateUser(user: UserInput): User
}
`);//TheEnd;