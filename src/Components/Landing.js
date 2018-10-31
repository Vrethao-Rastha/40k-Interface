import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { userRegister } from '../Redux/Actions/authActions'
import { Navbar, NavbarBrand } from 'reactstrap'
import { Link } from 'react-router-dom'


class Landing extends Component {
  state = {
    view: 0,
    modal: false,
    user_name: "",
    rank: "",
    password: ""
  }

  componentDidMount(){
    setTimeout(() => {this.setState({view: 1})}, 3000)
  }

  setRank = (e) => {
    this.setState({
      rank: e.target.value
    })
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal,
      dropdownOpen: false
    });
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.userRegister(this.state.user_name, this.state.password, this.state.rank, this.props.history)
  }

  render() {

    if(this.state.view === 0){
      return (
        <div className="Landing">
          <Navbar className="Navbar">
            <NavbarBrand><img style={{height:"2em", marginRight:"1em"}} src={process.env.PUBLIC_URL + "/images.png"} alt="Inquisition Logo" />His Majesty's Holy Inquisition</NavbarBrand>
            
          </Navbar>
        </div>
      );

  }
  else if(this.state.view === 1){
      return (
        <div className="Landing2">
          <Navbar className="Navbar">
            <NavbarBrand><img style={{height:"2em", marginRight:"1em"}} src={process.env.PUBLIC_URL + "/images.png"} alt="Inquisition Logo" />His Majesty's Holy Inquisition</NavbarBrand>
            
          </Navbar>
          <Link className="btn btn-secondary col-md-2 offset-md-5 login-button" to="/Login" style={{ marginTop:"5em", backgroundColor:"#850909", color:"black", fontFamily: 'MedievalSharp'}}>Enter</Link>

        </div>
      );
    }
  }

}

const mapDispatchToProps = dispatch => 
  bindActionCreators({
    userRegister
  }, dispatch)


export default connect(null, mapDispatchToProps) (Landing);
