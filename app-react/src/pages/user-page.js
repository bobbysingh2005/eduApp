import { gql, useMutation, useQuery } from '@apollo/client';
import React, { Component, useState } from 'react';
import Moment from 'react-moment';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import { Button, Col, Container, Form, FormGroup, Input, Label, Row, Spinner } from 'reactstrap';

const Profile = (props)=>{
const {id} = props;
const PROFILE_QUERY = gql`query User($id: String){
    User(id:$id){
        _id user createdOn
    }
}`;//end;
const {loading, error, data} = useQuery(PROFILE_QUERY, {
variables: { id: id},
    onCompleted: (data)=>{
        // alert(data)
    },
onError: err => alert(err)
})
if(loading) return <p>Loading... {Spinner} </p>;
// alert(JSON.stringify(data))
const {user, email, detail, createdOn} = data ? data.User : '';
const {firstName, lastName, role, profileType, updatedOn} = detail ? detail : '';
const profileImg = '';
return (
<Container fluid>
<Row>
<Col>
<img src={profileImg} className="rounded" alt={user+' photo'} />
</Col>
<Col>
<h1>Full Name: {firstName || '- - -'} {lastName || '- - -'} </h1>
<p>user: String</p>
<p>email: String</p>
<p>Account Status: </p>
<p>private: String</p>
<h3>detail:</h3>
<ul>
    <li>profileType: </li>
<li>role: </li>
<li>firstName: String,</li>
<li>lastName: String,</li>
<li>dateOfBirth: </li>
<li>bloodGroup: String,</li>
<li>gender: String,</li>
<li>class: String,</li>
<li>classGroup: String,</li>
<li>subjects:</li>
</ul>
<address>
address: String <br />
city: String <br />
state: String <br />
country: <br />
</address>
<h5>updatedOn: <Moment format="ddd DD/MM/YYYY" date={updatedOn} /> </h5>

<h5>join: <Moment format="ddd DD-MM-YYYY" date={createdOn} /></h5>
<Button onClick={(e)=>{
    e.preventDefault();
props.edit(true);
}} >Edit</Button>
</Col>
</Row>
</Container>
)};//end;

const ProfileEdit = (props)=>{

return (
<div>
<h1>Profile Edit</h1>
<Form>
<FormGroup>
<Label for="User">user</Label>
<Input type="text" name="user" id="User" />
</FormGroup>
<Button type="submit">Update Now</Button>
<Button type="button"
onClick={(e)=>{
e.preventDefault();
props.edit(false);
}} >Cancel</Button>
</Form>
</div>
)};//end;

const MemberProfile = (props)=>{
const History = useHistory();
const location = useLocation();
const {id, action, type} = useParams();
const [edit, setEdit] = useState(false);
    // alert(`id: ${id}, type: ${type}, action: ${action}`);
if(!edit) return <Profile id={id} edit={setEdit} />;
if(edit) return <ProfileEdit id={id} edit={setEdit} />;

return (
<div>
Loading... {Spinner}
</div>

)};//TheEnd;

export default MemberProfile;