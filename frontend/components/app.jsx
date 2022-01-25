import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import GreetingContainer from './greeting/greeting_container';
import { AuthRoute } from '../util/route_util';

const App = () => {
  return (
    <div>
      <header>
        <h1>Welcome to TrendyCamp</h1>
        <GreetingContainer />
      </header>
      <Switch>
        {/* <AuthRoute exact path="/login" component={LogInFormContainer} />
        <AuthRoute exact path="/signup" component={SignUpFormContainer} /> */}
        <Route exact path="/login" component={LogInFormContainer} />
        <Route exact path="/signup" component={SignUpFormContainer} />
      </Switch>
    </div>
  )
}

export default App;