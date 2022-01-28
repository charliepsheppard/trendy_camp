import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import GreetingContainer from './greeting/greeting_container';
import SpotsIndexContainer from './spots/spots_index_container';
import { AuthRoute } from '../util/route_util';

const App = () => {
  return (
    <div>
      <header className="nav-header">
        <h1 className="nav-logo">TrendyCamp</h1>
        <GreetingContainer />
      </header>
      <Switch>
        <AuthRoute exact path="/login" component={LogInFormContainer} />
        <AuthRoute exact path="/signup" component={SignUpFormContainer} />
        <Route path="/" component={SpotsIndexContainer} />
        {/* <Route exact path="/login" component={LogInFormContainer} />
        <Route exact path="/signup" component={SignUpFormContainer} /> */}
      </Switch>
    </div>
  )
}

export default App;