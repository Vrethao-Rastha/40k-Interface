import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import Landing from './Components/Landing'
import VoxDispatch from './Components/VoxDispatch'
import SearchResults from './Components/SearchResults'
import Dash from './Components/Dash'
import Login from './Components/Login'
import LoginFail from './Components/LoginFail'
import CheckAuth from './Components/CheckAuth'
import Admin from './Components/Admin'
import RegistrationSuccessful from './Components/RegistrationSuccessful'
import RegistrationFailed from './Components/RegistrationFailed'



class App extends Component {
  render() {
    return (
      <Router>
        <Switch>

          <Route exact path="/" component={ Landing } />

          <Route exact path="/Login" component={ Login } />
          <Route exact path="/LoginFail" component={ LoginFail } />
          <Route exact path="/RegistrationSuccessful" component={ RegistrationSuccessful } />
          <Route exact path="/RegistrationFailed" component={ RegistrationFailed } />
          <Route path="/Dash" component={ CheckAuth(Dash)  } />
          <Route path="/Vox_Dispatch" component={ CheckAuth(VoxDispatch) } />
          <Route path="/Search_Results" component={ CheckAuth(SearchResults) } />
          <Route path="/Admin" component={ CheckAuth(Admin) } />
        </Switch>
      </Router>

    );
  }
}

export default App;
