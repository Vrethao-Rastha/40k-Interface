import React, { Component } from 'react';

class LoginFail extends Component {

  state = {
    toggle: true,
    message: 'UNAUTHORIZED'
  }
  componentDidMount() {
    setInterval(() => {this.setState({toggle: !this.state.toggle})}, 1000)

  }

    render() {
    if(this.state.toggle === true){
      //setTimeout(() => {this.setState({toggle: !this.state.toggle})}, 1000)

      return (
        <div>
          <div className="fail"></div>
          <div style={{fontSize: "100pt", color:"red"}}>{this.state.message}</div>
        </div>
      );
    }else {
      //setTimeout(() => {this.setState({toggle: !this.state.toggle})}, 1000)

      return(
        <div>
          <div className="fail"></div>
        </div>
      )
    }
  }
}

export default LoginFail;
