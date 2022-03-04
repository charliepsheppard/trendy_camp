import React from 'react';
import { withRouter } from 'react-router-dom';

class BookingForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      start_date: '',
      end_date: '',
      guests: 1,
      spot: this.props.spot
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.getDayFromDate = this.getDayFromDate.bind(this);
  }

  getDayFromDate(date) {
    let splitDate = date.split('-')
    if (splitDate[2][0] === '0') {
      return parseInt(splitDate[2][1])
    } else {
      return parseInt(splitDate[2])
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const spotId = parseInt(this.props.match.params.spotId);
    const dayDifference = this.getDayFromDate(this.state.end_date) - this.getDayFromDate(this.state.start_date);
    const booking = {
      spot_id: this.props.spot.id,
      user_id: this.props.session,
      start_date: this.state.start_date,
      end_date: this.state.end_date,
      num_guests: this.state.guests,
      total_price: ((this.state.guests) * dayDifference)
    }
    const bookingToCreate = Object.assign({}, booking, { spot_id: spotId });

    if (this.props.session) {
      this.props.createBooking(bookingToCreate)
        .then(() => this.props.history.push(`/users/${this.props.session}/bookings`));
    } else {
      this.props.history.push('/login');
    }
  }

  handleChange(field) {
    return e => this.setState({ [field]: e.currentTarget.value })
  }

  render() {
    // console.log('booking form', this.props.session);
    const { spot } = this.props;
    return (
      <div className="booking-box">
        <h3 className="booking-box-info booking-box-heading">${spot.price}</h3>
        <p className="booking-box-info">Average per night (2 guests)</p>
        <div className="booking-box-details">
          <form className="booking-form" onSubmit={this.handleSubmit}>
            <div className="date-selector">
              <div className="date-input-wrapper">
                <label className="booking-label">Check in
                  <input
                    type="date"
                    className="date-input"
                    onChange={this.handleChange('start_date')}
                  />
                </label>
              </div>
              <div className="date-input-wrapper">
                <label className="booking-label">Check out
                    <input
                      type="date"
                      className="date-input"
                      onChange={this.handleChange('end_date')}
                  />
                </label>
              </div>
            </div>
            <div className="guest-number-container">
              <label className="booking-label">Guests
                <select name="guests" className="guests-select" onChange={this.handleChange('guests')}>
                  <option value="1">1 guest</option>
                  <option value="2">2 guests</option>
                  <option value="3">3 guests</option>
                  <option value="4">4 guests</option>
                </select>
              </label>
            </div>
            {/* <div className="subtotal-container"> */}
              {/* <label className="booking-label">Subtotal
                    <span>${spot.price}</span>
                  </label> */}
              {/* <span className="booking-label">Subtotal</span>
              <span>${spot.price}</span>
            </div> */}
            <button className="booking-request-button" type="submit">Book</button>
          </form>
        </div>
      </div>
    )
  };
};

export default withRouter(BookingForm);