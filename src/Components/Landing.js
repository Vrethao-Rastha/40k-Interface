import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { userRegister } from '../Redux/Actions/authActions'
import { Navbar, NavbarBrand, Button,
  Modal, ModalHeader, ModalBody, Form,
  FormGroup, Input, Label } from 'reactstrap'
import { Link } from 'react-router-dom'


class Landing extends Component {
  state = {
    view: 0,
    modal: false,
    user_name: "",
    rank: "",
    password: ""
  }

  componentDidMount(){
    setTimeout(() => {this.setState({view: 1})}, 3000)
  }

  setRank = (e) => {
    this.setState({
      rank: e.target.value
    })
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal,
      dropdownOpen: false
    });
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.userRegister(this.state.user_name, this.state.password, this.state.rank, this.props.history)
  }

  render() {
    console.log('fired', this.state)

    if(this.state.view === 0){
      return (
        <div className="Landing">
          <Navbar className="Navbar">
            <NavbarBrand><img style={{height:"2em", marginRight:"1em"}} src={process.env.PUBLIC_URL + "/images.png"} alt="Inquisition Logo" />His Majesty's Holy Inquisition</NavbarBrand>
            
          </Navbar>
        </div>
      );

  }
  else if(this.state.view === 1){
      return (
        <div className="Landing2">
          <Navbar className="Navbar">
            <NavbarBrand><img style={{height:"2em", marginRight:"1em"}} src={process.env.PUBLIC_URL + "/images.png"} alt="Inquisition Logo" />His Majesty's Holy Inquisition</NavbarBrand>
            <Button className="mr-3 login-button" style={{backgroundColor:"#850909", color:"black", fontFamily: 'MedievalSharp'}} onClick={ this.toggle }>Register</Button>
          </Navbar>
          <Link className="btn btn-secondary col-md-2 offset-md-5 login-button" to="/Login" style={{ marginTop:"5em", backgroundColor:"#850909", color:"black", fontFamily: 'MedievalSharp'}}>Enter</Link>

          <Modal isOpen={this.state.modal} toggle={this.toggle} className="CaseSearchModal">
            <ModalHeader className="CaseSearchModal" toggle={this.toggle}>Enter Credentials</ModalHeader>
            <ModalBody className="CaseSearchModal">
              <Form onSubmit={ this.handleSubmit }>
                <FormGroup>
                  <Label>Name</Label>
                  <Input value={ this.state.user_name }
                          onChange={e => this.setState({user_name: e.target.value})}></Input>
                  <Label>Rank</Label>
                  <Input type="select" value={ this.state.rank} onChange={ this.setRank }>
                    <option></option>
                    <option value="Acolyte" >Acolyte</option>
                    <option value="Interrogator" >Interrogator</option>
                    <option value="Inquisitor" >Inquisitor</option>
                    <option value="Lord Inquisitor" >Lord Inquisitor</option>
                    <option value="Master Inquisitor" >Master Inquisitor</option>
                    <option value="Grandmaster Inquisitor" >Grandmaster Inquisitor</option>
                    <option value="Grandmaster Inquisitor Lord Terran" >Grandmaster Inquisitor Lord Terran</option>
                  </Input>
                  <Label>Password</Label>
                  <Input value={ this.state.password }
                          onChange={e => this.setState({password: e.target.value})}
                          type="password"></Input>
                          
                </FormGroup>
                <Button style={{backgroundColor:"#850909", color:"black", fontFamily: 'MedievalSharp'}} type="submit">Submit</Button>
              </Form>
            </ModalBody>
            
          </Modal>

        </div>
      );
    }
  }

}

const mapDispatchToProps = dispatch => 
  bindActionCreators({
    userRegister
  }, dispatch)


export default connect(null, mapDispatchToProps) (Landing);
