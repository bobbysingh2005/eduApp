import { gql, useMutation, useQuery } from '@apollo/client';
import React from 'react';
import Moment from 'react-moment';
import { useHistory } from 'react-router-dom';
import { Button, Card, CardBody, CardFooter, CardGroup, CardHeader, CardImg, CardLink, CardText, CardTitle, Container, Spinner } from 'reactstrap';

const UsersPage = ()=>{
const History = useHistory();
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
if(loading) return <Spinner />;

return (
<>
<h1>Members</h1>
<CardGroup>
{!data && (
<Card body>
<CardTitle tag="h2">No Users Found</CardTitle>
</Card>
)}
{data && data.users.map((obj, i)=> {

return (
<Card body color="primary"
onClick={(e)=>{
    e.preventDefault();
History.push({
    pathname: '/user',
state: {
    from: {
        name: '/users',
        id: obj._id
    }
}
})
}}
>
<CardImg left src="image/no-avatar.svg" alt={`user photo for ${obj.user}`} />
<CardTitle tag="h5">{obj.user}</CardTitle>
<CardText>
last login: <Moment date={obj.lastAccess} format="DD-MM-YYYY (hh:mm a)" />
</CardText>
</Card>
)})}
</CardGroup>
</>
)};//end;
export default UsersPage;