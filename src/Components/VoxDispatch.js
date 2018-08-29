import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import VoxIndividual from './VoxIndividual'
import { addVoxLog } from '../Redux/Actions/VoxDispatchActions'
import {
  Navbar,
  NavbarBrand,
  Nav,
   } from 'reactstrap';
import { Link } from 'react-router-dom'
import renderIf from './Util'


class VoxDispatch extends Component {

  state ={
    modal: false,
    content: '',
    pic: '',
    name: '',
    id: ''
  }

  handlePost = e => {
    this.props.addVoxLog(this.state.content, this.state.name)
  }


  render() {
    const logs = this.props.vox.map(message => <VoxIndividual key={message.id} message={message} /> )
    console.log('props', logs)
    return (
      <div>

        <div className="vox"></div>
        <Navbar className="Navbar">


          <NavbarBrand><img style={{height:"2em", marginRight:"1em"}} src={process.env.PUBLIC_URL + "images/images.png"} />His Majesty's Holy Inquisition
  </NavbarBrand>
            <NavbarBrand style={{marginLeft:"25em"}}> Welcome {localStorage.rank.replace(/"/g,"")} {localStorage.user_name.replace(/"/g,"")} </NavbarBrand>



            <Link className="NavbarButtons" to="/Dash" style={{marginLeft:"30em", fontSize:"15pt"}}>Return</Link>

          <Link className="NavbarButtons" to="/Vox_Dispatch" style={{ fontSize:"15pt"}}>Astropathic Logs</Link>

          <Nav navbar>

          </Nav>
        </Navbar>




        {logs}


      </div>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    addVoxLog
  }, dispatch)

const mapStateToProps = state => ({
  vox: state.vox_dispatch,
  addVox: state.add_vox
})

export default connect(mapStateToProps, mapDispatchToProps)(VoxDispatch);
