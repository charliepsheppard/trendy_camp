import { RECEIVE_ALL_REVIEWS, RECEIVE_REVIEW, REMOVE_REVIEW } from '../actions/review_actions';

const reviewsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_ALL_REVIEWS:
      return action.reviews;
    case RECEIVE_REVIEW:
      return Object.assign({}, oldState, { [action.review.id]: action.review });
    case REMOVE_REVIEW:
      const newState = Object.assign({}, oldState)
      delete newState[action.reviewId];
      return newState;
    default:
      return oldState;
  }
}

export default reviewsReducer