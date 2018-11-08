import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

class LoginFail extends Component {

  state = {
    toggle: true,
    message: 'UNAUTHORIZED'
  }
  componentDidMount() {
    setInterval(() => {this.setState({toggle: !this.state.toggle})}, 1000)

  }

    render() {
    
      return (
        <div>
          <div className="fail"></div>

            <div className="text-center override-fail2">ATTEMPTED PASSWORD OVERRIDE DETECTED!</div>


          { this.state.toggle === true ?

            <div className="text-center override-fail" >{this.state.message}</div>

          : null }
        </div>
      );
  }
}

export default withRouter(LoginFail);
