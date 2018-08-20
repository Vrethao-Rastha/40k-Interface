import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Container, Col, Row } from 'reactstrap';
import Topper from './Topper'
import Skella1 from '../images/Skella1.jpg'
import Skella2 from '../images/Skella2.jpg'
import Skella4 from '../images/Skella4.jpg'
import Skella5 from '../images/Skella5.jpg'
import Skella6 from '../images/Skella6.jpg'


const VoxIndividual = (props) => {
  return(
    <div>
      <Topper />
  <Container>
    <Card style={{borderRadius:"5%"}} className="container col-md-8 offset-md-2">
      <CardTitle className="text-center">{props.message.name}</CardTitle>
      <Row>
        <CardImg style={{height:'10em', width:"10em", marginBottom:"2em"}} src={Skella2} alt="Generic placeholder image" />
        <CardBody style={{fontSize:"20pt"}}>
        <CardText className="text-center">{props.message.content}</CardText>
        </CardBody>
      </Row>
</Card>
  </Container>
</div>
  )
};

export default VoxIndividual;
