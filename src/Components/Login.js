import React, { Component } from 'react';
import { Navbar, NavbarBrand, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label } from 'reactstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'
import { userLogin } from '../Redux/Actions/authActions'
import ParticleEffectButton from 'react-particle-effect-button'
import ReactGlitch from 'react-glitch';
import renderIf from './Util'


class Login extends Component {
  state = {
    modal: false,
    user_name: '',
    password: '',
    hidden: false,
    animating: false,
    glitch: false
  }

  componentDidMount(){
    setTimeout(() => {this.setState({modal: true})}, 3000)

  }

  toggle = () => {
    this.setState({
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

  render() {

    const {
      buttonStyles,
      buttonOptions
    } = this.props

    const {
      hidden,
    } = this.state
      return (
        <div>
          {renderIf(this.state.glitch === false,
          <div className="Login"></div>
        )}

          <Navbar className="Navbar">
            <NavbarBrand><img style={{height:"2em", marginRight:"1em"}} src={process.env.PUBLIC_URL + "/images.png"} />His Majesty's Holy Inquisition</NavbarBrand>
          </Navbar>


          {renderIf(this.state.glitch === true,
          <ReactGlitch className="glitch"

            src={require('../images/ravenor-cross-inquisition-wallpaper.jpg')} 
            glitching={true} 
            glitchOptions={{ 
              seed: [45], 
              quality: 99, 
              amount: 20, 
              iterations: [35] 
            }}
            speed={[0]} 
          />
        )}

          <Modal isOpen={this.state.modal} toggle={this.toggle} className="CaseSearchModal">
          <ModalHeader className="CaseSearchModal"  toggle={this.toggle}>Enter Credentials</ModalHeader>
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

             <Button className="NavbarButtons" style={{marginLeft:"10em"}} onClick={this.handleSubmit}
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

</div>
      );
    }
  }

const mapDispatchToProps = dispatch => bindActionCreators({
  userLogin
}, dispatch)
  export default withRouter( connect(null, mapDispatchToProps)(Login));
