import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import VoxIndividual from './VoxIndividual'

class VoxDispatch extends Component {
  render() {
    const logs = this.props.vox.map(message => <VoxIndividual key={message.id} message={message} /> )
    console.log('props', logs)
    return (
      <div className="vox">
        {logs}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  vox: state.vox_dispatch
})

export default connect(mapStateToProps)(VoxDispatch);
