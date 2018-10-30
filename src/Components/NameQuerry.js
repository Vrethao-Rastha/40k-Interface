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
  CardTitle,
  FormGroup
     } from 'reactstrap';
  import ParticleEffectButton from 'react-particle-effect-button'
  import { fetchCaseReport, fetchNameReport, fetchLocationReport, clearCaseReport, clearNameReport, clearLocationReport } from '../Redux/Actions/FieldReportActions'

class NameQuerry extends Component {

    state = {
        caseSearch: false,
        nameSearch: false,
        locationSearch: false,
        first_name: '',
        last_name: '',
        hidden: false,
        animating: false
      }
    
      componentDidMount() {
        if(this.props.name_search_result.length > 0){
            this.setState({name: ''})
            this.props.clearNameReport(this.state.name, this.props.history)
          }
      }
    
      submitNameQuerry = (e) => {
        e.preventDefault()
        if (this.state.animating) return
        this.setState({
          hidden: !this.state.hidden,
          animating: true
        })
        setTimeout(() => {this.props.fetchNameReport(this.state.first_name, this.state.last_name, this.props.history)}, 1500)
      }

    render() { 
      console.log(this.state.name)
        const {
            hidden
          } = this.state
          
        return ( 
          <div className="Search">
                <Card className="col-md-6 offset-md-3 navDropdown">

<CardBody className="navDropdown">
  <CardTitle>Name Query</CardTitle>

  <Form onSubmit={this.submitNameQuerry}>
    <Label className="btns" for="caseNumber-field">Enter Name Query</Label>
        <FormGroup>
          <Label>First Name</Label>
            <Input
              className="put"
            type="caseNumber"
            name="caseNumber"
            id="caseNumber-field"
            value={this.state.first_name}
            onChange={e => this.setState({ first_name: e.target.value})}
          />
          <Label>Last Name</Label>
          <Input
              className="put"
            type="caseNumber"
            name="caseNumber"
            id="caseNumber-field"
            value={this.state.last_name}
            onChange={e => this.setState({ last_name: e.target.value})}
          />
          <Label>Note: The Machine Spirit governing this archive is temperamental and only respects queries made with proper punctuation.<br/> Praise be to the Omnissiah.</Label>
          </FormGroup>

          <ParticleEffectButton
            hidden={hidden}
            color='#850909'

          >
            <Button style={{marginTop:"8em", backgroundColor:"black", borderColor:"#850909", color:"#850909"}} type="submit">Submit</Button>

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
  fetchNameReport,
  fetchLocationReport,
  userLogout,
  clearCaseReport,
  clearNameReport,
  clearLocationReport
}, dispatch)

const mapStateToProps = state => ({
  name_search_result: state.name_search_result
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NameQuerry)); ;