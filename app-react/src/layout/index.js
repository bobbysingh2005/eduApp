// main layout
import React, { Component } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Container } from 'reactstrap';
import Sidebar from '../components/sidebar';



class Layout extends Component {
constructor(props){
super(props);
this.state = {
    isLogin: false,
    author: {
        user: '',
        email: '',
        role: '',
        token: ''
    }
}
};//endConstructor;

componentDidMount(){

}
render(){
// const {path, page}  = this.props;
// const PageComponent = lazy(()=>import('../pages/'+page+'-page.js'));
return (
<div id="wrapper">
<Sidebar {...this.props} />
<Container fluid>
{this.props.children}
</Container>
</div>
)}};//end;

export default Layout;