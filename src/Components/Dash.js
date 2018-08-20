import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'
import {
  Form, FormGroup, Input, Label,
  Button,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Collapse,
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
  DropdownItem } from 'reactstrap';
  import { Link } from 'react-router-dom'
  import { fetchCaseReport, fetchNameReport, fetchLocationReport } from '../Redux/Actions/FieldReportActions'

class Dash extends Component {

  state = {
    caseSearch: false,
    nameSearch: false,
    locationSearch: false,
    name: '',
    location: '',
    case: ''
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

  submitNameQuerry = (e) => {
    e.preventDefault()
    console.log('yup')
    this.props.fetchNameReport(this.state.name, this.props.history)
  }

  submitCaseQuerry = (e) => {
    e.preventDefault()
    console.log('yup')
    this.props.fetchCaseReport(this.state.case, this.props.history)
  }

  submitLocationQuerry = (e) => {
    e.preventDefault()
    console.log('yup')
    this.props.fetchLocationReport(this.state.location, this.props.history)
  }

  render() {
    if(this.state.caseSearch === false && this.state.nameSearch === false && this.state.locationSearch === false){
      return (
        <div className="dash">
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
      );
    } else if(this.state.caseSearch === true) {


    return (
      <div className="dash">
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
          <Button style={{marginTop:"1em", backgroundColor:"black", borderColor:"#850909", color:"#850909"}} type="submit">Submit</Button>
        </Form>
        </CardBody>
      </Card>
      </div>
    );

  }else if(this.state.nameSearch === true) {


  return (
    <div className="dash">
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
        <Button style={{marginTop:"1em", backgroundColor:"black", borderColor:"#850909", color:"#850909"}} type="submit">Submit</Button>
        </Form>
      </CardBody>
    </Card>
    </div>
  );

}else if(this.state.locationSearch === true) {


  return (
    <div className="dash">
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
        <Button style={{marginTop:"1em", backgroundColor:"black", borderColor:"#850909", color:"#850909"}} type="submit">Submit</Button>
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
  fetchLocationReport
}, dispatch)

export default withRouter(connect(null, mapDispatchToProps)(Dash));
