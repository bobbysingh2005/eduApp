import axios from 'axios';
import React, { Component } from 'react';
import { Button, Card, CardBody, CardHeader, Col, Form, FormFeedback, FormGroup, FormText, Input, InputGroup, InputGroupAddon, Label, Spinner } from 'reactstrap';

class SignupPage extends Component {
constructor(props){
super(props);
this.state = {
error: null,
success: false,
firstName: "",
firstNameValid: false,
firstNameInvalid: false,
firstNameProcess: false,
lastName: "",
lastNameValid: false,
lastNameInvalid: false,
lastNameProcess: false,
user: "",
userValid: false,
userInvalid: false,
userProcess: false,
password: "",
passwordValid: false,
passwordInvalid: false,
passwordProcess: false,
rePassword: "",
rePasswordValid: false,
rePasswordInvalid: false,
rePasswordProcess: false,
email: "",
emailValid: false,
emailInvalid: false,
emailProcess: false,
contactNo: '',
contactNoValid: false,
contactNoInvalid: false,
contactNoProcess: false
};//endState;
this.changeHandle = this.changeHandle.bind(this);
this.validation = this.validation.bind(this);
this.frmSubmit = this.frmSubmit.bind(this);
};//endConstructor;

changeHandle(ev){
let timer;
const { name, value, type} = ev.target;
let process = name+'Process';
this.setState({
[name]: value,
[process]: true
});
timer = setTimeout(()=>{
this.validation({name, value, type, process},timer);
},500);
};//endChangeHandle;
validation({name, value, type, process}, timer){
let valid = name+'Valid';
let invalid = name+'Invalid';
let val = value.trim();

switch (type) {
case "text":
if(/^([a-zA-Z]+)$/.test(val)){
this.setState({[valid]: true, [process]: false});
}else{
this.setState({[invalid]: true, [process]: false});
};//endif;

break;
case "password":
// alert('password hai')
break;
case "email":
// alert(/^([a-zA-Z0-9_.-]+){4,}@([a-zA-Z0-9_.-]+){4,}\.([a-zA-Z.-]+){2,}$/.test(val))
if(/^([a-zA-Z0-9_.-]+){4,}@([a-zA-Z0-9_.-]+){4,}\.([a-zA-Z.-]+){2,}$/.test(val))
{
this.setState({
    [valid]: true,
    [invalid]: false,
    [process]: false});
        }else{
        this.setState({
            [invalid]: true,
            [valid]: false,
            [process]: false});
        };//endif;
break;
default:
break;
}
// alert(JSON.stringify(obj))
clearTimeout(timer);
this.setState({[process]: false});
};//endValidation;
frmSubmit(ev){
ev.preventDefault();
let test = "test",
testEmail = "test@test.com",
testContact = "1234",
url = "http://localhost:3001/signup";

let nuser = {
user: this.state.user || test,
password: this.state.password || test,
rePassword: this.state.rePassword || test,
firstName: this.state.firstName || test,
lastName: this.state.lastName || test,
email: this.state.email || testEmail,
contactNo: this.state.contactNo || testContact
};//end;
// alert(JSON.stringify(nuser))
const location = window.location;
axios.post(url, nuser)
.then((val)=>{
// alert(JSON.stringify(val))
location.href = "/";
}).catch(err=>alert(err));
};//endFrmSubmit;
componentDidMount(){
const nuser = this.state;
};//endComponentDidMount;

render(){
return (
<Card>
<CardHeader>
<h1>SignUp</h1>
</CardHeader>
<CardBody>
<Form onSubmit={this.frmSubmit}>
<FormGroup row>
<Label for="FirstName" sm={2}>first name:</Label>
<Col sm={10}>
<InputGroup>
<Input type="text" name="firstName" id="FirstName" placeholder="enter first name"
value={this.state.firstName}
onChange={this.changeHandle}
valid={this.state.firstNameValid}
invalid={this.state.firstNameInvalid}
/>
<InputGroupAddon addonType="append">
{this.state.firstNameProcess && <Spinner color="primary" />}
</InputGroupAddon>
</InputGroup>
{this.state.firstNameInvalid && <FormFeedback>
first name is invalid
    </FormFeedback>}
{this.state.firstNameValid && <FormFeedback valid>
first name is valid
</FormFeedback>}
</Col>
</FormGroup>
<FormGroup row>
<Label for="LastName" sm={2}>last name:</Label>
<Col sm={10}>
<InputGroup>
<Input type="text" name="lastName" id="LastName" placeholder="enter last name"
value={this.state.lastName}
onChange={this.changeHandle}
valid={this.state.lastNameValid}
invalid={this.state.lastNameInvalid}
/>
<InputGroupAddon addonType="append">
{this.state.lastNameProcess && <Spinner color="primary" />}
</InputGroupAddon>
</InputGroup>
</Col>
</FormGroup>
<FormGroup row>
<Label for="Email" sm={2}>email:</Label>
<Col sm={10}>
<InputGroup>
<Input type="email" name="email" id="Email" placeholder="enter email address"
value={this.state.email}
onChange={this.changeHandle}
valid={this.state.emailValid}
invalid={this.state.emailInvalid}
/>
<InputGroupAddon addonType="append">
{this.state.emailProcess && <Spinner color="primary" />}
</InputGroupAddon>
</InputGroup>
</Col>
</FormGroup>
<FormGroup row>
<Label for="Contact" sm={2}>Contact No:</Label>
<Col sm={10}>
<InputGroup>
<Input type="text" name="contactNo" id="Contact" placeholder="enter valid contact number"
value={this.state.contactNo}
onChange={this.changeHandle}
valid={this.state.contactNoValid}
invalid={this.state.contactNoInvalid}
/>
<InputGroupAddon addonType="append">
{this.state.contactNoProcess && <Spinner color="primary" />}
</InputGroupAddon>
</InputGroup>
</Col>
</FormGroup>
<FormGroup row>
<Label for="User" sm={2}>User:</Label>
<Col sm={10}>
<InputGroup>
<Input type="text" name="user" id="User" placeholder="enter user id or email id"
value={this.state.user}
onChange={this.changeHandle}
valid={this.state.userValid}
invalid={this.state.userInvalid}
/>
<InputGroupAddon addonType="append">
{this.state.userProcess && <Spinner color="primary" />}
</InputGroupAddon>
</InputGroup>
</Col>
</FormGroup>
<FormGroup row>
<Label for="Password" sm={2}>Password</Label>
<Col sm={10}>
<InputGroup>
<Input type="password" name="password" id="Password" placeholder="********"
value={this.state.password}
onChange={this.changeHandle}
valid={this.state.passwordValid}
invalid={this.state.passwordInvalid}
/>
<InputGroupAddon addonType="append">
{this.state.passwordProcess && <Spinner color="primary" />}
</InputGroupAddon>
</InputGroup>
</Col>
</FormGroup>
<FormGroup row>
<Label for="Confirm" sm={2}>Confirm password</Label>
<Col sm={10}>
<InputGroup>
<Input type="password" name="rePassword" id="Confirm" placeholder="********"
value={this.state.rePassword}
onChange={this.changeHandle}
valid={this.state.rePasswordValid}
invalid={this.state.rePasswordInvalid}
/>
<InputGroupAddon addonType="append">
{this.state.rePasswordProcess && <Spinner color="primary" />}
</InputGroupAddon>
</InputGroup>
</Col>
</FormGroup>
<Button 
type="submit"
disabled={this.state.error}
>Submit</Button>
</Form>
</CardBody>
</Card>
)}};//TheEnd;
export default SignupPage;