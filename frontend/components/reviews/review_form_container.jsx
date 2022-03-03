import React from 'react';
import { connect } from 'react-redux';
import { createReview } from '../../actions/review_actions';
import ReviewForm from './review_form'

const mapStateToProps = (state) => {
  return {
    errors: state.errors.review
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createReview: review => dispatch(createReview(review))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);