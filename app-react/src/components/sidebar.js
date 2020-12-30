import React, { useState } from 'react';
import { Button, Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import Cookie from 'js-cookie';

function MainSidebar (props) {
    const [isOpenMembers, setIsOpenMembers] = useState(false);
const MembersToggle = ()=>setIsOpenMembers(!isOpenMembers);
const author = Cookie.get('token');
// alert(`author: ${author}`)
return (
<Navbar light>
<NavbarBrand href="/">Logo</NavbarBrand>
<Nav>
<NavItem>
<NavLink href="/home">home</NavLink>
</NavItem>
<NavItem>
<Button color="primery" onClick={MembersToggle} style={{marginBottom: '1rem'}}>Members</Button>
<Collapse isOpen={isOpenMembers}>
<Nav>
<NavItem>
<NavLink href="/users">all</NavLink>
</NavItem>
<NavItem>
    <NavLink href="/signup">signUp</NavLink>
</NavItem>
<NavItem>
<NavLink href="/users/roles">Roles</NavLink>
</NavItem>
</Nav>
</Collapse>
</NavItem>
{(author!==null) ? (
<NavItem>
<NavLink href="/logout">logout</NavLink>
</NavItem>
) : (
<NavItem>
<NavLink href="/login">Login</NavLink>
</NavItem>
)}
</Nav>
</Navbar>
)};//end;

export default MainSidebar;