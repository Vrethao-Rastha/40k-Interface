import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'
import { userLogout } from '../Redux/Actions/authActions'
import {
  Button,
  Navbar,
  NavbarBrand,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
  import { Link } from 'react-router-dom'
  import NameQuerry from './NameQuerry'
  import LocationQuerry from './LocationQuerry'
  import CaseQuerry from './CaseQuerry'
  import InfoQuerry from './InfoQuerry'
  import { fetchCaseReport, fetchNameReport, fetchLocationReport, clearCaseReport, clearNameReport, clearLocationReport } from '../Redux/Actions/FieldReportActions'

class Dash extends Component {

  state = {
    caseSearch: false,
    nameSearch: false,
    locationSearch: false,
    infoSearch: false,
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
    this.setState({caseSearch: !this.state.caseSearch, nameSearch: false, locationSearch: false, infoSearch: false})
  }

  toggleName = () => {
    this.setState({nameSearch: !this.state.nameSearch, caseSearch: false, locationSearch: false, infoSearch: false})
  }

  toggleLocation = () => {
    this.setState({locationSearch: !this.state.locationSearch, nameSearch:false, caseSearch: false, infoSearch: false})
  }

  toggleInfo = () => {
    this.setState({infoSearch: !this.state.infoSearch, nameSearch: false, locationSearch: false, caseSearch: false})
  }

  logout = (e) => {
    this.props.userLogout(this.props.history)
  }

  render() {
      return (
        <div className="dash">
          <Navbar className="Navbar">
              <NavbarBrand className="navDropdown"><img style={{height:"2em", marginRight:"1em"}} src={process.env.PUBLIC_URL + "/images.png"} alt="Inquisition Logo" />His Majesty's Holy Inquisition
             </NavbarBrand>

             { localStorage.rank ? <NavbarBrand className="text-center mx-auto navDropdown"> Welcome {localStorage.rank.replace(/"/g,"")} {localStorage.user_name.replace(/"/g,"")} </NavbarBrand> : null }
             
             <UncontrolledDropdown className="navDropdown">
               <DropdownToggle className="navDropdown" style={{borderRadius:"25px", color:"#850909", backgroundColor:"black", border:"none", borderColor:"#850909"}} caret>
                              File Access
               </DropdownToggle>
                 <DropdownMenu right className="navDropdown">
                 {/* <DropdownItem className="navDropdown" style={{color:"white"}} header>Personel Records</DropdownItem>
                 <DropdownItem divider />
                   <DropdownItem className="navDropdown btn btn-primary text-center" onClick={this.toggleCase}>Case Search
                   </DropdownItem>

                  <DropdownItem className="navDropdown btn btn-primary text-center" onClick={this.toggleName}>Name Search
                  </DropdownItem>

                  <DropdownItem className="navDropdown btn btn-primary text-center" onClick={this.toggleLocation}>Location Search
                  </DropdownItem> */}

                  <DropdownItem className="navDropdown text-center" style={{color:"white"}} header>Information</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem className="navDropdown btn btn-primary text-center" onClick={this.toggleInfo}>Data Query
                  </DropdownItem>

                  <DropdownItem className="navDropdown text-center">
                    {(localStorage.admin !== undefined && localStorage.admin.replace(/"/g,"") === "17") ? <Link className="navDropdown btn btn-primary" to="/Admin">Admin</Link>
                    : null }
                  </DropdownItem>

                  

                </DropdownMenu>
              </UncontrolledDropdown>

              <Link className="NavbarButtons mx-5" to="/Vox_Dispatch" style={{marginTop: ".5em"}}>Astropathic Logs</Link>
               <Button className="NavbarButtons mr-5" onClick={ this.logout }>Logout</Button>   
        </Navbar>

          { this.state.caseSearch ? <CaseQuerry /> : null }
          { this.state.nameSearch ? <NameQuerry /> : null }
          { this.state.locationSearch ? <LocationQuerry /> : null }
          { this.state.infoSearch ? <InfoQuerry /> : null }
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