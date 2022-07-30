import React from 'react';
import ReviewIndex from '../reviews/review_index';
import { Link } from 'react-router-dom';
import BookingFormContainer from './booking_form_container';

class SpotDetail extends React.Component {
  
  render() {
    console.log('in spotdetail: ', this.props.reviews)
    console.log(this.props);
    const { spot } = this.props;
    const reviews = this.props.reviews ? Object.values(this.props.reviews) : [];
    console.log('reviews from spot detail: ', reviews)
    return (
      <div className="spot-detail-container">
          <div className="spot-detail-info-container">
            <img src={spot.photoUrl} className="spot-photo" alt="" />
          </div>
          <hr/>
        <div className="container">
          <div className="inner-container">
            <div className="spot-detail-info">
              <h1 className="spot-title">{spot.name}</h1>
              <p className="spot-detail-info-desc">{spot.description}</p>
            </div>
            <div className="info-cards-container">
              <div className="info-card">
                <h2 className="info-card-heading">Lodging provided</h2>
                <ul>
                  <li className="info-card-item">1 site</li>
                  <li className="info-card-item">Up to 2 guests per site</li>
                  <li className="info-card-item">Short walk</li>
                  <li className="info-card-item">Wheelchair access</li>
                </ul>
              </div>
              <div className="info-card">
                <h2 className="info-card-heading">Essentials</h2>
                <ul>
                  <li className="info-card-item">Toilet available</li>
                  <li className="info-card-item">Campfires allowed</li>
                  <li className="info-card-item">Pets allowed</li>
                </ul>
              </div>
              <div className="info-card">
                <h2 className="info-card-heading">Amenities</h2>
                <ul>
                  <li className="info-card-item">Potable water available</li>
                  <li className="info-card-item">Showers available</li>
                  <li className="info-card-item">Picnic table available</li>
                  <li className="info-card-item">Bins available</li>
                  <li className="info-card-item">Wifi available</li>
                </ul>
              </div>
            </div>
            <div className="checkin-details-container">
              <div className="details-label">
                <p>Details</p>
              </div>
              <div className="checkin-general">
                <div className="checkin-details">
                  <span className="checkin-detail"><span className="bold-checkin-detail">Check in: </span>After 2pm</span>
                  <span className="checkin-detail"><span className="bold-checkin-detail">Check out: </span>Before 2pm</span>
                  <span className="checkin-detail"><span className="bold-checkin-detail">Cancellation policy: </span>Strict</span>
                </div>
                <div className="checkin-details">
                  <span className="checkin-detail"><span className="bold-checkin-detail">On arrival: </span>Meet and greet</span>
                  <span className="checkin-detail"><span className="bold-checkin-detail">Minimum nights: </span>1 night</span>
                  <span className="checkin-detail"><span className="bold-checkin-detail">Accepts bookings: </span>12 months out</span>
                </div>
                <div className="checkin-details">
                  <span className="checkin-detail"><span className="bold-checkin-detail">Response time: </span>Within an hour</span>
                  <span className="checkin-detail"><span className="bold-checkin-detail">Response rate: </span>87%</span>
                </div>
              </div>
            </div>
            <div className="review-button-container">
              <Link to={`/spots/${spot.id}/reviews`} className="review-button-link"><button className="review-button">Leave a review</button></Link>
              <ReviewIndex reviews={reviews} session={this.props.session} deleteReview={this.props.deleteReview} />
            </div>
          </div>
          {/* <div className="booking-box">
            <h3 className="booking-box-info booking-box-heading">${spot.price}</h3>
            <p className="booking-box-info">Average per night (2 guests)</p>
            <div className="booking-box-details">
              <div className="date-selector">
                <div className="date-input-wrapper">
                  <label className="booking-label">Check in
                    <input
                      type="date"
                      className="date-input"
                      placeholder="Select date"
                      min="2022-02-01"
                      max="2023-02-01"
                    />
                  </label>
                </div>
                <div className="date-input-wrapper">
                  <label className="booking-label">Check out
                    <input
                      type="date"
                      className="date-input"
                      placeholder="Select date"
                      min="2022-02-01"
                      max="2023-02-01"
                    />
                  </label>
                </div>
              </div>
              <div className="guest-number-container">
                <label className="booking-label">Guests
                  <select name="guests" className="guests-select">
                    <option value="1">1 guest</option>
                    <option value="2">2 guests</option>
                    <option value="3">3 guests</option>
                    <option value="4">4 guests</option>
                  </select>
                </label>
              </div>
              <div className="subtotal-container"> */}
                {/* <label className="booking-label">Subtotal
                  <span>${spot.price}</span>
                </label> */}
                {/* <span className="booking-label">Subtotal</span>
                <span>${spot.price}</span>
              </div>
              <button className="booking-request-button">Book</button>
            </div>
          </div> */}
          <BookingFormContainer spot={this.props.spot} session={this.props.session} />
        </div>
      </div>
    )
  }
}

export default SpotDetail