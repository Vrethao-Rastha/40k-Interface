import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Card, CardTitle } from 'reactstrap';
import DashTopper from './DashTopper'
import Files from './Files'


class SearcResults extends Component {
  render() {
    let caseResults = this.props.case_search_result.map(file => <Files key={ file.id} file={ file } />)
    let nameResults = this.props.name_search_result.map(file => <Files key={ file.id} file={ file } />)
    let locationResults = this.props.location_search_result.map(file => <Files key={ file.id} file={ file } />)

      return(
        <div>
          <div className="search-results"></div>

          <DashTopper />
          
          {/* Ternary to display data from one of the selected searchs */}
          { (caseResults.length > 0) ? caseResults : 
            (locationResults.length > 0) ? locationResults : 
            (nameResults.length > 0) ? nameResults 
            : <Card className="col-sm-6 offset-sm-3" style={{height:"18em", marginTop:"5em"}}> 
            <CardTitle style={{marginTop:"2em"}}>No Results Found</CardTitle>
            <img className="text-img2" src={ process.env.PUBLIC_URL + "inquisition_stamp_by_hikaru_119-d4u0rgc.jpg"} alt="stamp"/> 
          </Card> }

          <div className="spacer-div"></div>
        </div>
      );
    }
}

const mapStateToProps = state => ({
  case_search_result: state.case_search_result,
  name_search_result: state.name_search_result,
  location_search_result: state.location_search_result
})

export default connect(mapStateToProps)(SearcResults);
