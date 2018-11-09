import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import {
  Navbar,
  NavbarBrand,
  Button
} from 'reactstrap'
import { fetchCaseReport, fetchNameReport, fetchLocationReport } from '../Redux/Actions/FieldReportActions'


class DashTopper extends Component {

  render() {

  return(
    
  <div>
      <Navbar className="Navbar">
        <NavbarBrand className="mr-5 navDropdown"><img style={{height:"2em", marginRight:"1em"}} src={process.env.PUBLIC_URL + "/images.png"} alt="Inquisition Logo" />His Majesty's Holy Inquisition
        </NavbarBrand>

        { localStorage.rank ? <NavbarBrand className="text-center mx-auto navDropdown" style={{marginLeft:"25em"}} > Welcome {localStorage.rank.replace(/"/g,"")} {localStorage.user_name.replace(/"/g,"")} </NavbarBrand> : null }

        <Button className="NavbarButtons ml-auto mr-3 navDropdown" onClick={ this.props.history.goBack } >Back</Button>

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

export default withRouter(connect(null, mapDispatchToProps) (DashTopper));
