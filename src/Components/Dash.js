import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'
import { userLogout } from '../Redux/Actions/authActions'
import {
  Form, Input, Label,
  Button,
  Card,
  CardBody,
  CardTitle,
  Col,
  Navbar,
  NavbarBrand,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
  import { Link } from 'react-router-dom'
  import renderIf from './Util'
  import ParticleEffectButton from 'react-particle-effect-button'
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
      this.props.fetchLocationReport(this.state.case, this.props.history)
    }else if(this.props.case_search_result.length > 0){
      this.props.fetchCaseReport(this.state.case, this.props.history)
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

  submitNameQuerry = (e) => {
    e.preventDefault()
    if (this.state.animating) return
    this.setState({
      hidden: !this.state.hidden,
      animating: true
    })
    setTimeout(() => {this.props.fetchNameReport(this.state.name, this.props.history)}, 1500)
  }

  submitCaseQuerry = (e) => {
    e.preventDefault()
    if (this.state.animating) return
    this.setState({
      hidden: !this.state.hidden,
      animating: true
    })
    setTimeout(() => {this.props.fetchCaseReport(this.state.case, this.props.history)}, 1500)
  }

  submitLocationQuerry = (e) => {
    e.preventDefault()
    if (this.state.animating) return
    this.setState({
      hidden: !this.state.hidden,
      animating: true
    })
    setTimeout(() => {this.props.fetchLocationReport(this.state.location, this.props.history)}, 1500)
  }

  render() {

    const {
      hidden,
      animating
    } = this.state

    if(this.state.caseSearch === false && this.state.nameSearch === false && this.state.locationSearch === false){
      return (
        <div className="dash">
          <Col>
            <Navbar className="Navbar">


              <NavbarBrand><img style={{height:"2em", marginRight:"1em"}} src={process.env.PUBLIC_URL + "/images.png"} />His Majesty's Holy Inquisition
             </NavbarBrand>
             <NavbarBrand className="text-center"> Welcome {localStorage.rank.replace(/"/g,"")} {localStorage.user_name.replace(/"/g,"")} </NavbarBrand>

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

              <Link className="NavbarButtons" to="/Vox_Dispatch" style={{ fontSize:"15pt"}}>Astropathic Logs</Link>
               <Button className="NavbarButtons" onClick={ this.logout }>Logout</Button>


              
         </Navbar>

          </Col>
        </div>
      );
    } else if(this.state.caseSearch === true) {


    return (
      <div className="Search">
        <Col>
          <Navbar className="Navbar">


            <NavbarBrand><img style={{height:"2em", marginRight:"1em"}} src={process.env.PUBLIC_URL + "/images.png"} />His Majesty's Holy Inquisition
            </NavbarBrand>
             <NavbarBrand className="text-center"> Welcome {localStorage.rank.replace(/"/g,"")} {localStorage.user_name.replace(/"/g,"")} </NavbarBrand>


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

            <Link className="NavbarButtons" to="/Vox_Dispatch" style={{ fontSize:"15pt"}}>Astropathic Logs</Link>
            <Button className="NavbarButtons" onClick={ this.logout }>Logout</Button>
            
          </Navbar>

        </Col>
        <Card className="col-md-6 offset-md-3 navDropdown">

        <CardBody className="navDropdown">
          <CardTitle>Case Query</CardTitle>
            <Form onSubmit={this.submitCaseQuerry}>
              <Label className="btns" for="caseNumber-field">Enter Case Number</Label>
                      <Input
                        className="put"
                      type="caseNumber"
                      name="caseNumber"
                      id="caseNumber-field"
                      value={this.state.case}
                      onChange={e => this.setState({ case: e.target.value})}
                    />

                    <ParticleEffectButton
                      hidden={hidden}
                      color='#850909'

                    >
                      <Button style={{marginTop:"1em", backgroundColor:"black", borderColor:"#850909", color:"#850909"}} type="submit">Submit</Button>

                    </ParticleEffectButton>


        </Form>
        </CardBody>
      </Card>
      </div>
    );

  }else if(this.state.nameSearch === true) {


  return (
    <div className="Search">
      <Col>
        <Navbar className="Navbar">


            <NavbarBrand><img style={{height:"2em", marginRight:"1em"}} src={process.env.PUBLIC_URL + "/images.png"} />His Majesty's Holy Inquisition
            </NavbarBrand>
             <NavbarBrand className="text-center"> Welcome {localStorage.rank.replace(/"/g,"")} {localStorage.user_name.replace(/"/g,"")} </NavbarBrand>


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

            <Link className="NavbarButtons" to="/Vox_Dispatch" style={{ fontSize:"15pt"}}>Astropathic Logs</Link>
            <Button className="NavbarButtons" onClick={ this.logout }>Logout</Button>
            
          </Navbar>

      </Col>
      <Card className="col-md-6 offset-md-3 navDropdown">

      <CardBody className="navDropdown">
        <CardTitle>Name Query</CardTitle>

        <Form onSubmit={this.submitNameQuerry}>
          <Label className="btns" for="caseNumber-field">Enter Name Querry</Label>
                  <Input
                    className="put"
                  type="caseNumber"
                  name="caseNumber"
                  id="caseNumber-field"
                  value={this.state.name}
                  onChange={e => this.setState({ name: e.target.value})}
                />

                <ParticleEffectButton
                  hidden={hidden}
                  color='#850909'

                >
                  <Button style={{marginTop:"1em", backgroundColor:"black", borderColor:"#850909", color:"#850909"}} type="submit">Submit</Button>

                </ParticleEffectButton>


        </Form>
      </CardBody>
    </Card>
    </div>
  );

}else if(this.state.locationSearch === true) {


  return (
    <div className="Search">
      <Col>
        <Navbar className="Navbar">


          <NavbarBrand><img style={{height:"2em", marginRight:"1em"}} src={process.env.PUBLIC_URL + "/images.png"} />His Majesty's Holy Inquisition
          </NavbarBrand>
          <NavbarBrand className="text-center"> Welcome {localStorage.rank.replace(/"/g,"")} {localStorage.user_name.replace(/"/g,"")} </NavbarBrand>


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

          <Link className="NavbarButtons" to="/Vox_Dispatch" style={{ fontSize:"15pt"}}>Astropathic Logs</Link>
          <Button className="NavbarButtons" onClick={ this.logout }>Logout</Button>

        </Navbar>

      </Col>
      <Card className="col-md-6 offset-md-3 navDropdown">
      <CardBody className="navDropdown">
        <CardTitle className="navDropdown">Location Query</CardTitle>
        <Form onSubmit={this.submitLocationQuerry}>
          <Label className="btns" for="caseNumber-field">Enter Location Query</Label>
                  <Input
                    className="put"
                  type="caseNumber"
                  name="caseNumber"
                  id="caseNumber-field"
                  value={this.state.location}
                  onChange={e => this.setState({ location: e.target.value})}
                />

                <ParticleEffectButton
                  hidden={hidden}
                  color='#850909'

                >
                  <Button style={{marginTop:"1em", backgroundColor:"black", borderColor:"#850909", color:"#850909"}} type="submit">Submit</Button>

                </ParticleEffectButton>


        </Form>
      </CardBody>
    </Card>
    </div>
    );
  }
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
