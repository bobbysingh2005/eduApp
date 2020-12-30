// main route
import React, {Suspense, lazy } from 'react';
import {BrowserRouter as Routes, Redirect, Route, Switch, useLocation } from 'react-router-dom';
import { Spinner } from 'reactstrap';
import Layout from '../layout';
import HelMet from 'react-helmet';
import IsAuthor from '../components/author';
import Cookie from 'js-cookie';

const Loader = ()=><p>Loading... {Spinner} </p>;

const Pages = [
{name: "home", url:"/home", pageName: "home-page", title: "EduApp - Home", description: "Education Management system" },
{name: "users", url:"/users", pageName: "users-page", title: "Members", description: "Members list" },
{name: "MemberPage", url:"/user/:action/:type/:id", pageName: "user-page", title: "eduApp - Member Profile" },
{name: "SignUp", url:"/signup", pageName: "signup-page", title: "eduApp - Member registration", description: "Members registration", public: true },
{name: "Login", url:"/login", pageName: "login-page", title: "eduApp - Login", public: true },
{name: "Logout", url:"/logout", pageName: "logout-page", title: "eduApp - Logout", public: true },
{name: "Roles", url:"/users/roles", pageName: "roles-page", title: "eduApp - Member Roles list", description: "Members roles" },
{name:"PageNotFount", url: "/404-page", pageName: "404-page", public: true}
];//end;

const MainRoutes = ()=>{
const fromUrl = window.location.pathname;
return (
<Suspense fallback={Loader}>
<Routes>
<IsAuthor />
<Switch>
{Pages.map((obj, i)=>{
const Page = lazy(()=>import('../pages/'+obj.pageName+'.js'));
if(obj.public) return <Route exect path={obj.url} component={Page} />

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
state: { from: fromUrl}
}}/>
</Switch>
</Routes>
</Suspense>)};
export default MainRoutes;