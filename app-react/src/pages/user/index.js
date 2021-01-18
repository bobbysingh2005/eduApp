import React, { Fragment } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Button, Row, Spinner } from 'reactstrap';
import {getUser} from '../../gqls';
import { useQuery } from '@apollo/client';

function UserPage (props){
const History = useHistory();
const location = useLocation();
const {from} = (location.state) ? location.state : false;
if(!from) History.goBack();
const {loading, error, data, refetch} = useQuery(getUser, {
variables: {id: from.id},
    onError: err => alert(err)
});//endQuery;
if(loading) return <Spinner color="primary" />;

return (
<section>
{error && (<p>Error: {error.message}</p>)}
<h1>Name: {data.user} </h1>
</section>
)};//TheEnd;
export default UserPage;