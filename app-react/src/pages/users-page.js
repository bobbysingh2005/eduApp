import { gql, useMutation, useQuery } from '@apollo/client';
import React from 'react';
import { Button, Card, CardBody, CardFooter, CardGroup, CardHeader, CardLink, CardText, CardTitle, Container, Spinner } from 'reactstrap';
import Moment from 'react-moment';

const UserCard = (props)=>{
const {_id, user, email, detail, createdOn, lastAccess, ...rest} = props;
const { profileType,  firstName, lastName, role} = detail;
return (
<Card>
<CardHeader>
<CardLink 
href={`/user/detail/${role}/${_id}`} 
>{user}</CardLink>
</CardHeader>
<CardBody>
<CardTitle>
{firstName} {lastName}
    </CardTitle>
<CardText>
join: <Moment date={createdOn} format="DD/MM/YYYY" />
</CardText>
<CardText>
last access: <Moment date={lastAccess} format="DD/MM/YYYY" />
</CardText>
</CardBody>
<CardFooter>
<Button 
onClick={(e)=>{
e.preventDefault();
    rest.remove({
        variables: { id: _id}
    })
rest.refresh()
}}>remove</Button>
</CardFooter>
</Card>
)};//end;

const UsersPage = ()=>{
const USER_QUERY = gql`{
    users{
        _id user email detail{ firstName lastName profileType role updatedOn}
        updatedOn createdOn lastAccess
    }}`;
const REMOVE_QUERY = gql`mutation removeUser($id:String){removeUser(id:$id){ _id user email createdOn}}`;
const [removeUser] = useMutation(REMOVE_QUERY, {
    onError: (err)=>alert(err)
})

const {loading, error, data, refetch} = useQuery(USER_QUERY, {
    onError: (err)=>alert(err)
})
if(loading) return <p>Loading... {Spinner} </p>;
return (
<Container fluid>
<h1>Members</h1>
<CardGroup>
{(!data) ? 'soory' : data.users.map((obj, i)=>{
return <UserCard key={obj} {...obj} remove={removeUser} refresh={refetch} />
})}
</CardGroup>
</Container>
)};//end;
export default UsersPage;