import React, { Component } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Card, CardBody, CardFooter, CardHeader, Col, Container, Form, FormGroup, Input, Jumbotron, Label, Row, Spinner } from 'reactstrap';
import _ from 'lodash';
import { gql, useMutation } from '@apollo/client';

const USER_QUERY = gql`mutation addUser($user: UserInput){
addUser(user: $user){
_id user email createdOn
}
}`;

const Footer = (props) => {
const History = useHistory();
const [addUser, {loading, error, data}] = useMutation(USER_QUERY, {
variables: {user: props.data},
onError: (err)=>alert(err),
onCompleted: (data)=>{
// alert(JSON.stringify(data))
History.push('/home');
}
});

if(loading) return (
<CardFooter>
Process {Spinner}
</CardFooter>)
if(error) return (
<CardFooter>
Error: {error.message}
</CardFooter>)
return (
<CardFooter>
<Button
onClick={()=>{
// alert(JSON.stringify(props.data));
addUser();
}}
disabled={!props.formValid}
>Sign Up now</Button>
<Button
onClick={() => History.push('/')}
>Cancel</Button>
<Button onClick={()=>History.push('/login')}>Login</Button>
</CardFooter>
)
};//end;

class SignUpPage extends Component {
constructor(props) {
super(props);
this.state = {
error: null,
isFormValid: true,
isSubmit: false,
user: {
firstName: '',
lastName: '',
email: '',
password: '',
rePassword: ''
}
};//endState;
this.ChangeHandel = this.ChangeHandel.bind(this);
this.validation = this.validation.bind(this);
};//endConstructor;

ChangeHandel(e) {
const {type, name, value } = e.target;
const user = this.state.user;
user[name] = value;
this.setState({ user })
}
validation(type, val) {
const { user } = this.state;

if(type==='text' && /^([a-zA-Z]+)$/.test(val)){
alert('value is done')
};//endIf;
}

render() {
const {user,  firstName, lastName, email, password, rePassword } = this.state.user;
return (
<Card className="w-50 h-100">
<CardHeader>
<h3>Sign Up</h3>
</CardHeader>
<CardBody>
<Form>
<FormGroup inline>
<Label for="fName">First name</Label>
<Input type="text" name="firstName" id="fName" placeholder="first name"
onChange={this.ChangeHandel}
value={firstName}
/>
</FormGroup>
<FormGroup>
<Label for="lName">Last name</Label>
<Input type="text" name="lastName" id="lName" placeholder="last name"
onChange={this.ChangeHandel}
value={lastName}
/>
</FormGroup>
<FormGroup>
<Label for="Email">Email</Label>
<Input type="email" name="email" id="Email" placeholder="enter email id"
onChange={this.ChangeHandel}
value={email}
/>
</FormGroup>
<FormGroup>
<Label for="Password">Password </Label>
<Input type="password" name="password" id="Password" placeholder="enter password"
onChange={this.ChangeHandel}
value={password}
/>
</FormGroup>
<FormGroup>
<Label for="Confirm">Confirm</Label>
<Input type="password" name="rePassword" id="confirm" placeholder="confirm password"
onChange={this.ChangeHandel}
value={rePassword}

/>
</FormGroup>
</Form>
</CardBody>
<Footer error={this.state.error} formValid={this.state.isFormValid} data={this.state.user} />
</Card>
)
}
};//TheEnd;
export default SignUpPage;