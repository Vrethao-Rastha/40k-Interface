import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateVoxLog, deleteVoxLog } from '../Redux/Actions/VoxDispatchActions'
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

  handleDelete = e => {
    e.preventDefault()
    console.log('dlfjnvkldfnvsdfv======>>>>>>>>>>>>>>')
    this.props.deleteVoxLog(this.props.message.id)
  }

  toggle = () => {
  this.setState({
    modal: !this.state.modal
  });
}

  render(){
    console.log(' props=========>' ,this.props.message)
  return(
    <div>



  <Container>

    <Card style={{borderRadius:"5%", marginBottom:"2em", marginTop:"2em"}} className="container col-md-8 offset-md-2">
      <CardTitle className="text-center">CASE {this.props.message.name}</CardTitle>
      <Row>
        <CardImg style={{height:'10em', width:"10em", marginBottom:"2em"}} src={process.env.PUBLIC_URL + this.props.message.avatar} alt="Generic placeholder image" />
        <CardBody style={{fontSize:"20pt"}}>
        <CardText className="text-center">{this.props.message.content}</CardText>

        {renderIf(localStorage.admin === 'true',
        <div>
                      <Button className="pull-right" style={{marginLeft:"1em"}} onClick={ this.toggle }>
                        Edit
                      </Button>
                      <Form onSubmit={ this.handleDelete }>
                      <Button className="pull-right" type="submit" value={this.props.message.id} onMouseOver={ e => this.setState({id: e.target.value}) } style={{marginLeft:"2em"}}>
                        Delete
                      </Button>
                    </Form>
                    </div>
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


                      Case Number
                      <input
                        type="text"
                        name="text"
                        id="text-field"
                        value={ this.state.name }
                        onChange={e => this.setState({ name: e.target.value })}

                      />

                      <br/>

                      Content
                      <textarea rows="4" cols="50"
                        type="text"
                        name="text"
                        id="text-field"
                        value={ this.state.content }
                        onChange={e => this.setState({ content: e.target.value, id: this.props.message.id })}

                      />
                      <Col>


                      </Col>

                    </FormGroup>
                    <ModalFooter>

                      <Button type="submit" className="btn btn-secondary">Edit</Button>

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
    updateVoxLog,
    deleteVoxLog
  }, dispatch)

const mapStateToProps = state => ({
  vox: state.vox_dispatch,
  addVox: state.add_vox
})

export default connect(mapStateToProps, mapDispatchToProps)(VoxIndividual);
