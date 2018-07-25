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


          <NavbarBrand><img style={{height:"2em", marginRight:"1em"}} src={process.env.PUBLIC_URL + "images/images.png"} />His Majesty's Holy Inquisition
</NavbarBrand>
          <Link className="NavbarButtons" to="/Case_Search" style={{marginLeft:"3em", fontSize:"15pt"}}>Search</Link>
          <Link className="NavbarButtons" to="/File_Case" style={{ fontSize:"15pt"}}>File a Report</Link>
          <Link className="NavbarButtons" to="/Vox_Dispatch" style={{ fontSize:"15pt"}}>Astropathic Logs</Link>

          <Nav navbar>

          </Nav>
        </Navbar>

      </Col>
     </div>
  )
};

export default Topper;
