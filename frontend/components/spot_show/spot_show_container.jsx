import React from 'react';
import { connect } from 'react-redux';
import { fetchSpot } from '../../actions/spot_actions';
import { fetchAllReviews, deleteReview } from '../../actions/review_actions';
import SpotShow from './spot_show';

const mapStateToProps = (state, { match }) => {
  const spotId = parseInt(match.params.spotId);
  return {
    spot: state.entities.spots[spotId],
    user: state.entities.users[state.session.id],
    reviews: state.entities.reviews,
    session: state.session.id
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchSpot: spotId => dispatch(fetchSpot(spotId)),
    fetchAllReviews: spotId => dispatch(fetchAllReviews(spotId)),
    deleteReview: reviewId => dispatch(deleteReview(reviewId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SpotShow);