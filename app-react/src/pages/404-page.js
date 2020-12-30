import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Jumbotron, Spinner } from 'reactstrap';

const PageNotFound = (props)=>{
    const history = useHistory();
    const [count, setCount] = useState(15);
useEffect(()=>{
setTimeout(()=>{
if(count===0) history.push('/home');
setCount(count-1)
}, 1000)
})
return (
<Jumbotron>
<h1>404 Page</h1>
<p>Sorry Page not found</p>
<Button onClick={()=>history.push('/home')}>
back to home page {count} {Spinner}
</Button>
</Jumbotron>
)};//end;
export default PageNotFound;