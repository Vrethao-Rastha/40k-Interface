import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import Landing from './Components/Landing'
import CaseSearch from './Components/CaseSearch'
import FieldReports from './Components/FieldReports'
import CaseFiles from './Components/CaseFiles'
import VoxDispatch from './Components/VoxDispatch'
import SearchResults from './Components/SearchResults'
import Dash from './Components/Dash'
import Login from './Components/Login'
import LoginFail from './Components/LoginFail'
import CheckAuth from './Components/CheckAuth'


class App extends Component {
  render() {
    return (
      <Router>
        <Switch>

          <Route exact path="/" component={Landing} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/LoginFail" component={LoginFail} />
          <Route path="/Dash" component={ Dash } />
          <Route path="/Case_Search" component={ CaseSearch } />
          <Route path="/Case_Files" component={ CaseFiles } />
          <Route path="/Vox_Dispatch" component={ VoxDispatch } />
          <Route path="/Search_Results" component={ SearchResults } />
        </Switch>
      </Router>

    );
  }
}

export default App;
