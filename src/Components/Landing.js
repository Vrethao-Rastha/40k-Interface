import React, { Component } from 'react';
import { Navbar, Nav, NavbarBrand, Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Input, Label } from 'reactstrap'
import { Link } from 'react-router-dom'


class Landing extends Component {
  state = {
    view: 0,
    modal: false
  }

  componentDidMount(){
    setTimeout(() => {this.setState({view: 1})}, 3000)

  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    if(this.state.view === 0){
      return (
        <div className="Landing">
          <Navbar className="Navbar">
            <NavbarBrand><img style={{height:"2em", marginRight:"1em"}} src={process.env.PUBLIC_URL + "images/images.png"} />His Majesty's Holy Inquisition</NavbarBrand>
          </Navbar>
        </div>
      );

  }else if(this.state.view === 1){
      return (
        <div className="Landing">
          <Navbar className="Navbar">
            <NavbarBrand><img style={{height:"2em", marginRight:"1em"}} src={process.env.PUBLIC_URL + "images/images.png"} />His Majesty's Holy Inquisition</NavbarBrand>
          </Navbar>
          <Link className="btn btn-primary" to="/Login" style={{marginLeft:"45em", backgroundColor:"#850909", color:"black", fontFamily: 'MedievalSharp'}}>Enter</Link>

          <Modal isOpen={this.state.modal} toggle={this.toggle}  className="LandingModal">
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>

                    <Label className="btns" for="name-field">Identity</Label>

                        <Input
                          className="put"
                        type="name"
                        name="name"
                        id="exampleName"
                        value={this.state.name}
                        onChange={e => this.setState({ name: e.target.value})}
                      />


                      <Label className="btns" for="location-field">Clearance Cypher</Label>

                        <Input
                          className="put"
                          type="location"
                          name="location"
                          id="exampleLocation"
                          value={this.state.location}
                          onChange={e => this.setState({ location: e.target.value})}
                        />
                      </FormGroup>
                    </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>

        </div>
      );
    }
  }

}

export default Landing;
