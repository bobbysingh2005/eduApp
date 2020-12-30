import React, { Component } from 'react';
import { useHistory } from 'react-router-dom';
import { gql, useMutation } from '@apollo/client';
import { Button, Card, CardBody, CardFooter, CardHeader, Form, FormGroup, Input, Label, Spinner } from 'reactstrap';

const USER_LOGIN_QUERY = gql`mutation userLogin($user: String, $password: String){
userLogin(user:$user, password: $password){
_id user email lastAccess createdOn
}
}`;

const Footer = (props) => {
const History = useHistory();
const [userLogin, {loading, error, data}] = useMutation(USER_LOGIN_QUERY, {
variables: {
    user: props.data.user,
    password: props.data.password},
onError: (err)=>alert(err),
onCompleted: (data)=>{
alert(JSON.stringify(data))
// alert(`return back: ${props.returnBack}`);
window.sessionStorage.setItem('author', JSON.stringify(data.userLogin));
History.push(props.returnBack);
}
});

if(loading) return (
<CardFooter>
Process {Spinner}
</CardFooter>)
return (
<CardFooter>
<Button
onClick={()=>{
// alert(JSON.stringify(props.data));
userLogin();
}}
disabled={!props.formValid}
>
login
    </Button>
<Button
onClick={()=>{
History.push('/signup');
}}>
SignUp
</Button>
{error && `Error: ${error.message}`}
</CardFooter>
)
};//end;

class LoginPage extends Component {
constructor(props) {
super(props);
this.state = {
error: null,
isFormValid: true,
isSubmit: false,
user: {
user: '',
password: '',
}
};//endState;
this.ChangeHandel = this.ChangeHandel.bind(this);
this.validation = this.validation.bind(this);

};//endConstructor;

ChangeHandel(e) {
const {type, name, value } = e.target;
const user = this.state.user;
user[name] = value;
this.setState({ user: user, isFormValid: true })
}
validation(type, val) {
const { user } = this.state;

if(type==='text' && /^([a-zA-Z]+)$/.test(val)){
alert('value is done')
};//endIf;
}

render() {
const {user, password} = this.state.user;
const returnBack = this.props.location.state ? this.props.location.state.from : '/home';
return (
<Card className="w-50 h-100">
<CardHeader>
<h3>Login</h3>
</CardHeader>
<CardBody>
<Form>
<FormGroup>
<Label for="UserId">User</Label>
<Input type="text" name="user" id="UserId" placeholder="enter user id or email id"
onChange={this.ChangeHandel}
value={user}
/>
</FormGroup>
<FormGroup>
<Label for="Password">Password </Label>
<Input type="password" name="password" id="Password" placeholder="enter password"
onChange={this.ChangeHandel}
value={password}
/>
</FormGroup>
</Form>
</CardBody>
<Footer 
error={this.state.error} 
formValid={this.state.isFormValid} 
data={this.state.user} 
returnBack={returnBack} 
/>
</Card>
)
}
};//TheEnd;
export default LoginPage;