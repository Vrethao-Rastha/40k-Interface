import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import VoxIndividual from './VoxIndividual'
import { addVoxLog, updateVoxLog, addCaseFile } from '../Redux/Actions/VoxDispatchActions'
import { Card,
  Button, Col, CardTitle, Navbar,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Form
   } from 'reactstrap';
import { Link } from 'react-router-dom'
import renderIf from './Util'

class Admin extends Component {

  state ={
    modal: false,
    content: '',
    addContent: '',
    avatar: '',
    addAvatar: '',
    name: '',
    addName: '',
    id: '',
    First_Name: '',
    Last_Name: '',
    Address: '',
    City: '',
    Bio: '',
    File_Number: ''
  }

  handlePost = e => {
    this.props.addVoxLog(this.state.addContent, this.state.addAvatar, this.state.addName)
  }

  handleEdit = e => {
    this.props.updateVoxLog(this.state.content, this.state.name, this.state.id)
  }

  addCase = e => {
    e.preventDefault()
    this.props.addCaseFile(this.state.First_Name, this.state.Last_Name, this.state.Address, this.state.City, this.state.Bio, this.state.File_Number)
  }

  render() {
    console.log('stuff', this.props)
    const logs = this.props.vox.map(message => <VoxIndividual key={message.id} message={message} /> )
    return (
      <div>

        <Navbar className="Navbar">


          <NavbarBrand><img style={{height:"2em", marginRight:"1em"}} src={process.env.PUBLIC_URL + "/images.png"} />His Majesty's Holy Inquisition
</NavbarBrand>
            <NavbarBrand style={{marginLeft:"25em"}}> Welcome {localStorage.rank.replace(/"/g,"")} {localStorage.user_name.replace(/"/g,"")} </NavbarBrand>


            <UncontrolledDropdown className="navDropdown" style={{marginLeft:"15em"}}>
                <DropdownToggle className="navDropdown" style={{borderRadius:"25px", color:"#850909", backgroundColor:"black", border:"none"}} caret>
                          File Access
                        </DropdownToggle>
                <DropdownMenu right className="navDropdown">
                        <DropdownItem className="navDropdown">
                          <Button className="navDropdown" style={{marginTop: "1em", marginLeft:"1em", fontSize:"15pt"}} onClick={this.toggleCase}>Case Search</Button>
                        </DropdownItem>

                        <DropdownItem className="navDropdown">
                          <Button  onClick={this.toggleName} style={{marginTop: "1em", marginLeft:"1em", fontSize:"15pt"}} className="navDropdown">Name Search</Button>
                        </DropdownItem>
                        <DropdownItem className="navDropdown">
                          <Button onClick={this.toggleLocation} style={{marginTop: "1em", marginLeft:"1em", marginRight:"1em", fontSize:"15pt"}} className="navDropdown">Location Search</Button>
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>

          <Link className="NavbarButtons" to="/Vox_Dispatch" style={{ fontSize:"15pt"}}>Astropathic Logs</Link>

          <Nav navbar>

          </Nav>
        </Navbar>

          {renderIf(localStorage.admin === 'true',
          <div className="container-fluid">

            <Col className="col-md-3 offset-md-3">


                        <Card style={{borderRadius:"%5", marginTop:"2em" ,marginBottom:"2em"}} className="">
                          <CardTitle>New Vox Dispatch</CardTitle>
                            <Form onSubmit={ this.handlePost }>


                                Case Number
                                <input
                                  style={{marginBottom:"1em"}}
                                  type="text"
                                  name="addVox"
                                  id="text-field"
                                  value={ this.state.addName }
                                  onChange={e => this.setState({ addName: e.target.value })}

                                />

                                <br/>
                                Avatar
                                <input
                                  style={{marginBottom:"1em"}}
                                  type="text"
                                  name="addVox"
                                  id="text-field"
                                  value={ this.state.addAvatar }
                                  onChange={e => this.setState({ addAvatar: e.target.value })}

                                />
                                <ul>
                                  <li>/chess.jpg</li>
                                  <li>/Drog1.jpg</li>
                                  <li>/dude.jpg</li>
                                  <li>/eisenhorn-01.jpg</li>
                                  <li>/eldar.jpg</li>
                                  <li>/juliana.jpg</li>
                                  <li>/Sister Of Battle.jpg</li>
                                  <li>/tarot.png</li>
                                  <li>/tattoo.png</li>

                                </ul>

                                <br/>

                                Content
                                <textarea rows="4" cols="50"
                                  type="text"
                                  name="addVox"
                                  id="text-field"
                                  value={ this.state.addContent }
                                  onChange={e => this.setState({ addContent: e.target.value })}

                                />


                          <Button className="pull-right" style={{marginLeft:"2em"}} onClick={ this.handlePost }>
                            Post
                          </Button>
                        </Form>
                      </Card>

                  <Card style={{borderRadius:"%5", marginTop:"2em" ,marginBottom:"2em"}} className="">

                    <CardTitle>Add Case File</CardTitle>
                      <Form onSubmit={ this.addCase }>


                          First Name
                          <input
                            style={{marginBottom:"1em"}}
                            type="text"
                            name="text"
                            id="text-field"
                            value={ this.state.First_Name }
                            onChange={e => this.setState({ First_Name: e.target.value })}

                          />

                          <br/>

                          Last Name
                          <input
                            style={{marginBottom:"1em"}}
                            type="text"
                            name="text"
                            id="text-field"
                            value={ this.state.Last_Name }
                            onChange={e => this.setState({ Last_Name: e.target.value })}

                          />

                          <br/>

                          Address
                          <input
                            style={{marginBottom:"1em"}}
                            type="text"
                            name="text"
                            id="text-field"
                            value={ this.state.Address }
                            onChange={e => this.setState({ Address: e.target.value })}

                          />

                          <br/>

                          City
                          <input
                            style={{marginBottom:"1em"}}
                            type="text"
                            name="text"
                            id="text-field"
                            value={ this.state.City }
                            onChange={e => this.setState({ City: e.target.value })}

                          />

                          <br/>

                          Bio
                          <textarea rows="4" cols="50"
                            type="text"
                            name="text"
                            id="text-field"
                            value={ this.state.Bio }
                            onChange={e => this.setState({ Bio: e.target.value })}

                          />

                          <br/>

                          File Number
                          <input
                            style={{marginBottom:"1em"}}
                            type="text"
                            name="text"
                            id="text-field"
                            value={ this.state.File_Number }
                            onChange={e => this.setState({ File_Number: e.target.value })}

                          />

                          <br/>


                    <Button type="submit" className="pull-right" style={{marginLeft:"2em"}}>
                      Post
                    </Button>
                  </Form>
                        </Card>
                        </Col>
                        { logs }

                      </div>
                      )}

      </div>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    addVoxLog,
    updateVoxLog,
    addCaseFile,
  },dispatch)

  const mapStateToProps = state => ({
    vox: state.vox_dispatch,
  })

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
