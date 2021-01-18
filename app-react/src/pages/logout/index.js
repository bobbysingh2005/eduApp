import React from 'react';
import { Button, Spinner } from 'reactstrap';
import Cookie from 'js-cookie';
import { useHistory, useLocation } from 'react-router-dom';

const LogoutPage = (props)=>{
const History = useHistory();
const location = useLocation();
    const isLogged = Cookie.get('token');
if(isLogged) {
Cookie.remove('token');
return (
<div>
<h1>You are successfully logout </h1>
<Button 
onClick={()=>History.push('/')}
>go to Home</Button>
</div>)
};//endif;
return (
<div>
<h1>Logout</h1>
<p>you are successfully logout</p>
<Button 
onClick={()=>History.push('/')}
>go to Home</Button>
</div>
)};//TheEnd;
export default LogoutPage;