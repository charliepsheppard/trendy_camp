import React from 'react';
import ReviewIndex from '../reviews/review_index';
import { Link } from 'react-router-dom';

class SpotDetail extends React.Component {
  
  render() {
    console.log('in spotdetail: ', this.props.reviews)
    console.log(this.props);
    const { spot } = this.props;
    const reviews = this.props.reviews ? Object.values(this.props.reviews) : [];
    return (
      <div className="spot-detail-container">
          <div className="spot-detail-info-container">
            <img src={spot.photoUrl} className="spot-photo" alt="" />
          </div>
        <div className="container">
          <div className="inner-container">
            <div className="spot-detail-info">
              <h1>{spot.name}</h1>
              <p className="spot-detail-info-desc">{spot.description}</p>
            </div>
            <div className="review-button-container">
              <ReviewIndex reviews={reviews} session={this.props.session} deleteReview={this.props.deleteReview} />
              <button className="review-button"><Link to={`/spots/${spot.id}/reviews`} className="review-button-link">Leave a review</Link></button>
            </div>
            <div>
              <div></div>
              <div></div>
              <div></div>
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
          </div>
          <div className="booking-box">
            <h3 className="booking-box-info">${spot.price}</h3>
            <p className="booking-box-info">Average per night</p>
            <button>Request to book</button>
          </div>
        </div>
      </div>
    )
  }
}

export default SpotDetail