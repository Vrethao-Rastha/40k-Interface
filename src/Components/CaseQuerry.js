import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'
import { userLogout } from '../Redux/Actions/authActions'
import {
  Form, Input, Label,
  Button,
  Card,
  CardBody,
     } from 'reactstrap';
  import ParticleEffectButton from 'react-particle-effect-button'
  import { fetchCaseReport, clearCaseReport } from '../Redux/Actions/FieldReportActions'

class CaseQuerry extends Component {

    state = {
        caseSearch: false,
        nameSearch: false,
        locationSearch: false,
        case: '',
        hidden: false,
        animating: false
      }
    
      componentDidMount() {
        if(this.props.case_search_result.length > 0){
          this.setState({case: ''})
          this.props.clearCaseReport(this.state.case, this.props.history)
        }
      }
    
      submitCaseQuerry = (e) => {
        e.preventDefault()
        if (this.state.animating) return
        this.setState({
          hidden: !this.state.hidden,
          animating: true
        })
        setTimeout(() => {this.props.fetchCaseReport(this.state.case, this.props.history)}, 1500)
      }

    render() { 

      const {
        hidden
      } = this.state

        return ( 
          <div className="Search col-sm-12">
                

          <Card className="col-sm-6 query-card navDropdown">

<CardBody className="navDropdown">
    <Form onSubmit={this.submitCaseQuerry}>
      <Label className="btns" for="caseNumber-field">Enter Case Number</Label>
              <Input
                className="put"
              type="caseNumber"
              name="caseNumber"
              id="caseNumber-field"
              value={this.state.case}
              onChange={e => this.setState({ case: e.target.value})}
            />
            <Label>Note: The Machine Spirit governing this archive is temperamental and only respects queries made with proper punctuation.<br/> Praise be to the Omnissiah.</Label>

            <ParticleEffectButton
              hidden={hidden}
              color='#850909'

            >
              <Button className="query-button" type="submit">Submit</Button>

            </ParticleEffectButton>
            <img className="search-pic pull-right" src={ process.env.PUBLIC_URL + "WWzoaC9.jpg"} alt="Omnissiah"/>

</Form>
</CardBody>
</Card>
            </div>
         );
    }
}
 
const mapDispatchToProps = dispatch =>
  bindActionCreators({
  fetchCaseReport,
  userLogout,
  clearCaseReport
}, dispatch)

const mapStateToProps = state => ({
  case_search_result: state.case_search_result
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CaseQuerry)); ;