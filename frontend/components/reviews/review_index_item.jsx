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
    return (
      <div className="review-content-container">
        <h3 className="review-content-heading">{this.props.review.title}</h3>
        <p className="review-recommended"><strong className="review-user-name">{this.props.review.user.first_name} {this.props.review.user.last_name[0]}</strong>. recommends this listing.</p>
        <p className="review-body">{this.props.review.body}</p>
        <div className="edit-delete-buttons">
          <button className="review-button"><Link to={`/spots/${this.props.review.spotId}/reviews/${this.props.review.id}`} className="edit-button-link" >Edit review</Link></button>
          <button className="review-button" onClick={this.handleDelete}>Delete review</button>
        </div>
      </div>
    )
  };
}

export default ReviewIndexItem;