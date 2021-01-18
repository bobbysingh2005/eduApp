// main layout
import React, { Component, Fragment } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { Container } from "reactstrap";
import Sidebar from "../components/sidebar";
import MainFooter from "../components/footer";

class Layout extends Component {
constructor(props) {
super(props);
this.state = {
isLogin: false,
author: {
user: "",
email: "",
role: "",
token: "",
},
};
} //endConstructor;

componentDidMount() {}
render() {
return (
<Fragment>
<aside>
<Sidebar {...this.props} />
</aside>
<section>
{this.props.children}
</section>
<MainFooter />
</Fragment>
);
}
} //end;

export default Layout;
