import React from 'react';
import { connect } from 'react-redux';
import { createReview } from '../../actions/review_actions';
import ReviewForm from './review_form'

// const mapStateToProps = (state, ownProps) => {
//   return {
//     spotId
//   }
// }

const mapDispatchToProps = dispatch => {
  return {
    createReview: review => dispatch(createReview(review))
  };
}

export default connect(null, mapDispatchToProps)(ReviewForm);