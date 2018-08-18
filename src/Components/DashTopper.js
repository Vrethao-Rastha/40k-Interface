import React from 'react';
import { Link } from 'react-router-dom'
import {
  Button,
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
  DropdownItem
} from 'reactstrap'

const DashTopper = () => {
  return(
  <div>
    <Col>
      <Navbar className="Navbar">


        <NavbarBrand><img style={{height:"2em", marginRight:"1em"}} src={process.env.PUBLIC_URL + "images/images.png"} />His Majesty's Holy Inquisition
</NavbarBrand>

<UncontrolledDropdown className="navDropdown">
  <DropdownToggle className="navDropdown" style={{borderRadius:"25px", color:"#850909", backgroundColor:"black", border:"none"}} caret>
            File Access
          </DropdownToggle>
  <DropdownMenu right className="navDropdown">
          <DropdownItem className="navDropdown">
            <Button onClick={this.toggleCase}>Case Search</Button>
          </DropdownItem>

          <DropdownItem className="navDropdown">
            <Button  onClick={this.toggleName} className="navDropdown">Name Search</Button>
          </DropdownItem>
          <DropdownItem className="navDropdown">
            <Button onClick={this.toggleLocation} className="navDropdown">Location Search</Button>
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>

      <Link className="NavbarButtons" to="/Vox_Dispatch" style={{ fontSize:"15pt"}}>Astropathic Logs</Link>
      </Navbar>

    </Col>
  </div>
  )
};

export default DashTopper;
