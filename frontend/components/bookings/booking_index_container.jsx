import React from 'react';
import { connect } from 'react-redux';
import { deleteBooking, fetchBookings } from '../../actions/booking_actions';
import { fetchSpot, fetchSpots } from '../../actions/spot_actions';
import BookingIndex from './booking_index';

const mapStateToProps = (state, ownProps) => {
  console.log('booking index container state', state)
  console.log('booking index container ownProps', ownProps)
  return {
    user: state.entities.users[ownProps.match.params.userId],
    bookings: Object.values(state.entities.bookings),
    session: state.session.id,
    spots: state.entities.spots
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteBooking: bookingId => dispatch(deleteBooking(bookingId)),
    fetchBookings: userId => dispatch(fetchBookings(userId)),
    fetchSpot: spotId => dispatch(fetchSpot(spotId)),
    fetchSpots: () => dispatch(fetchSpots())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookingIndex);