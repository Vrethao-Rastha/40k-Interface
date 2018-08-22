import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateVoxLog } from '../Redux/Actions/VoxDispatchActions'
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Container, Col, Row, Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Input,
  Label } from 'reactstrap';
import { Link } from 'react-router-dom'
import renderIf from './Util'
import Skella1 from '../images/Skella1.jpg'
import Skella2 from '../images/Skella2.jpg'
import Skella4 from '../images/Skella4.jpg'
import Skella5 from '../images/Skella5.jpg'
import Skella6 from '../images/Skella6.jpg'


class VoxIndividual extends Component {

  state ={
    modal: false,
    content: '',
    pic: '',
    name: '',
    id: ''
  }

  handleEdit = e => {
    this.props.updateVoxLog(this.state.content, this.state.name, this.state.id)
  }

  toggle = () => {
  this.setState({
    modal: !this.state.modal
  });
}

  render(){
    console.log(' props' ,this.props)
  return(
    <div>

      <Navbar className="Navbar">


        <NavbarBrand><img style={{height:"2em", marginRight:"1em"}} src={process.env.PUBLIC_URL + "images/images.png"} />His Majesty's Holy Inquisition
</NavbarBrand>
          <NavbarBrand style={{marginLeft:"25em"}}> Welcome {localStorage.rank.replace(/"/g,"")} {localStorage.user_name.replace(/"/g,"")} </NavbarBrand>



          <Link className="NavbarButtons" to="/Dash" style={{marginLeft:"30em", fontSize:"15pt"}}>Return</Link>

        <Link className="NavbarButtons" to="/Vox_Dispatch" style={{ fontSize:"15pt"}}>Astropathic Logs</Link>

        <Nav navbar>

        </Nav>
      </Navbar>

  <Container>
    <Card style={{borderRadius:"5%"}} className="container col-md-8 offset-md-2">
      <CardTitle className="text-center">{this.props.message.name}</CardTitle>
      <Row>
        <CardImg style={{height:'10em', width:"10em", marginBottom:"2em"}} src={Skella2} alt="Generic placeholder image" />
        <CardBody style={{fontSize:"20pt"}}>
        <CardText className="text-center">{this.props.message.content}</CardText>

        {renderIf(localStorage.admin === 'true',
                      <Button className="pull-right" style={{marginLeft:"2em"}} onClick={ this.toggle }>
                        Edit
                      </Button>
                    )}

        </CardBody>
      </Row>
</Card>
  </Container>

  <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
              <ModalBody>

                <Col>
                  <Form onSubmit={ this.handleEdit }>
                    <FormGroup>
                      Content
                      <input
                        type="text"
                        name="text"
                        id="text-field"
                        value={ this.state.content }
                        onChange={e => this.setState({ content: e.target.value, id: this.props.message.id })}

                      />
                    <br/>
                      Name
                      <input
                        type="text"
                        name="text"
                        id="text-field"
                        value={ this.state.name }
                        onChange={e => this.setState({ name: e.target.value })}

                      />
                      <Col>


                      </Col>

                    </FormGroup>
                    <ModalFooter>

                      <Button type="submit" className="btn btn-secondary">Post</Button>
                      <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                  </Form>
                </Col>
              </ModalBody>
            </Modal>

</div>
  )
 }
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    updateVoxLog
  }, dispatch)

// const mapStateToProps = state => {
//   message: state.message
// }

export default connect(null, mapDispatchToProps)(VoxIndividual);
