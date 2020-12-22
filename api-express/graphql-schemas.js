import { buildSchema } from 'graphql';

export default buildSchema(`
scalar Date
enum Roles { admin, guest, teacher, student, account, principal }
enum Status { active, pending, disabled, rejected}
enum Genders { male, female, none}

type User {
_id: String, user: String, password: String, rePassword: String, accountStatus: Status, role: Roles, private: String,
detail:Details,
createdOn: Date,
lastAccess: Date,
updatedOn: Date
}

type Details {
firstName: String, lastName: String, gender: Genders, dateOfBirth: Date, bloodGroup: String, classNo: String, classGroup: String, subjects: String,
address: String, city: String, state: String, country: String, updatedOn: Date
}
type Query {
users: [User]!
}
`);//TheEnd;