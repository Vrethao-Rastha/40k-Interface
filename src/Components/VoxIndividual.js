import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateVoxLog, deleteVoxLog } from '../Redux/Actions/VoxDispatchActions'
import { Card, CardImg, CardText, CardBody, CardFooter,
  CardTitle, Button, Col, Row,
  Modal,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
   } from 'reactstrap';
import renderIf from './Util'

class VoxIndividual extends Component {

  state ={
    modal: false,
    content: '',
    avatar: '',
    caseNumber: '',
    id: '',
    picToggle: false,
    quotes: [{
      saying:  "Question: What has the Emperor ever done for me? Answer: What have you ever done for the Emperor?   \n-Imperial Guard Training Cant"
      },
    {
      saying: "There is only the Emperor, and he is our Shield and Protector.   \n-Second Book of Chantings"
      },
    {
    saying: "There can be no bystanders in the battle for survival. Anyone who will not fight by your side is an enemy you must crush.   \n-Lord Solar Macharius",
    sayer: ""
     },
    {
      saying: "One cannot consider the fate of a single man, nor ten, nor a thousand. Billions will live or die by our actions here, and we have not the luxury to count the cost.   \n-Inquisitor Kryptman"
    },
    {
      saying: "No world shall be beyond my rule; no enemy shall be beyond my wrath.   \n-The Emperor of Mankind"
    },
    {
      saying:"How can a man be happy if he cannot serve his lord with his whole heart?   \n-Litany of the Adeptus"
    },
    {
      saying:"A mind without purpose will walk in dark places.   \n-Inquisitor Gideon Ravenor"
    },
    {
      saying:"Victory? What use is victory? Let me have a battle of annihilation.   \n-Fleet Commissar Drussos"
    },
    {
      saying:"You do know that I am doing this for your own good, my friend. The daemons that are within you must be exorcised, so you can once more join the Emperor's fold.   \n-High Lord Goge Vandire"
    }]
  }

  handleEdit = e => {
    // e.preventDefault()
    this.props.updateVoxLog(this.state.content, this.state.caseNumber, this.state.id)
  }

  handleDelete = e => {
    e.preventDefault()
    this.props.deleteVoxLog(this.props.message.id)
  }

  toggle = (e) => {
    e.preventDefault()
  this.setState({
    modal: !this.state.modal
  });

}

  render(){
    console.log(this.state.quotes[0])
    const { message } = this.props

    if(message){
      return(
        <div className="container-fluid">

        <Card style={{borderRadius:"5%", marginBottom:"2em", marginTop:"2em"}} className="container col-md-10 offset-md-1">
          <CardTitle className="text-center">VOX LOG ID: { message.caseNumber }</CardTitle>
          <CardTitle className="text-center">SENDER: { message.senderName }</CardTitle>
            <hr/>
          <Row>

            
            <CardBody className="d-flex flex-column" style={{fontSize:"20pt"}}>
            <div className="row">
            <Form onSubmit={ this.toggle }>
              <Button type="submit" className="picButton" value={ message.avatar } onClick={ e => this.setState({avatar: message.avatar, picToggle: true })}>

              <CardImg className="profile-pic" src={process.env.PUBLIC_URL + message.avatar}
              />
               
             </Button>
             </Form>
              <CardText className="admin-content mt-auto mb-auto" style={{padding:"0"}}>{ message.content }
            </CardText></div>

             <div className="mt-auto">
             
              <CardFooter className="col-md-12 quotes">
              <div className="row">
                <img src={ process.env.PUBLIC_URL + "images.png" } style={{height:"5em", marginRight:"1em"}} />
              
              <p className="quotes col-md-10 offset-md-2 mt-auto">{this.state.quotes[Math.floor((Math.random() * 8) + 1)].saying}</p>
              </div>
              {(localStorage.admin === 'true') ?
           
           <div>
           <Button className="message-button pull-right" style={{marginLeft:"1em"}} onClick={ this.toggle }>
                         Edit
           </Button>
           
            <Form onSubmit={ this.handleDelete }>
              <Button className="message-button pull-right" type="submit" value={message.id} onClick={ e => this.setState({ id: e.target.value }) } style={{marginLeft:"2em"}}>
                Delete
              </Button>
            </Form>
           </div>
           : null }
              </CardFooter>
            

              </div>



            </CardBody>
          </Row>
    </Card>


      <Modal isOpen={ this.state.modal } toggle={ this.toggle } className={ this.props.className }>
        {renderIf(this.state.picToggle === true,
          <div>
            <CardImg src={ process.env.PUBLIC_URL + this.state.avatar} />
          </div>
        )}

        {renderIf(localStorage.admin === 'true',
                  <ModalBody>

                    <Col>
                      <Form onSubmit={ this.handleEdit }>
                        <FormGroup>

                          Content
                          <textarea rows="4" cols="50"
                            type="text"
                            name="text"
                            id="text-field"
                            value={ this.state.content }
                            onChange={e => this.setState({ content: e.target.value, id: message.id, caseNumber: message.caseNumber })}

                          />
                          <Col>


                          </Col>

                        </FormGroup>
                        <ModalFooter>

                          <Button type="submit" className="btn btn-secondary">Edit</Button>

                          <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                        </ModalFooter>
                      </Form>
                    </Col>
                  </ModalBody>
                )}
                </Modal>

    </div>
      )
    }else {
      return(
        <div>
          dlfnvld
        </div>
      )
    }

 }
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    updateVoxLog,
    deleteVoxLog
  }, dispatch)

const mapStateToProps = state => ({
  vox: state.vox_dispatch,
  addVox: state.add_vox
})

export default connect(mapStateToProps, mapDispatchToProps)(VoxIndividual);
