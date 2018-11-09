import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { deleteInfoFile, updateInfo } from '../Redux/Actions/VoxDispatchActions'
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardFooter,
  Col,
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Input
} from 'reactstrap'

class Info extends Component {

  state = {
    id: this.props.file.id || '',
    file_id: '',
    Title: this.props.file.Title || '',
    Content: this.props.file.Content || '',
    file_number: this.props.file.file_number || '',
    modal: false
  }

  toggle = () => {
      this.setState({ modal: !this.state.modal })
  }

  deleteInfo = (file_id) => {
    this.props.deleteInfoFile(file_id)
  }

  handleEdit = (e) => {
      e.preventDefault()
      this.props.updateInfo(this.state.Title, this.state.Content, this.state.file_number, this.state.id)
  }

  render() {
    const { file } = this.props
  return(
  <div>
    <Card style={{marginTop:"2em", marginBottom:"2em", borderRadius:"5%"}} className="col-sm-4 offset-sm-4 card-background">
      <CardBody>
      <img className="text-img3" src={ process.env.PUBLIC_URL + "/Adeptus_Ministorum_Icon.jpg"} alt="stamp"/> 
        <CardTitle className="card-headings">{ file.Title }</CardTitle>

          <CardText className="card-content">{file.Content}</CardText>
        <CardTitle className="card-headings">File Number</CardTitle>
          <CardText className="card-content">{file.file_number}</CardText>
      </CardBody>
        {(localStorage.admin.replace(/"/g,"") === '17') ? 
        <CardFooter>
        <Button className="pull-right" onClick={ this.toggle }>Edit</Button>
        <Button className="pull-right mr-2" value={ file.id } onClick={ () => { this.deleteInfo(file.id) } }>
          Delete
        </Button>
      </CardFooter>
        : null }
        
    </Card>

    <Modal isOpen={ this.state.modal } toggle={ this.toggle } className={ this.props.className }>


 {(localStorage.admin.replace(/"/g,"") === '17' ) ?
          <ModalBody>

            <Col>
              <Form onSubmit={ this.handleEdit }>
                <FormGroup>

                  Title
                          <Input
                            style={{marginBottom:"1em"}}
                            type="text"
                            name="text"
                            id="text-field"
                            value={ this.state.Title }
                            onChange={e => this.setState({ Title: e.target.value, id: file.id })}

                          />
                          <br/>
                    Content
                          <textarea rows="4" cols="30"
                            style={{marginBottom:"1em"}}
                            type="text"
                            name="text"
                            id="text-field"
                            value={ this.state.Content }
                            onChange={e => this.setState({ Content: e.target.value })}

                          />
                          <br/>
                    File Number
                          <Input
                            style={{marginBottom:"1em"}}
                            type="text"
                            name="text"
                            id="text-field"
                            value={ this.state.file_number }
                            onChange={e => this.setState({ file_number: e.target.value })}

                          />

                </FormGroup>
                
                <ModalFooter>

                  <Button type="submit" className="btn btn-secondary">Edit</Button>

                  <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                </ModalFooter>
              </Form>
            </Col>
          </ModalBody>
        : null }
        </Modal>


  </div>
    )
  }
};

  const mapDispatchToProps = dispatch => 
    bindActionCreators({
      deleteInfoFile,
      updateInfo
    }, dispatch)
  

export default withRouter(connect(null, mapDispatchToProps)(Info));
