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
    console.log('recommend props from review index item', this.props.review.recommended)
    return (
      <div className="review-content-container">
        <h3 className="review-content-heading">{this.props.review.title}</h3>
        <p className="review-recommended">
          <strong className="review-user-name">
            {this.props.review.user.first_name} {this.props.review.user.last_name[0]}
            </strong>. {this.props.review.recommended ? 'recommends this listing.' : 'does not recommend this listing.' }
        </p>
        <p className="review-body">{this.props.review.body}</p>
        <div className="edit-delete-buttons">
          <Link to={`/spots/${this.props.review.spotId}/reviews/${this.props.review.id}`} className="edit-button-link" ><button className="review-button">Edit review</button></Link>
          <button className="review-button" onClick={this.handleDelete}>Delete review</button>
        </div>
      </div>
    )
  };
}

export default ReviewIndexItem;