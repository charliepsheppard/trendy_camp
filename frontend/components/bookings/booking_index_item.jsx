import React from 'react';
import spot_show_container from '../spot_show/spot_show_container';

// const BookingIndexItem = (props) => {
//   const handleDelete = (e) => {
//     e.preventDefault();
//     props.deleteBooking(props.trip.id)
//       .then(() => location.reload());
//   }

//   const formatDate = (date) => {
//     const formattedDate = new Intl.DateTimeFormat('en-US', {
//       dateStyle: 'full'
//     });
//     return formattedDate.format(date);
//   }
// }
class BookingIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
    this.formatDate = this.formatDate.bind(this);
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.deleteBooking(this.props.trip.id)
      .then(() => location.reload());
  }

  formatDate(date) {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['Placeholder', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const splitDate = date.split('-');

    const dateNum = parseInt(splitDate[2].slice(0, 2));
    const month = months[parseInt(splitDate[1])];
    const year = parseInt(splitDate[0]);

    const dayOfWeek = days[new Date(year, parseInt(splitDate[1]) - 1, dateNum).getDay()];

    return `${dayOfWeek}, ${dateNum} ${month}, ${year}`

    // const formattedDate = new Intl.DateTimeFormat('en-US', {
    //   dateStyle: 'full'
    // });
    // return formattedDate.format(date);
  }

  render() {

    const spot = this.props.spots[this.props.trip.spot_id]
    const startDate = this.props.trip.start_date;
    const endDate = this.props.trip.end_date

    if (!spot) {
      return null;
    } else {
      return (
        <div className="booking-index-item-container">
          <img src={spot.photoUrl} alt="spot-photo" className="booking-index-item-img" />
          <h2 className="booking-index-item-name">{spot.name}</h2>
          <div className="booking-index-item-details">
            <p className="booking-index-item-price">${this.props.trip.total_price} total</p>
            <span className="booking-index-item-guests">{this.props.trip.num_guests} guest(s) </span>
            <span className="booking-index-item-dates">{this.formatDate(startDate)} - {this.formatDate(endDate)}</span>
          </div>
          <button className="booking-index-item-delete" onClick={this.handleDelete}>Delete</button>
        </div>
      )
    }
  };
};

export default BookingIndexItem;

