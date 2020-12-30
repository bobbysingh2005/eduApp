import React, {useState} from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Spinner } from 'reactstrap';
import Cookie from 'js-cookie';

const IsAuthor = ()=>{
const [author, setAuthor] = useState();
const History = useHistory();
const location = useLocation();
const session = Cookie.get('token') ? Cookie.get('token') : false;
if(!session){
if(location.pathname === '/login') return true;
if(location.pathname==="/signup") return true;
History.push({
    pathname: '/login',
    state: { from: location.pathname}
})
}else{
return false;
};//endif;

return (
<p>Loading... {Spinner}</p>
)};//endFunc;

export default IsAuthor;