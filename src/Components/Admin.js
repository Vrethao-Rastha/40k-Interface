import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import VoxIndividual from './VoxIndividual'
import { addVoxLog, addCaseFile, fetchVoxDispatch, addInfoFile } from '../Redux/Actions/VoxDispatchActions'
import { Card, Row, Input, ListGroup, ListGroupItem,
  Button, Col, CardTitle, Navbar,
  NavbarBrand,
  Form, FormGroup
   } from 'reactstrap';
import { Link } from 'react-router-dom'

class Admin extends Component {

  state ={
    modal: false,
    senderName: '',
    addSenderName: '',
    content: '',
    addContent: '',
    avatar: '',
    addAvatar: '',
    caseNumber: '',
    addCaseNumber: '',
    id: '',
    First_Name: '',
    Last_Name: '',
    Address: '',
    City: '',
    Bio: '',
    file_number: '',
    Title: '',
    Content:''
  }

  handlePost = e => {
    e.preventDefault()
    this.props.addVoxLog(this.state.addContent, this.state.addSenderName, this.state.addAvatar, this.state.addCaseNumber)
  }

  addCase = e => {
    e.preventDefault()
    this.props.addCaseFile(this.state.First_Name, this.state.Last_Name, this.state.Address, this.state.City, this.state.Bio, this.state.file_number)
  }

  addTerm = e => {
    e.preventDefault()
    this.props.addInfoFile(this.state.Title, this.state.Content, this.state.file_number)
  }

  componentDidMount() {
    this.props.fetchVoxDispatch()
  }

  render() {
    const logs = this.props.vox.map(message => <VoxIndividual key={message.id} message={message} /> )
    return (
      <div>
        <div className="admin-page"></div>

        <Navbar className="Navbar">


          <NavbarBrand><img style={{height:"2em", marginRight:"1em"}} src={process.env.PUBLIC_URL + "/images.png"} alt="Inquisition Logo" />His Majesty's Holy Inquisition
          </NavbarBrand>

          { localStorage.rank ? <NavbarBrand className="text-center"> Welcome {localStorage.rank.replace(/"/g,"")} {localStorage.user_name.replace(/"/g,"")} </NavbarBrand> : null }
            <Link className="NavbarButtons" style={{fontSize:"15pt"}} to="/Dash">Back</Link>

            <Link className="NavbarButtons" to="/Vox_Dispatch" style={{ fontSize:"15pt"}}>Astropathic Logs</Link>

        </Navbar>

          {(localStorage.admin.replace(/"/g,"") === '17') ?
          <div className="container-fluid">

            <Row>

              <Col className="col-md-3">
                        <Card style={{borderRadius:"%5", marginTop:"2em" ,marginBottom:"2em" }} className="admin-card">
                          <CardTitle>New Vox Dispatch</CardTitle>
                            <Form onSubmit={ this.handlePost }>
                              <FormGroup>
                                Sender Name
                                <Input
                                  style={{marginBottom:"1em"}}
                                  type="text"
                                  name="addVox"
                                  id="text-field"
                                  value={ this.state.addSenderName }
                                  onChange={e => this.setState({ addSenderName: e.target.value })}

                                />

                                <br/>
                         
                                Vox ID Number
                                <Input
                                  style={{marginBottom:"1em"}}
                                  type="text"
                                  name="addVox"
                                  id="text-field"
                                  value={ this.state.addAvatar }
                                  onChange={e => this.setState({ addAvatar: e.target.value })}

                                />
                                <br/>

                                Avatar
                                <Input
                                  style={{marginBottom:"1em"}}
                                  type="text"
                                  name="addVox"
                                  id="text-field"
                                  value={ this.state.addCaseNumber }
                                  onChange={e => this.setState({ addCaseNumber: e.target.value })}

                                />

                                <br/>
                                                             
                                <ListGroup>
                                  <ListGroupItem>/not found.png</ListGroupItem>
                                  <ListGroupItem>/chess.jpg</ListGroupItem>
                                  <ListGroupItem>/Drog1.jpg</ListGroupItem>
                                  <ListGroupItem>/dude.jpg</ListGroupItem>
                                  <ListGroupItem>/eisenhorn-01.jpg</ListGroupItem>
                                  <ListGroupItem>/eldar.jpg</ListGroupItem>
                                  <ListGroupItem>/juliana.jpg</ListGroupItem>
                                  <ListGroupItem>/Sister Of Battle.jpg</ListGroupItem>
                                  <ListGroupItem>/tarot.png</ListGroupItem>
                                  <ListGroupItem>/tattoo.png</ListGroupItem>
                                  <ListGroupItem>/cute.jpg</ListGroupItem>
                                  <ListGroupItem>/Inquisidora_Amanda_.jpg</ListGroupItem>
                                  <ListGroupItem>/Inquisitor.jpg</ListGroupItem>
                                  <ListGroupItem>/lond inq.jpg</ListGroupItem>

                                </ListGroup>

                                <br/>

                                Content
                                <pre>
                                <textarea className="admin-content" rows="4" cols="25"
                                  type="text"
                                  name="addVox"
                                  id="text-field"
                                  value={ this.state.addContent }
                                  onChange={e => this.setState({ addContent: e.target.value })}

                                />
                                </pre>

                          <Button className="pull-right" style={{marginLeft:"2em"}} onClick={ this.handlePost }>
                            Post
                          </Button>
                          </FormGroup>
                        </Form>
                      </Card>
                    </Col>

                <Col className="col-md-3 offset-md-6">
                  <Card style={{borderRadius:"%5", marginTop:"2em" ,marginBottom:"2em"}} className="admin-card">

                    <CardTitle>Add Case File</CardTitle>
                      <Form onSubmit={ this.addCase }>


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

                          City
                          <Input
                            style={{marginBottom:"1em"}}
                            type="text"
                            name="text"
                            id="text-field"
                            value={ this.state.City }
                            onChange={e => this.setState({ City: e.target.value })}

                          />

                          <br/>

                          Bio
                          <textarea rows="4" cols="30"
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

                          <br/>


                    <Button type="submit" className="pull-right" style={{marginLeft:"2em"}}>
                      Post
                    </Button>
                  </Form>
                        </Card>

                  <Card className="admin-card">
                    <CardTitle>Add Glossary Term</CardTitle>
                    <Form onSubmit={ this.addTerm }>
                    Title
                          <Input
                            style={{marginBottom:"1em"}}
                            type="text"
                            name="text"
                            id="text-field"
                            value={ this.state.Title }
                            onChange={e => this.setState({ Title: e.target.value })}

                          />
                          <br/>
                    Content
                          <textarea rows="4" cols="30"
                            style={{marginBottom:"1em"}}
                            type="text"
                            name="text"
                            id="text-field"
                            value={ this.state.Content }
                            onChange={e => this.setState({ Content: e.target.value })}

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

                          <Button type="submit" className="pull-right" style={{marginLeft:"2em"}}>
                      Post
                    </Button>
                    </Form>
                  </Card>
                      </Col>
                </Row>      
                        { logs }

                      </div>
                      : null }
      </div>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    addVoxLog,
    addCaseFile,
    fetchVoxDispatch,
    addInfoFile
  },dispatch)

  const mapStateToProps = state => ({
    vox: state.vox_dispatch,
  })

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Admin));
