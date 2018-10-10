import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Card, CardTitle } from 'reactstrap';
import DashTopper from './DashTopper'
import Files from './Files'
import renderIf from './Util'


class SearcResults extends Component {
  render() {
    let caseResults = this.props.case_search_result.map(file => <Files key={ file.id} file={ file } />)
    let nameResults = this.props.name_search_result.map(file => <Files key={ file.id} file={ file } />)
    let locationResults = this.props.location_search_result.map(file => <Files key={ file.id} file={ file } />)

    if(caseResults.length === 0 && locationResults.length === 0 && nameResults.length === 0) {

      console.log('the props============>', this.props)

      return(
        <div>
          <div className="search-results"></div>

          <DashTopper />

          <Card className="col-md-6 offset-md-3 card-background" style={{height:"18em", marginTop:"5em"}}>
            <CardTitle style={{marginTop:"2em"}}>No Results Found</CardTitle>
          </Card>
        </div>
      );
    }

    else if(caseResults.length === 0 && locationResults.length === 0){

      return (
        <div>
          <div className="search-results"></div>

          <DashTopper />

            { nameResults }



        </div>
      );
    }else if(nameResults.length === 0 && locationResults.length === 0){


      return (
        <div>
        <div className="search-results"></div>

        <DashTopper />
          { caseResults }


        </div>
      );
    }else if(caseResults.length === 0 && nameResults.length === 0){


      return (
        <div>
          <div className="search-results"></div>

          <DashTopper />

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
