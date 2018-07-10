import React from 'react';
import {
  Collapse,
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

const Topper = () => {
  return(
  <div>
    <Navbar className="Navbar">

      <img style={{height:"2em", marginRight:"1em"}} src={process.env.PUBLIC_URL + "images/images.png"}/>
          His Majesty's Holy Inquisition
        </Navbar>
  </div>
  )
};

export default Topper;
