import React from 'react';
import BookingIndexItem from './booking_index_item';

class BookingIndex extends React.Component {
  render() {
    console.log('booking index', this.props.user)

    if (this.props.session !== this.props.user.id) {
      this.props.history.push('/');
    }

    const trips = this.props.user.bookings.map(trip => {
      return <BookingIndexItem
        key={trip.id}
        trip={trip}
        deleteBooking={this.props.deleteBooking}
        history={this.props.history}
        fetchSpot={this.props.fetchSpot}
      />
    })

    return (
      <div className="trips-list-container">
        <h1 className="trips-list-heading">{this.props.user.firstName}'s Trip(s)</h1>
        <div className="trips-list-items">
          {trips}
        </div>
      </div>
    ); 
  };
};

export default BookingIndex;