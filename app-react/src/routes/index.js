// main route
import React, { Suspense, lazy } from 'react';
import {BrowserRouter as Routes,  Redirect,  Route,  Switch } from 'react-router-dom';
import { Spinner } from 'reactstrap';
import pages from './routes-list';
import Layout from '../layout';
import HelMet from 'react-helmet';
import IsAuthor from '../components/author';

const MainRoutes = ()=>{
const currentUrl = window.location.pathname;
return (
<Suspense fallback={<Spinner color="primary" />}>
<Routes>
<IsAuthor />
<Switch>
{pages.map((obj, i)=>{
const Page = lazy(()=>import("../pages/"+obj.pageName));
if(obj.public) return (<Route exect path={obj.url} component={Page} />);

return <Route exect path={obj.url}>
<Layout>
<HelMet>
<title>{obj.title}</title>
</HelMet>
<Page />
</Layout>
</Route>
})}

<Redirect exact from="/" to="/home" />
<Redirect from="/*" to={{
pathname: "/404-page",
state: { from: currentUrl}
}}/>
</Switch>
</Routes>
</Suspense>
)};

export default MainRoutes;