import React from 'react';
import { Link } from 'react-router-dom';

class ReviewIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.deleteReview(this.props.review.id);
  }

  render() {
    console.log(this.props.review);
    return (
      <div>
        <h3>{this.props.review.title}</h3>
        <button><Link to={`/spots/${this.props.review.spotId}/reviews/${this.props.review.id}`} >Edit review</Link></button>
        <button onClick={this.handleDelete}>Delete review</button>
      </div>
    )
  };
}

export default ReviewIndexItem;