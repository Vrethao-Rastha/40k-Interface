import React, { Component } from 'react';
import { connect } from 'react-redux';

export default function(ComposedComponent) {
  class Authentication extends Component {

    componentWillMount() {
      if (!localStorage.getItem('user_name') && !this.props.auth.isAuthed) {
        this.props.history.push('/LoginFail');
      }
    }

    componentWillUpdate(nextProps) {
      if (!localStorage.getItem('user_name') && !nextProps.auth.isAuthed) {
        this.props.history.push('/LoginFail');
      }
    }

    render() {
      return <ComposedComponent {...this.props} />
    }
  }

  function mapStateToProps(state) {
    return { auth: state.auth };
  }

  return connect(mapStateToProps)(Authentication);
}
