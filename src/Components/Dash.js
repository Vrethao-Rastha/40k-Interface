import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'
import { userLogout } from '../Redux/Actions/authActions'
import {
  Button,
  Col,
  Navbar,
  NavbarBrand,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
  import { Link } from 'react-router-dom'
  import renderIf from './Util'
  import NameQuerry from './NameQuerry'
  import LocationQuerry from './LocationQuerry'
  import CaseQuerry from './CaseQuerry'
  import { fetchCaseReport, fetchNameReport, fetchLocationReport, clearCaseReport, clearNameReport, clearLocationReport } from '../Redux/Actions/FieldReportActions'

class Dash extends Component {

  state = {
    caseSearch: false,
    nameSearch: false,
    locationSearch: false,
    name: '',
    location: '',
    case: '',
    hidden: false,
    animating: false
  }

  componentDidMount() {
    if(this.props.name_search_result.length > 0){
      this.props.clearNameReport(this.state.name, this.props.history)
    }else if(this.props.location_search_result.length > 0){
      this.props.clearLocationReport(this.state.case, this.props.history)
    }else if(this.props.case_search_result.length > 0){
      this.props.clearCaseReport(this.state.case, this.props.history)
    }
  }

  toggleCase = () => {
    this.setState({caseSearch: !this.state.caseSearch, nameSearch: false, locationSearch: false})
  }

  toggleName = () => {
    this.setState({nameSearch: !this.state.nameSearch, caseSearch: false, locationSearch: false})
  }

  toggleLocation = () => {
    this.setState({locationSearch: !this.state.locationSearch, nameSearch:false, caseSearch: false})
  }

  logout = (e) => {
    this.props.userLogout(this.props.history)
  }

  render() {

      return (
        <div className="dash">
          <Col>
            <Navbar className="Navbar">


              <NavbarBrand><img style={{height:"2em", marginRight:"1em"}} src={process.env.PUBLIC_URL + "/images.png"} alt="Inquisition Logo" />His Majesty's Holy Inquisition
             </NavbarBrand>
             { localStorage.rank ? <NavbarBrand className="text-center"> Welcome {localStorage.rank.replace(/"/g,"")} {localStorage.user_name.replace(/"/g,"")} </NavbarBrand> : null }
             

                <UncontrolledDropdown className="navDropdown pull-left">
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
                     <DropdownItem>
                            {renderIf(localStorage.admin === 'true',

                      <Link className="NavbarButtons" style={{marginTop: "1em", marginLeft:"3em", marginRight:"1em", fontSize:"15pt"}} to="/Admin">Admin</Link>

                          )}
                    </DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>

              <Link className="NavbarButtons" to="/Vox_Dispatch" style={{ fontSize:"15pt", marginTop:".5em"}}>Astropathic Logs</Link>
               <Button className="NavbarButtons" onClick={ this.logout }>Logout</Button>


              
         </Navbar>

          </Col>
          { this.state.caseSearch ? <CaseQuerry /> : null }
          { this.state.nameSearch ? <NameQuerry /> : null }
          { this.state.locationSearch ? <LocationQuerry /> : null }
        </div>
      );
    } 
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({
  fetchCaseReport,
  fetchNameReport,
  fetchLocationReport,
  userLogout,
  clearCaseReport,
  clearNameReport,
  clearLocationReport
}, dispatch)

const mapStateToProps = state => ({
  case_search_result: state.case_search_result,
  name_search_result: state.name_search_result,
  location_search_result: state.location_search_result
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Dash));
