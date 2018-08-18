import React, { Component } from 'react';
import { Navbar, Nav, NavbarBrand, Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Input, Label } from 'reactstrap'


class Landing extends Component {
  state = {
    modal: false
  }

  componentDidMount(){
    setTimeout(() => {this.setState({modal: true})}, 3000)

  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {

      return (
        <div className="Login">
          <Navbar className="Navbar">
            <NavbarBrand><img style={{height:"2em", marginRight:"1em"}} src={process.env.PUBLIC_URL + "images/images.png"} />His Majesty's Holy Inquisition</NavbarBrand>
          </Navbar>

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
          <ModalFooter className="CaseSearchModal" >
            <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>

        </div>
      );
    }
  }

export default Landing;
