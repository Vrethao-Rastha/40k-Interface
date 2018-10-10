import React from 'react';
import {
  Card,
  CardText,
  CardBody,
  CardTitle
} from 'reactstrap'

const Files = (props) => {
  return(
  <div>
    <Card style={{marginTop:"2em", marginBottom:"2em", borderRadius:"5%"}} className="col-md-8 offset-md-2 card-background">
      <CardBody>
        <CardTitle className="card-headings">First Name</CardTitle>
          <CardText>{props.file.First_Name}</CardText>
        <CardTitle className="card-headings">Last Name</CardTitle>
          <CardText>{props.file.Last_Name}</CardText>
        <CardTitle className="card-headings">Address</CardTitle>
          <CardText>{props.file.Address}</CardText>
        <CardTitle className="card-headings">Hive Sub-City</CardTitle>
          <CardText>{props.file.City}</CardText>
        <CardTitle className="card-headings">Bio</CardTitle>
          <CardText>{props.file.Bio}</CardText>
        <CardTitle className="card-headings">File Number</CardTitle>
          <CardText>{props.file.File_Number}</CardText>
      </CardBody>
    </Card>


  </div>
  )
};

export default Files;
