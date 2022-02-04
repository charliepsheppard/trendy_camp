import React from 'react';
import { connect } from 'react-redux';
import { updateReview } from '../../actions/review_actions';
import ReviewEditForm from './review_edit_form';

const mapStateToProps = (state, ownProps) => {
  return {
    review: state.entities.reviews[ownProps.match.params.id]
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateReview: review => dispatch(updateReview(review))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewEditForm);