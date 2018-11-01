import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { deleteCaseFile } from '../Redux/Actions/VoxDispatchActions'
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardFooter,
  Button
} from 'reactstrap'

class Files extends Component {

  state = {
    file_id: ''
  }

  deleteFile = (file_id) => {
    this.props.deleteCaseFile(file_id)
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
        <CardTitle className="card-headings">Address</CardTitle>
          <CardText className="card-content">{file.Address}</CardText>
        <CardTitle className="card-headings">Hive Sub-City</CardTitle>
          <CardText className="card-content">{file.City}</CardText>
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
      </CardFooter>
        : null }
        
    </Card>


  </div>
    )
  }
};

  const mapDispatchToProps = dispatch => 
    bindActionCreators({
      deleteCaseFile
    }, dispatch)
  

export default connect(null, mapDispatchToProps) (Files);
