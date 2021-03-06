import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import GreetingContainer from './greeting/greeting_container';
import SpotsIndexContainer from './spots/spots_index_container';
import SpotShowContainer from './spot_show/spot_show_container';
import ReviewFormContainer from './reviews/review_form_container';
import ReviewEditFormContainer from './reviews/review_edit_form_container';
import BookingIndexContainer from './bookings/booking_index_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Footer from './footer/footer';

const App = () => {
  return (
    <div>
      <header className="nav-header">
        <h1 className="nav-logo"><Link to="/" className="nav-logo-link">TrendyCamp</Link></h1>
        <GreetingContainer />
      </header>
      <Switch>
        <AuthRoute exact path="/login" component={LogInFormContainer} />
        <AuthRoute exact path="/signup" component={SignUpFormContainer} />
        <ProtectedRoute exact path="/spots/:spotId/reviews" component={ReviewFormContainer} />
        <ProtectedRoute exact path="/spots/:spotId/reviews/:id" component={ReviewEditFormContainer} />
        <ProtectedRoute exact path="/users/:userId/bookings" component={BookingIndexContainer} />
        <Route exact path="/" component={SpotsIndexContainer} />
        <Route path="/spots/:spotId" component={SpotShowContainer} />
        {/* <Route exact path="/login" component={LogInFormContainer} />
        <Route exact path="/signup" component={SignUpFormContainer} /> */}
      </Switch>
      <Footer />
    </div>
  )
}

export default App;