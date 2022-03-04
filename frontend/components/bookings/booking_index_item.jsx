import React from 'react';
import spot_show_container from '../spot_show/spot_show_container';

class BookingIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
    this.formatDate = this.formatDate.bind(this);
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.deleteBooking(this.props.trip.id);
  }

  formatDate(date) {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['Placeholder', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const splitDate = date.split('-');

    const dateNum = parseInt(splitDate[2].slice(0, 2));
    const month = months[parseInt(splitDate[1])];
    const year = parseInt(splitDate[0]);

    const dayOfWeek = days[new Date(year, parseInt(splitDate[1]) - 1, dateNum)];

    return `${dayOfWeek}, ${dateNum} ${month}, ${year}`
  }

  render() {

    const spot = this.props.trip.spot
    const startDate = this.props.trip.start_date;
    const endDate = this.props.trip.end_date

    return (
      <div className="booking-index-item-container">
        <img src={spot.photoUrl} alt="spot-photo" className="booking-index-item-img" />
        <div className="booking-index-item-info">
          <h2 className="booking-index-item-name">{spot.name}</h2>
          <p className="booking-index-item-price">{spot.price}/night</p>
        </div>
        <div className="booking-index-item-details">
          <span className="booking-index-item-guests">{this.props.trip.guests} guest(s)</span>
          <span className="booking-index-item-dates">{this.formatDate(startDate)} - {this.formatDate(endDate)}</span>
          <button className="booking-index-item-delete" onClick={this.handleDelete}>Delete</button>
        </div>
      </div>
    )
  };
};

export default BookingIndexItem;

