import React, { Component } from 'react';
import { Navbar, NavbarBrand, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label } from 'reactstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'
import { userLogin, userRegister } from '../Redux/Actions/authActions'
import ParticleEffectButton from 'react-particle-effect-button'
import ReactGlitch from 'react-glitch';


class Login extends Component {
  state = {
    modal: false,
    toggle: false,
    user_name: '',
    password: '',
    rank: "",
    hidden: false,
    animating: false,
    glitch: false,
  }

  componentDidMount(){
    setTimeout(() => {this.setState({modal: true})}, 3000)
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  toggleRegistration = () => {
    this.setState({
      toggle: !this.state.toggle,
      modal: !this.state.modal
    });
  }

  _onToggle = () => {
    this.setState({glitch: true})
    if (this.state.animating) return

    this.setState({
      hidden: !this.state.hidden,
      animating: true,
    })
    setTimeout(() => {this.props.userLogin(this.state, this.props.history)}, 3000)
  }

  setRank = (e) => {
    this.setState({
      rank: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.userRegister(this.state.user_name, this.state.password, this.state.rank, this.props.history)
  }

  render() {

    const { password, user_name, rank } = this.state
    const Enabled = password.length > 0 && user_name.length > 0 && rank.length > 0
    const loginEnabled = password.length > 0 && user_name.length > 0

    const {
      buttonStyles,
      buttonOptions
    } = this.props

    const {
      hidden,
    } = this.state

      return (
        <div>
          {(this.state.glitch === false) ?
          <div className="Login"></div>
        : null }

          <Navbar className="Navbar">
            <NavbarBrand><img style={{height:"2em", marginRight:"1em"}} src={process.env.PUBLIC_URL + "/images.png"} alt="Inquisition Logo" />His Majesty's Holy Inquisition</NavbarBrand>
            <Button className="mr-3 login-button" style={{backgroundColor:"#850909", color:"black", fontFamily: 'MedievalSharp'}} onClick={ this.toggleRegistration }>Register</Button>
          </Navbar>


          {(this.state.glitch === true) ?
          <ReactGlitch className="glitch"
            style={{width:862, height:1210, marginLeft:"30%"}}
            src={require('../images/ravenor.jpg')} 
            glitching={true} 
            glitchOptions={{ 
              seed: [60], 
              quality: 99, 
              amount: 0, 
              iterations: [50] 
            }}
            speed={[100]} 
          />
        : null }
        

          <Modal isOpen={this.state.modal} toggle={this.toggle} className="CaseSearchModal">
          <ModalHeader className="CaseSearchModal" style={{borderBottomColor:"#850909"}}  toggle={this.toggle}>Enter Credentials</ModalHeader>
          <ModalBody className="CaseSearchModal" >
            <Form>
              <FormGroup>

                    <Label className="btns" for="name-field">Identity</Label>

                        <Input
                          className="put"
                        type="name"
                        name="name"
                        id="exampleName"
                        value={this.state.user_name}
                        onChange={e => this.setState({ user_name: e.target.value})}
                      />


                      <Label className="btns" for="location-field">Clearance Cypher</Label>

                        <Input
                          className="put"
                          type="password"
                          name="password"
                          id="exampleLocation"
                          value={this.state.password}
                          onChange={e => this.setState({ password: e.target.value})}
                        />
                      </FormGroup>

                      <div>


            <ParticleEffectButton
             hidden={hidden}
             color='#850909'
             onComplete={this._onAnimationComplete}
            {...buttonOptions}
             >

             <Button disabled={ !loginEnabled } className="NavbarButtons" 
                style={{
                background: '#850909',
                color: '#fff',
                padding: '1.5rem 3rem',
                border: '0',
                borderRadius: 5,
                cursor: 'pointer',
                fontSize: '1.2em',
                marginLeft: '5.5em',
               ...buttonStyles
              }}
              onClick={this._onToggle}
              >Submit Authority
           </Button>
        </ParticleEffectButton>
      </div>
   </Form>
 </ModalBody>

  </Modal>

  {this.state.toggle ? 

  <Modal isOpen={this.state.modal} onClosed={ this.toggleRegistration } toggle={this.toggle} className="CaseSearchModal">
            <ModalHeader className="CaseSearchModal" toggle={this.toggle} style={{borderBottomColor:"#850909"}}>Enter Registration Credentials</ModalHeader>
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
                <Button disabled={!Enabled} style={{backgroundColor:"#850909", color:"black", fontFamily: 'MedievalSharp'}} type="submit">Submit</Button>
              </Form>
            </ModalBody>
            
          </Modal>
        : null }
</div>
      );
    }
  }

const mapDispatchToProps = dispatch => bindActionCreators({
  userLogin,
  userRegister
}, dispatch)
  export default withRouter( connect(null, mapDispatchToProps)(Login));
