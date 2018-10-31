import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap'
import { Link } from 'react-router-dom'
import { withRouter } from "react-router";



 const RegistrationSuccessful = () => {

      return (
        <div className="register">
          <Navbar className="Navbar">
            <NavbarBrand><img style={{height:"2em", marginRight:"1em"}} src={process.env.PUBLIC_URL + "/images.png"} alt="Inquisition Logo" />His Majesty's Holy Inquisition</NavbarBrand>
            <NavbarBrand className="mx-auto">Registration Successful</NavbarBrand>
            <Link className="btn btn-secondary ml-auto mr-3" to="/Login" style={{ backgroundColor:"#850909", color:"black", fontFamily: 'MedievalSharp'}}>Login</Link>
          </Navbar>
        </div>
      );

  }

export default withRouter(RegistrationSuccessful);
