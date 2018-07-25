import React from 'react';
import { Media, Container } from 'reactstrap';
import Skella1 from '../images/Skella1.jpg'
import Skella2 from '../images/Skella2.jpg'
import Skella3 from '../images/Skella3.jpg'


const VoxIndividual = (props) => {
  console.log('============>', props.message)
  return(
  <Container>
    <div className="vox">
      <div style={{marginLeft:'5em'}}>
    <Media style={{marginTop:'5em'}}>
      <Media left href="#">
        <img style={{height:'10em'}} src={Skella1} alt="Generic placeholder image" />
      </Media>
      <Media body>
        <Media heading style={{fontSize:"25pt"}}>
          {props.message.name}
        </Media>
        <div style={{fontSize:"20pt"}}>
          {props.message.content}
        </div>
      </Media>
    </Media>
  </div>
  </div>
  </Container>
  )
};

export default VoxIndividual;
