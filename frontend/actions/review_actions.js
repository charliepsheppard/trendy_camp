import * as ReviewAPIUtil from '../util/review_api_util';

export const RECEIVE_ALL_REVIEWS = 'RECEIVE_ALL_REVIEWS';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const REMOVE_REVIEW = 'REMOVE_REVIEW';

export const receiveAllReviews = reviews => {
  return {
    type: RECEIVE_ALL_REVIEWS,
    reviews
  };
}

export const receiveReview = ({review}) => {
  return {
    type: RECEIVE_REVIEW,
    review
  };
}

export const removeReview = reviewId => {
  return {
    type: REMOVE_REVIEW,
    reviewId
  };
}

export const fetchAllReviews = spotId => dispatch => {
  return ReviewAPIUtil.fetchAllReviews(spotId)
    .then(reviews => dispatch(receiveAllReviews(reviews)));
}

export const createReview = review => dispatch => {
  return ReviewAPIUtil.createReview(review)
    .then(review => dispatch(receiveReview(review)));
}

export const updateReview = review => dispatch => {
  return ReviewAPIUtil.updateReview(review)
    .then(review => dispatch(receiveReview(review)));
}

export const deleteReview = reviewId => dispatch => {
  return ReviewAPIUtil.deleteReview(reviewId)
    .then(() => dispatch(removeReview(reviewId)));
}