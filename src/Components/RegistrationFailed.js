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
    if(this.state.toggle === true){

      return (
        <div>
          <div className="fail"></div>
          <div style={{fontSize: "100pt", color:"red"}}>{this.state.message}</div>
        </div>
      );
    }else {

      return(
        <div>
          <div className="fail"></div>
        </div>
      )
    }
  }
}

export default withRouter(RegistrationFailed);
