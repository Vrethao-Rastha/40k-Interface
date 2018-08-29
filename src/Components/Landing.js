import React, { Component } from 'react';
import { Navbar, Nav, NavbarBrand, Button } from 'reactstrap'
import { Link } from 'react-router-dom'


class Landing extends Component {
  state = {
    view: 0,
    modal: false
  }

  componentDidMount(){
    setTimeout(() => {this.setState({view: 1})}, 3000)

  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    if(this.state.view === 0){
      return (
        <div className="Landing">
          <Navbar className="Navbar">
            <NavbarBrand><img style={{height:"2em", marginRight:"1em"}} src={process.env.PUBLIC_URL + "/images.png"} />His Majesty's Holy Inquisition</NavbarBrand>
          </Navbar>
        </div>
      );

  }
  else if(this.state.view === 1){
      return (
        <div className="Landing">
          <Navbar className="Navbar">
            <NavbarBrand><img style={{height:"2em", marginRight:"1em"}} src={process.env.PUBLIC_URL + "/images.png"} />His Majesty's Holy Inquisition</NavbarBrand>
          </Navbar>
          <Link className="btn btn-primary col-md-2 offset-md-5" to="/Login" style={{ marginTop:"5em", backgroundColor:"#850909", color:"black", fontFamily: 'MedievalSharp'}}>Enter</Link>



        </div>
      );
    }
  }

}

export default Landing;
