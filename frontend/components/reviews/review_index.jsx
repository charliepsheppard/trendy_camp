import React from 'react';
import ReviewIndexItem from './review_index_item';

class ReviewIndex extends React.Component {

  render() {
    const reviews = this.props.reviews.map(review => <ReviewIndexItem key={review.id} review={review} deleteReview={this.props.deleteReview} />)
    return (
      <div>
        {reviews}
      </div>
    );
  };
}

export default ReviewIndex;