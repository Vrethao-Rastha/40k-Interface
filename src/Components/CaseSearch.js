import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Input, Label } from 'reactstrap';
import { fetchCaseReport, fetchNameReport, fetchLocationReport } from '../Redux/Actions/FieldReportActions'

class CaseSearch extends Component {

state = {
  modal: false,
  case: '',
  name: '',
  location: ''
}

  componentDidMount(){
    setTimeout(() => {this.setState({modal: true})}, 3000)

  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  submitCaseQuerry = (e) => {
    e.preventDefault()
    console.log('yup')
      this.props.fetchCaseReport(this.state.case, this.props.history)
      this.props.fetchNameReport(this.state.name, this.props.history)
      this.props.fetchLocationReport(this.state.location, this.props.history)
    }


  submitNameQuerry = (e) => {
    e.preventDefault()
    console.log('yup')
    this.props.fetchNameReport(this.state.name)
  }

  render() {
    console.log('===========> state', this.state, 'history', this.props.history)
    return (
      <div className="CaseSearch">
        {/* <Button onClick={this.toggle}>Click</Button> */}
        <Modal isOpen={this.state.modal} toggle={this.toggle} style={{border:"1px solid #850909"}} >
          <ModalHeader className="CaseSearchModal"  toggle={this.toggle}>Welcome Inquisitor</ModalHeader>
          <ModalBody className="CaseSearchModal">
            <Form>
              <FormGroup>

                <Label className="btns" for="caseNumber-field">Case Number</Label>
                        <Input
                          className="put"
                        type="caseNumber"
                        name="caseNumber"
                        id="caseNumber-field"
                        value={this.state.case}
                        onChange={e => this.setState({ case: e.target.value})}
                      />


                    <Label className="btns" for="name-field">Name Search</Label>

                        <Input
                          className="put"
                        type="name"
                        name="name"
                        id="exampleName"
                        value={this.state.name}
                        onChange={e => this.setState({ name: e.target.value})}
                      />


                      <Label className="btns" for="location-field">Location Search</Label>

                        <Input
                          className="put"
                          type="location"
                          name="location"
                          id="exampleLocation"
                          value={this.state.location}
                          onChange={e => this.setState({ location: e.target.value})}
                        />
                      </FormGroup>
                    </Form>
          </ModalBody>

          <Form onSubmit={ this.submitCaseQuerry }>
          <ModalFooter className="CaseSearchModal">
            <Button color="primary" type="submit" >Do Something</Button>
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Form>
        </Modal>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({
  fetchCaseReport,
  fetchNameReport,
  fetchLocationReport
}, dispatch)

export default withRouter(connect(null, mapDispatchToProps)(CaseSearch));
