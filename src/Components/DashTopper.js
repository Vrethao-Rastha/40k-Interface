import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
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
import { fetchCaseReport, fetchNameReport, fetchLocationReport } from '../Redux/Actions/FieldReportActions'


const DashTopper = () => {
  return(
  <div>
    <Col>
      <Navbar className="Navbar">


        <NavbarBrand><img style={{height:"2em", marginRight:"1em"}} src={process.env.PUBLIC_URL + "images/images.png"} />His Majesty's Holy Inquisition
</NavbarBrand>
          <NavbarBrand style={{marginLeft:"25em"}}> Welcome {localStorage.rank.replace(/"/g,"")} {localStorage.user_name.replace(/"/g,"")} </NavbarBrand>


          <UncontrolledDropdown className="navDropdown" style={{marginLeft:"15em"}}>
              <DropdownToggle className="navDropdown" style={{borderRadius:"25px", color:"#850909", backgroundColor:"black", border:"none"}} caret>
                        File Access
                      </DropdownToggle>
              <DropdownMenu right className="navDropdown">
                      <DropdownItem className="navDropdown">
                        <Button className="navDropdown" style={{marginTop: "1em", marginLeft:"1em", fontSize:"15pt"}} onClick={this.toggleCase}>Case Search</Button>
                      </DropdownItem>

                      <DropdownItem className="navDropdown">
                        <Button  onClick={this.toggleName} style={{marginTop: "1em", marginLeft:"1em", fontSize:"15pt"}} className="navDropdown">Name Search</Button>
                      </DropdownItem>
                      <DropdownItem className="navDropdown">
                        <Button onClick={this.toggleLocation} style={{marginTop: "1em", marginLeft:"1em", marginRight:"1em", fontSize:"15pt"}} className="navDropdown">Location Search</Button>
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>

        <Link className="NavbarButtons" to="/Vox_Dispatch" style={{ fontSize:"15pt"}}>Astropathic Logs</Link>

        <Nav navbar>

        </Nav>
      </Navbar>

    </Col>
  </div>
  )
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({
  fetchCaseReport,
  fetchNameReport,
  fetchLocationReport
}, dispatch)

export default connect(null, mapDispatchToProps) (DashTopper);
