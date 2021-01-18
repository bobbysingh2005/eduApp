import React, { Fragment } from 'react';
import { Button, FormGroup, Input, Label } from 'reactstrap';
export default function UserForm (props){

return (
<Fragment>
<FormGroup>
<Label for="User">User</Label>
<Input type="text" name="user" id="User" placeholder="enter user id or email id" />
</FormGroup>
<FormGroup>
<Label for="Email">Email</Label>
<Input type="email" name="email" id="Email" placeholder="enter your email address" />
</FormGroup>
<hr />
<Button type="submit">Update</Button>
</Fragment>
)};//TheEnd; 