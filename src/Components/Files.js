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
    file_number: ''
  }

  deleteFile = (file_number) => {
    console.log('kjdsbnkjdnfv', file_number)
    this.props.deleteCaseFile(file_number)
  }

  render() {

    const { file } = this.props
  return(
  <div>
    <Card style={{marginTop:"2em", marginBottom:"2em", borderRadius:"5%"}} className="col-md-8 offset-md-2 card-background">
      <CardBody>
        <CardTitle className="card-headings">First Name</CardTitle>
          <CardText>{file.First_Name}</CardText>
        <CardTitle className="card-headings">Last Name</CardTitle>
          <CardText>{file.Last_Name}</CardText>
        <CardTitle className="card-headings">Address</CardTitle>
          <CardText>{file.Address}</CardText>
        <CardTitle className="card-headings">Hive Sub-City</CardTitle>
          <CardText>{file.City}</CardText>
        <CardTitle className="card-headings">Bio</CardTitle>
          <CardText>{file.Bio}</CardText>
        <CardTitle className="card-headings">File Number</CardTitle>
          <CardText>{file.file_number}</CardText>
      </CardBody>
        {(localStorage.admin.replace(/"/g,"") === '17') ? 
        <CardFooter>
        <Button className="pull-right" value={ file.file_number } onClick={ () => { this.deleteFile(file.file_number) } }>
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
