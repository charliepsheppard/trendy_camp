import { RECEIVE_BOOKING, RECEIVE_ALL_BOOKINGS, REMOVE_BOOKING } from '../actions/booking_actions';

const bookingsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);

  switch(action.type) {
    case RECEIVE_ALL_BOOKINGS:
      return action.bookings;
    case RECEIVE_BOOKING:
      return Object.assign({}, oldState, {[action.bookingId]: action.booking});
    case REMOVE_BOOKING:
      const newState = Object.assign({}, oldState);
      delete newState[action.bookingId];
      return newState;
    default:
      return oldState;
  }
}

export default bookingsReducer;