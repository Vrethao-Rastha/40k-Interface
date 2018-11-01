import React, { Component } from 'react';
import { withRouter } from "react-router";

class RegistrationFailed extends Component {

  state = {
    toggle: true,
    message: 'REGISTRATION FAILED'
  }
  componentDidMount() {
    setInterval(() => {this.setState({toggle: !this.state.toggle})}, 1000)

  }

    render() {
    

      return (
        <div>
          <div className="fail"></div>
          <div className="text-center override-fail2" >TAMPERING ATTEMT DETECTED. USER EXISTS</div>

          { this.state.toggle ?  
          <div className="text-center override-fail" >{this.state.message}</div>
          : null }
        </div>
      );
    }
}

export default withRouter(RegistrationFailed);
