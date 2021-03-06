import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Card, CardTitle } from 'reactstrap';
import DashTopper from './DashTopper'
import Info from './Info'

class SearcResults extends Component {
  render() {
    
    let searchTerm = this.props.info_search_result.map(file => <Info key={ file.id } file={ file } />)
      return(
        <div>
          <div className="search-results"></div>

          <DashTopper />
          
          {/* Ternary to display data from one of the selected searchs */}
          { 
            (searchTerm.length > 0) ? searchTerm :
            
            <Card className="col-sm-4 offset-sm-4" style={{height:"18em", marginTop:"5em"}}> 
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
  location_search_result: state.location_search_result,
  info_search_result: state.info_search_result
})

export default withRouter(connect(mapStateToProps)(SearcResults));
