import React from 'react';
import ReviewIndexItem from './review_index_item';

class ReviewIndex extends React.Component {

  render() {
    console.log('the review index is in the game');
    console.log('this is from the index: ', this.props.reviews);
    const reviews = this.props.reviews.map(review => <ReviewIndexItem key={review.id} review={review} deleteReview={this.props.deleteReview} />)
    return (
      <div>
        {reviews}
      </div>
    );
  };
}

export default ReviewIndex;