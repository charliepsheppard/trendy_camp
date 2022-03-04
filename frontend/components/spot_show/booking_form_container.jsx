import React from 'react';
import { connect } from 'react-redux';
import { createBooking } from '../../actions/booking_actions';
import BookingForm from './booking_form';

const mapStateToProps = state => {
  return {
    session: state.session.id
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createBooking: booking => dispatch(createBooking(booking))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookingForm);
