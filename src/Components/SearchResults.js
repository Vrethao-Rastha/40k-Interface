import React, { Component } from 'react';
import { connect } from 'react-redux'
import Topper from './Topper'
import Files from './Files'


class SearcResults extends Component {
  render() {
    let caseResults = this.props.case_search_result.map(file => <Files key={ file.id} file={ file } />)
    let nameResults = this.props.name_search_result.map(file => <Files key={ file.id} file={ file } />)
    let locationResults = this.props.location_search_result.map(file => <Files key={ file.id} file={ file } />)

    if(caseResults.length || locationResults.length === 0){
      return (
        <div>
          <div className="search-results"></div>
            <Topper />

            { nameResults }



        </div>
      );
    }else if(nameResults.length || locationResults.length === 0){
      return (
        <div>
        <div className="search-results"></div>
          <Topper />
          { caseResults }


        </div>
      );
    }else if(caseResults.length || nameResults.length === 0){
      return (
        <div>
          <div className="search-results"></div>
            <Topper />

            { locationResults }



        </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  case_search_result: state.case_search_result,
  name_search_result: state.name_search_result,
  location_search_result: state.location_search_result
})

export default connect(mapStateToProps)(SearcResults);
