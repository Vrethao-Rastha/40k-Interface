import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  Col,
  Navbar,
  NavbarBrand,
  Nav
} from 'reactstrap'
import { fetchCaseReport, fetchNameReport, fetchLocationReport } from '../Redux/Actions/FieldReportActions'


class DashTopper extends Component {
  render() {
  return(
  <div>
    <Col>
      <Navbar className="Navbar">


        <NavbarBrand><img style={{height:"2em", marginRight:"1em"}} src={process.env.PUBLIC_URL + "/images.png"} alt="Inquisition Logo" />His Majesty's Holy Inquisition
        </NavbarBrand>
        { localStorage.rank ? <NavbarBrand className="text-center" style={{marginLeft:"25em"}} > Welcome {localStorage.rank.replace(/"/g,"")} {localStorage.user_name.replace(/"/g,"")} </NavbarBrand> : null }


        <Link className="NavbarButtons" to="/Dash" style={{ fontSize:"15pt", marginLeft:"20em"}}>Back</Link>

        <Link className="NavbarButtons" to="/Vox_Dispatch" style={{ fontSize:"15pt", marginLeft:"2em"}}>Astropathic Logs</Link>
        <Nav className="ml-auto" navbar></Nav>

      </Navbar>

    </Col>
  </div>
   );
  }
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({
  fetchCaseReport,
  fetchNameReport,
  fetchLocationReport
}, dispatch)

export default connect(null, mapDispatchToProps) (DashTopper);
