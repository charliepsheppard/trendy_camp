import * as BookingApiUtil from '../util/booking_api_util';

export const RECEIVE_BOOKING = 'RECEIVE_BOOKING';
export const REMOVE_BOOKING = 'REMOVE_BOOKING';
export const RECEIVE_ALL_BOOKINGS = 'RECEIVE_ALL_BOOKINGS';

const receiveBooking = booking => {
  return {
    type: RECEIVE_BOOKING,
    booking
  };
};

const removeBooking = bookingId => {
  return {
    type: REMOVE_BOOKING,
    bookingId
  };
};

const receiveAllBookings = bookings => {
  return {
    type: RECEIVE_ALL_BOOKINGS,
    bookings
  };
};

export const fetchBookings = userId => dispatch => {
  return BookingApiUtil.fetchBookings(userId)
    .then(bookings => dispatch(receiveAllBookings(bookings)));
};

export const createBooking = booking => dispatch => {
  return BookingApiUtil.createBooking(booking)
    .then(booking => dispatch(receiveBooking(booking)));
};

export const deleteBooking = bookingId => dispatch => {
  return BookingApiUtil.deleteBooking(bookingId)
    .then(() => dispatch(removeBooking(bookingId)));
};