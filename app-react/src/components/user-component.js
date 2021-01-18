import React, { Component, useState } from 'react';
import { gql, useMutation, useQuery } from '@apollo/client';
import Moment from 'react-moment';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import { Button, Card, CardBody, CardHeader, CardImg, CardSubtitle, CardText, CardTitle, Col, Container, Form, FormGroup, Input, Label, Row, Spinner } from 'reactstrap';
import _ from 'lodash';
import { useEffect } from 'react';
import UserForm from './user-form';


const Profile = ({id, ...rest})=>{
const PROFILE_QUERY = gql`query User($id: String){User(id:$id){
_id user email createdOn
}}`;//end;
const {loading, error, data} = useQuery(PROFILE_QUERY, {
variables: { id: id},
onError: err => alert(err)
})

if(loading) return (<Spinner color="primary" />)
const {
    user,
    email,
    accountStatus,
detail,
createdOn,
lastAccess

} = data ? data.User : '';
const {
    profileType,
    role,
    firstName,
    lastName,
    dateOfBirth,
    bloodGroup,
    gender,
    standard,
    group,
    address,
    city,
    state,
    country,
    subjects,
    updatedOn
} = detail ? detail : '';
const profileImage = 'bobby.jpg';
return (
<Card color="info" >
<Row noGutters>
<Col auto="true">
<CardImg top width="100%" src={profileImage} className="rounded" />
</Col>
<Col>
<CardBody>
gender: {gender}
<CardTitle tag="h4">Full Name: {firstName || '- - -'} {lastName || '- - -'} </CardTitle>
<CardText>user: {user} </CardText>
<CardText>email: {email} </CardText>
<CardText>Account Status: {accountStatus}</CardText>
<CardText>Role: {role} </CardText>
<details>
<summary>personal details</summary>
<CardText>Date of birth: <Moment date={dateOfBirth} format="DD/MM/YYYY" /> </CardText>
<CardText>Blood Group: {bloodGroup}</CardText>
</details>
{(address || city || state || country) ? 
<details>
<summary>Address</summary>
<address>
{address && address}
{city && `, ${city}`}
{state && `, ${state}`}
{country && `, ${country}`}
</address>
</details>
 : 
<CardText>
Address 
</CardText>
}
<h5>updatedOn: <Moment format="ddd DD/MM/YYYY" date={updatedOn} /> </h5>

<h5>join: <Moment format="ddd DD-MM-YYYY" date={createdOn} /></h5>
<Button onClick={(e)=>{
e.preventDefault();
rest.edit(true);
}} >Edit</Button>
</CardBody>
</Col>
</Row>
</Card>
)};//endProfileView;

const ProfileEdit = ({id, ...rest})=>{
const USER_UPDATE_QUERY = gql`mutation updateUser($id: String, $detail: UserInput){
    updateUser(id: $id, detail: $detail){
    _id user detail{ updatedOn}
}}`;//endQuery;
const [updateUser, {loading, error, data}] = useMutation(USER_UPDATE_QUERY, {
onError: (err)=>alert(err)
})
if(loading) return <Spinner color="primary" />;
// alert(id)
return (
<Form onSubmit={(ev)=>{
ev.preventDefault();
const obj = ev.target;
const newUser = {};
_.map(obj, (val)=>{
let { name, value, type } = val;
if(type==="button"||type==="submit"||type==="reset") {}else{
    newUser[name] = value;
};//endif;
})
alert(JSON.stringify(newUser));
updateUser({
    variables: {
        id: id,
        detail: newUser
    }
})
}}>
<UserForm />
</Form>
)};//endProfileEdit;

const UserComponent = ({id, ...rest})=>{
const [edit, setEdit] = useState(false);
return (
<>
<h1>Member Profile {edit ? "- edit" : ''} </h1>
{(!edit) ? (<Profile id={id} edit={setEdit} />) : (<ProfileEdit id={id} edit={setEdit} />)}
</>
)};//TheEnd;
export default UserComponent;