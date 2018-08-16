import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Container, Col, Row } from 'reactstrap';
import Skella1 from '../images/Skella1.jpg'
import Skella2 from '../images/Skella2.jpg'
import Skella3 from '../images/Skella3.jpg'


const VoxIndividual = (props) => {
  return(
  <Container>
    <Card style={{borderRadius:"5%"}} className="container col-md-8 offset-md-2">
      <CardTitle className="text-center">{props.message.name}</CardTitle>
      <Row>
        <CardImg style={{height:'7em', width:"7em", marginBottom:"2em"}} src={Skella1} alt="Generic placeholder image" />
        <CardBody style={{fontSize:"20pt"}}>
        <CardText className="text-center">{props.message.content}</CardText>
        </CardBody>
      </Row>
</Card>
  </Container>
  )
};

export default VoxIndividual;
