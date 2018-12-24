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
  <div style={{marginTop:"5em"}}>
    {file.Title ?
    <Card style={{marginTop:"5em", marginBottom:"5em", borderRadius:"5%"}} className="col-sm-6 offset-sm-3 card-background">
    
      <CardBody>
      <img className="text-img3" src={ process.env.PUBLIC_URL + "/Adeptus_Ministorum_Icon.jpg"} alt="stamp"/> 
      <div className="offset-1">
        <CardTitle className="card-headings">{ file.Title }</CardTitle>
        
          <CardText className="card-content">{file.Content}</CardText>
        <CardTitle className="card-headings">File Number</CardTitle>
          <CardText className="card-content">{file.file_number}</CardText>
          </div>
        </CardBody>
        </Card>
        
     : 
     <Card style={{marginTop:"2em", marginBottom:"2em", borderRadius:"5%"}} className="col-sm-6 offset-sm-3 card-background">

      <CardBody>
        <img className="text-img2b" src={ process.env.PUBLIC_URL + "inquisition_stamp_by_hikaru_119-d4u0rgc.jpg"} alt="stamp"/> 
        <CardTitle className="card-headings">First Name</CardTitle>
          <CardText className="card-content">{file.First_Name}</CardText>
        <CardTitle className="card-headings">Last Name</CardTitle>
          <CardText className="card-content">{file.Last_Name}</CardText>
        <CardTitle className="card-headings">Hive</CardTitle>
          <CardText className="card-content">{file.Hive}</CardText>
          <CardTitle className="card-headings">Hive Stack</CardTitle>
          <CardText className="card-content">{file.Hive_Stack}</CardText>
          <CardTitle className="card-headings">Address</CardTitle>
          <CardText className="card-content">{file.Address}</CardText>
        <CardTitle className="card-headings">Bio</CardTitle>
          <CardText className="card-content">{file.Bio}</CardText>
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
    }
    

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
