import React from 'react';
import {
  Button,
  Collapse,
  Col,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
  import { Link } from 'react-router-dom'

const Topper = () => {
  return(
    <div>
      <Col>
        <Navbar className="Navbar">


          <NavbarBrand><img style={{height:"2em", marginRight:"1em"}} src={process.env.PUBLIC_URL + "/images.png"} />His Majesty's Holy Inquisition
          </NavbarBrand>

          <NavbarBrand style={{marginLeft:"25em"}}> Welcome {localStorage.rank.replace(/"/g,"")} {localStorage.user_name.replace(/"/g,"")} </NavbarBrand>

          <Link className="NavbarButtons" to="/Dash" style={{marginLeft:"15em", fontSize:"15pt"}}>Return</Link>
          <Link className="NavbarButtons" to="/Vox_Dispatch" style={{ fontSize:"15pt"}}>Astropathic Logs</Link>

          <Nav navbar>

          </Nav>
        </Navbar>

      </Col>
     </div>
  )
};

export default Topper;
