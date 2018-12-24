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
  import { fetchGlossaryReport, clearGlossaryReport } from '../Redux/Actions/FieldReportActions'

class GlossaryQuerry extends Component {

    state = {
        caseSearch: false,
        nameSearch: false,
        locationSearch: false,
        info: '',
        hidden: false,
        animating: false
      }
    
      submitGlossaryQuerry = (e) => {
        e.preventDefault()
        if (this.state.animating) return
        this.setState({
          hidden: !this.state.hidden,
          animating: true
        })
        setTimeout(() => {this.props.fetchGlossaryReport(this.state.info, this.props.history)}, 1500)
      }

    render() { 

        const {
            hidden
          } = this.state

        return ( 
          <div className="Search col-sm-12">
                

<Card className="col-sm-6 query-card navDropdown">
      <CardBody className="navDropdown">
        <Form onSubmit={this.submitGlossaryQuerry}>
          <Label className="btns" for="caseNumber-field">Enter Information Query</Label>
                  <Input
                    className="put"
                  type="caseNumber"
                  name="caseNumber"
                  id="caseNumber-field"
                  value={this.state.info}
                  onChange={e => this.setState({ info: e.target.value})}
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
  userLogout,
  fetchGlossaryReport,
  clearGlossaryReport
}, dispatch)

const mapStateToProps = state => ({
    info_search_result: state.info_search_result
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(GlossaryQuerry)); ;