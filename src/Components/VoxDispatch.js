import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import VoxIndividual from './VoxIndividual'
import { addVoxLog, fetchVoxDispatch } from '../Redux/Actions/VoxDispatchActions'
import {
  Navbar,
  NavbarBrand,
   } from 'reactstrap';
import { Link } from 'react-router-dom'

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

  componentDidMount() {
    this.props.fetchVoxDispatch()
  }

  render() {
    const logs = this.props.vox.map(message => <VoxIndividual key={message.id} message={message} /> )
    return (
      <div>

        <div className="vox"></div>
        <Navbar className="Navbar">


          <NavbarBrand><img style={{height:"2em", marginRight:"1em"}} src={process.env.PUBLIC_URL + "/images.png"} alt="Inquisition Logo" />His Majesty's Holy Inquisition
          </NavbarBrand>
          { localStorage.rank ? <NavbarBrand className="text-center mx-auto"> Welcome {localStorage.rank.replace(/"/g,"")} {localStorage.user_name.replace(/"/g,"")} </NavbarBrand> : null }
            <Link className="NavbarButtons mr-3" to="/Dash" style={{ fontSize:"15pt"}}>Return</Link>
        
        </Navbar>

        {logs}

      <div className="spacer-div"></div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    addVoxLog,
    fetchVoxDispatch
  }, dispatch)

const mapStateToProps = state => ({
  vox: state.vox_dispatch,
  addVox: state.add_vox
})

export default connect(mapStateToProps, mapDispatchToProps)(VoxDispatch);
