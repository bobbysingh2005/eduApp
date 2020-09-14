import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './home';

const app = ()=>{
return (
<Router>
<div>
<Switch>
<Route exect path="/" component={Home}/>
</Switch>
</div>
</Router>
)};//end;

export default app;
