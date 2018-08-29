import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateVoxLog, deleteVoxLog } from '../Redux/Actions/VoxDispatchActions'
import { Card, CardImg, CardText, CardBody,
  CardTitle, Button, Col, Row,
  Modal,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
   } from 'reactstrap';
import renderIf from './Util'

class VoxIndividual extends Component {

  state ={
    modal: false,
    content: '',
    avatar: '',
    name: '',
    id: '',
    picToggle: false
  }

  handleEdit = e => {
    this.props.updateVoxLog(this.state.content, this.state.name, this.state.id)
  }

  handleDelete = e => {
    e.preventDefault()
    console.log('dlfjnvkldfnvsdfv======>>>>>>>>>>>>>>')
    this.props.deleteVoxLog(this.props.message.id)
  }

  toggle = (e) => {
    e.preventDefault()
  this.setState({
    modal: !this.state.modal
  });
}

  render(){
    console.log(' props=========>' ,this.props, 'state', this.state)
    if(this.props.message.avatar){
      return(
        <div>





        <Card style={{borderRadius:"5%", marginBottom:"2em", marginTop:"2em"}} className="container col-md-8 offset-md-2">
          <CardTitle className="text-center">CASE {this.props.message.name}</CardTitle>
          <Row>

            <Form onSubmit={ this.toggle }>
            <Button type="submit" className="picButton" value={ this.props.message.avatar } onMouseEnter={ e => this.setState({avatar: e.target.value, picToggle: true })}>
            <CardImg src={process.env.PUBLIC_URL + this.props.message.avatar} style={{height:'10em', width:"10em", marginBottom:"2em", marginLeft:"1em"}}
            />
          </Button>
        </Form>
            <CardBody className="text-center col-md-10" style={{fontSize:"20pt"}}>
            <CardText style={{padding:"0"}}>{this.props.message.content}</CardText>

            {renderIf(localStorage.admin === 'true',
            <div>
                          <Button className="pull-right" style={{marginLeft:"1em"}} onClick={ this.toggle }>
                            Edit
                          </Button>
                          <Form onSubmit={ this.handleDelete }>
                          <Button className="pull-right" type="submit" value={this.props.message.id} onClick={ e => this.setState({id: e.target.value}) } style={{marginLeft:"2em"}}>
                            Delete
                          </Button>
                        </Form>
                        </div>
                        )}



            </CardBody>
          </Row>
    </Card>


      <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
        {renderIf(this.state.picToggle === true,
          <div>
            <CardImg src={ process.env.PUBLIC_URL + this.state.avatar} />
          </div>
        )}

        {renderIf(localStorage.admin === 'true',
                  <ModalBody>

                    <Col>
                      <Form onSubmit={ this.handleEdit }>
                        <FormGroup>

                          Content
                          <textarea rows="4" cols="50"
                            type="text"
                            name="text"
                            id="text-field"
                            value={ this.state.content }
                            onChange={e => this.setState({ content: e.target.value, id: this.props.message.id, name: this.props.message.name })}

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
                )}
                </Modal>

    </div>
      )
    }else {
      return(
        <div>
          dlfnvld
        </div>
      )
    }

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
