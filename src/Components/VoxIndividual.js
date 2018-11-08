import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'
import { updateVoxLog, deleteVoxLog } from '../Redux/Actions/VoxDispatchActions'
import { fetchNameReport, clearNameReport } from '../Redux/Actions/FieldReportActions'
import { Card, CardImg, CardText, CardBody, CardFooter,
  CardTitle, Button, Col, Row,
  Modal,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
   } from 'reactstrap';

class VoxIndividual extends Component {

  state ={
    modal: false,
    content: '',
    avatar: '',
    caseNumber: '',
    id: '',
    last_name: '',
    picToggle: false,
    quotes: [{
      saying:  "Question: What has the Emperor ever done for me? Answer: What have you ever done for the Emperor?   \n-Imperial Guard Training Cant"
      },
    {
      saying: "There is only the Emperor, and he is our Shield and Protector.   \n-Second Book of Chantings"
      },
    {
    saying: "There can be no bystanders in the battle for survival. Anyone who will not fight by your side is an enemy you must crush.   \n-Lord Solar Macharius",
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
    },
  {
      saying:"Only in death does duty end. \n -Imperial Guard Motto"
  },
  {
      saying:"Even a man who has nothing can still offer his life.\n -Imperial Guard Motto"
  },
  {
      saying:"Your foe is well equipped, well-trained, battle-hardened. He believes his gods are on his side. Let him believe what he will. We have the tanks on ours. \n -Imperial Guard Motto"
  },
  {
      saying:"Some may question your right to destroy ten billion people. Those who understand realise that you have no right to let them live! \n -Inquisitor Worslu"
  },
  {
      saying:"Hatred is the emperor's greatest gift to humanity. \n -Inquisitorial Motto"
  },
  {
      saying:"While the enemies of the Emperor still draw breath, there can be no peace. \n -High Marshal Helbreqt of the Black Templars"
  },
  {
      saying:"In ancient times, men built wonders, laid claim to the stars and sought to better themselves for the good of all. But we are much wiser now. \n -Arch Magos Keriel"
  }]
  }

  handleEdit = e => {
    this.props.updateVoxLog(this.state.content, this.state.caseNumber, this.state.id)
  }

  handleDelete = e => {
    e.preventDefault()
    this.props.deleteVoxLog(this.props.message.id)
  }

  toggle = (message) => {
  this.setState({
    avatar: message,
     picToggle: true, 
    modal: !this.state.modal
  });
}

  toggleEdit = () => {
  this.setState({
    modal: !this.state.modal
  })
}

  nameQuery = (data) => {
    console.log('data==============>', data)
    //this.setState({ first_name: data})
    //console.log('name===============>',this.state.first_name)
    this.props.fetchNameReport(data, this.state.last_name, this.props.history)
  }

  componentDidMount() {
    if(this.props.name_search_result.length > 0){
        this.setState({first_name: ''})
        this.props.clearNameReport(this.state.first_name, this.props.history)
      }
  }

  render(){

    const { message } = this.props
    if(message){

      return(
        <div className="container-fluid">

        <Card style={{borderRadius:"5%", marginBottom:"2em", marginTop:"2em"}} className="container col-sm-10 offset-sm-1">
          <div className="row mx-auto">

             <img className="mr-auto footer-img" src={ process.env.PUBLIC_URL + "Inq.jpg"} alt="Inqisition Logo" />

           <div className="d-flex flex-column ml-4 mt-4">
            <CardTitle className="vox-header">VOX LOG ID: 
             <span className="vox-data">{ message.caseNumber }</span>
            </CardTitle>

             <CardTitle className="vox-header">SENDER: 
               <span value={ message.senderName } onClick={ () => this.nameQuery(message.senderName.replace(/\s+/, '\x01').split('\x01')[0]
)} className="vox-data">{ message.senderName }</span>
            </CardTitle>
           </div>
          
          </div>
          
            <hr/>
          <Row>

            
            <CardBody className="d-flex flex-column" style={{fontSize:"20pt"}}>
            <div className="row">

              <CardImg className="profile-pic picButton" src={process.env.PUBLIC_URL + message.avatar}
                onClick={ () => this.toggle(message.avatar)}
              />
               
              <CardText className="admin-content mt-auto mb-auto col-sm-9">
              
              { message.content} 
              
              <img className="text-img" src={ process.env.PUBLIC_URL + "Ordo_Xenos_Insignia.png"} alt="Inquisition Logo" />
              </CardText>
            </div>

             <div className="mt-auto">
             
              <CardFooter className="col-sm-12 quotes">
              <div className="row">
                <img className="footer-img" src={ process.env.PUBLIC_URL + "images.png" } alt="Inqisition Logo" />
              
              <p className="quotes col-sm-10 offset-sm-2 mt-auto">{this.state.quotes[Math.floor((Math.random() * 15) + 1)].saying}</p>
              </div>

               {/* Conditional Render for Edit Functions */}
              {(localStorage.admin.replace(/"/g,"") === '17') ?
           
           <div>
           <Button className="message-button pull-right" style={{marginLeft:"1em"}} onClick={ this.toggleEdit }>
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


        {/* Modal with Edit form and Profile picture detail */}
      <Modal isOpen={ this.state.modal } toggle={ this.toggle } className={ this.props.className }>

        {/* Conditional render for profile picture detail */}
        {(this.state.picToggle === true) ?
          <div>
            <CardImg src={ process.env.PUBLIC_URL + this.state.avatar} />
          </div>
          // Conditional Render for edit box
        : (localStorage.admin.replace(/"/g,"") === '17' && this.state.picToggle === false) ?
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
    }else {
      return(
        <div>
          No Messages
        </div>
      )
    }

 }
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    updateVoxLog,
    deleteVoxLog,
    fetchNameReport, 
    clearNameReport
  }, dispatch)

const mapStateToProps = state => ({
  vox: state.vox_dispatch,
  name_search_result: state.name_search_result
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(VoxIndividual));
