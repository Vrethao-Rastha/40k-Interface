import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { deleteCaseFile, updateCaseFile } from '../Redux/Actions/VoxDispatchActions'
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

class Files extends Component {

  state = {
    modal: false,
    file_id: this.props.file.id || '',
   
    First_Name: this.props.file.First_Name || '',
    Last_Name: this.props.file.Last_Name || '',
    Address: this.props.file.Address || '',
    Hive: this.props.file.Hive || '',
    Hive_Stack: this.props.file.Hive_Stack || '',
    Bio: this.props.file.Bio || '',
    file_number: this.props.file.file_number || '',
    
  }

  toggle = () => {
    this.setState({ modal: !this.state.modal })
  }

  deleteFile = (file_id) => {
    this.props.deleteCaseFile(file_id)
  }

  handleUpdate = (e) => {
    e.preventDefault()
    this.props.updateCaseFile( this.state.First_Name, this.state.Last_Name, this.state.Address, this.state.Hive, this.state.Hive_Stack, this.state.Bio, this.state.file_number, this.state.file_id ) 
  }

  render() {

    const { file } = this.props

    return(
  <div>
    <Card style={{marginTop:"2em", marginBottom:"2em", borderRadius:"5%"}} className="col-sm-8 offset-sm-2 card-background">
      <CardBody>
      <img className="text-img2" src={ process.env.PUBLIC_URL + "inquisition_stamp_by_hikaru_119-d4u0rgc.jpg"} alt="stamp"/> 
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
        <Button className="pull-right" value={ file.id } onClick={ () => { this.deleteFile(file.id) } }>
          Delete
        </Button>
        <Button className="pull-right mr-2 ml-2" onClick={ () => { this.toggle() } }>
          Edit
        </Button>
      </CardFooter>
        : null }
        
    </Card>

    <Modal isOpen={ this.state.modal } toggle={ this.toggle } className={ this.props.className }>


{(localStorage.admin.replace(/"/g,"") === '17' ) ?
         <ModalBody>

           <Col>
             <Form onSubmit={ this.handleUpdate }>
               <FormGroup>

                 First Name
                         <Input
                           style={{marginBottom:"1em"}}
                           type="text"
                           name="text"
                           id="text-field"
                           value={ this.state.First_Name }
                           onChange={e => this.setState({ First_Name: e.target.value })}

                         />
                         <br/>

                         Last Name
                         <Input
                           style={{marginBottom:"1em"}}
                           type="text"
                           name="text"
                           id="text-field"
                           value={ this.state.Last_Name }
                           onChange={e => this.setState({ Last_Name: e.target.value })}

                         />
                         <br/>

                         Address
                         <Input
                           style={{marginBottom:"1em"}}
                           type="text"
                           name="text"
                           id="text-field"
                           value={ this.state.Address }
                           onChange={e => this.setState({ Address: e.target.value })}

                         />
                         <br/>

                         Hive
                         <Input
                           style={{marginBottom:"1em"}}
                           type="text"
                           name="text"
                           id="text-field"
                           value={ this.state.Hive }
                           onChange={e => this.setState({ Hive: e.target.value })}

                         />
                         <br/>

                         Hive Stack
                         <Input
                           style={{marginBottom:"1em"}}
                           type="text"
                           name="text"
                           id="text-field"
                           value={ this.state.Hive_Stack }
                           onChange={e => this.setState({ Hive_Stack: e.target.value })}

                         />
                         <br/>


                        Bio
                         <textarea rows="4" cols="50"
                           style={{marginBottom:"1em"}}
                           type="text"
                           name="text"
                           id="text-field"
                           value={ this.state.Bio }
                           onChange={e => this.setState({ Bio: e.target.value })}

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
      deleteCaseFile,
      updateCaseFile
    }, dispatch)
  

export default withRouter(connect(null, mapDispatchToProps) (Files));
