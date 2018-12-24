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
  import InfoQuerry from './InfoQuerry'
  import GlossaryQuery from './GlossaryQuery'

class Dash extends Component {

  state = {
    infoSearch: false,
    glossarySearch: false,
    name: '',
    location: '',
    case: '',
    hidden: false,
    animating: false
  }

  toggleInfo = () => {
    this.setState({infoSearch: !this.state.infoSearch})
  }

  toggleGlossary = () => {
    console.log('uyvuyvuy')
    this.setState({glossarySearch: !this.state.glossarySearch})
  }

  logout = (e) => {
    this.props.userLogout(this.props.history)
  }

  render() {
    console.log(this.state)
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

                  <DropdownItem className="navDropdown text-center" style={{color:"white"}} header>Information</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem className="navDropdown btn btn-primary text-center" onClick={this.toggleInfo}>Data Query
                  </DropdownItem>
                  <DropdownItem className="navDropdown btn btn-primary text-center" onClick={this.toggleGlossary}>Data Query
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
          { this.state.infoSearch ? <InfoQuerry /> : null }
          { this.state.glossarySearch ? <GlossaryQuery /> : null }
        </div>
      );
    } 
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({
  userLogout,
}, dispatch)

const mapStateToProps = state => ({
  
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Dash));