import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import { AuthRoute } from '../util/route_util';

const App = () => {
  return (
    <div>
      <Switch>
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignUpFormContainer} />
      </Switch>
    </div>
  )
}

export default App;