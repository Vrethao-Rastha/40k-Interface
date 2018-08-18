import React from 'react';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle
} from 'reactstrap'

const Files = (props) => {
  return(
  <div>
    <Card style={{marginTop:"2em", marginBottom:"2em", borderRadius:"5%"}} className="col-md-8 offset-md-2 card-background">
      <CardBody>
        <CardTitle>First Name</CardTitle>
        <CardText>{props.file.First_Name}</CardText>
        <CardTitle>Last Name</CardTitle>
        <CardText>{props.file.Last_Name}</CardText>
        <CardTitle>Address</CardTitle>
        <CardText>{props.file.Address}</CardText>
        <CardTitle>Hive Sub-City</CardTitle>
        <CardText>{props.file.City}</CardText>
        <CardTitle>Bio</CardTitle>
        <CardText>{props.file.Bio}</CardText>
        <CardTitle>File Number</CardTitle>
        <CardText>{props.file.File_Number}</CardText>
      </CardBody>
    </Card>


  </div>
  )
};

export default Files;
