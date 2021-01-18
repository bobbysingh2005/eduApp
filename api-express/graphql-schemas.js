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
createdOn: Date, lastAccess: Date, updatedOn: Date
}

type Detail {
profileType: String, role: Roles, firstName: String, lastName: String, gender: Genders, dateOfBirth: Date, bloodGroup: String, classNo: String, classGroup: String, subjects: String,
address: String, city: String, state: String, country: String, updatedOn: Date
}
input UserInput {
    user: String, password: String, rePassword: String, email: String, accountStatus: String, userPrivate: String,
detail: DetailInput
}
input DetailInput {
    profileType: String, role: String, firstName: String, lastName: String, gender: String, dateOfBirth: Date, bloodGroup: String, 
    standard: String, group: String, subjects: String,
    address: String, city: String, state: String, country: String, updatedOn: Date
}
type Query {
users: [User]!,
User(id: String): User
}
type Mutation {
addUser(user: UserInput): User,
removeUser(id: String): User,
updateUser(id: String, detail: UserInput): User
}
`);//TheEnd;