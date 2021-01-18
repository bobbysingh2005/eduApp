import axios from 'axios';
import React, { Component } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { Button, Card, CardBody, CardFooter, CardHeader, Form, FormGroup, Input, Label, Spinner } from 'reactstrap';
import Cookie from 'js-cookie';

class LoginPage extends Component {
constructor(props) {
super(props);
this.state = {
error: null,
isFormValid: true,
isSubmit: false,
authorization: false,
user: {
user: '',
password: '',
}
};//endState;
this.ChangeHandel = this.ChangeHandel.bind(this);
this.validation = this.validation.bind(this);
this.SubmitHandel = this.SubmitHandel.bind(this);
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
SubmitHandel(ev){
ev.preventDefault();
const {user, password} = this.state.user;
axios.post('http://localhost:3001/login', {
        user: user,
        password: password
})
.then(data=>{
const {token} = data.data;
// alert(token)
Cookie.set('token', token, {
    expires: 7,
    // path: '',
    sameSite: 'Lax'
});//end;
this.setState({authorization: true})
})
.catch(err=>alert(err))
};//endSubmit;

render() {
const {user, password} = this.state.user;
const returnBack = this.props.location.state ? this.props.location.state.from : '/home';
const authorization = this.state.authorization;
return (
<Card className="w-50 h-100">
author: {authorization ? 'yes' : 'no'}
{authorization && <Redirect to="/" />}
<CardHeader>
<h3>Login</h3>
</CardHeader>
<CardBody>
<Form onSubmit={this.SubmitHandel}>
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

<Button type="submit">login</Button>
<Button onClick={()=>window.location = '/signup'}>SignUp</Button>
</Form>
</CardBody>
</Card>
)
}
};//TheEnd;
export default LoginPage;