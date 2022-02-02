import React from 'react';
import SpotDetail from './spot_detail';

class SpotShow extends React.Component {
  // constructor(props) {
  //   super(props);

  // }

  componentDidMount() {
    this.props.fetchSpot(this.props.match.params.spotId);
    this.props.fetchAllReviews(this.props.match.params.spotId);
  }

  render() {
    if (!this.props.spot) {
      return null;
    }
    console.log('spot show:', this.props.reviews);

    return (
      <div className="show-page">
        {/* <h1>Something goes here</h1> */}
        <SpotDetail spot={this.props.spot} reviews={this.props.reviews} deleteReview={this.props.deleteReview} session={this.props.session} />
        {/* <h2>{this.props.spot.name}</h2> */}
        {/* <p>{this.props.spot.description}</p> */}
        {/* <h1>{this.props.spot.name}</h1> */}
      </div>
    )
  };
};

export default SpotShow;