import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  Navbar,
  NavbarBrand
} from 'reactstrap'
import { fetchCaseReport, fetchNameReport, fetchLocationReport } from '../Redux/Actions/FieldReportActions'


class DashTopper extends Component {
  render() {
  return(
  <div>
      <Navbar className="Navbar">
        <NavbarBrand className="mr-5"><img style={{height:"2em", marginRight:"1em"}} src={process.env.PUBLIC_URL + "/images.png"} alt="Inquisition Logo" />His Majesty's Holy Inquisition
        </NavbarBrand>

        { localStorage.rank ? <NavbarBrand className="text-center mx-auto" style={{marginLeft:"25em"}} > Welcome {localStorage.rank.replace(/"/g,"")} {localStorage.user_name.replace(/"/g,"")} </NavbarBrand> : null }

        <Link className="NavbarButtons ml-auto mr-3" to="/Dash" style={{ fontSize:"15pt", marginTop:".5em"}}>Back</Link>

      </Navbar>

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
