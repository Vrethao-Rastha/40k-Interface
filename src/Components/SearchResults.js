import React, { Component } from 'react';
import { connect } from 'react-redux'
import Topper from './Topper'
import Files from './Files'


class SearcResults extends Component {
  render() {
    console.log('props', fileResults, 'props', this.props)
    let fileResults = this.props.case_search_result.map(file => <Files key={ file.id} file={ file } />)
    return (
      <div>
        <Topper />
        { fileResults }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  case_search_result: state.case_search_result
})

export default connect(mapStateToProps)(SearcResults);
