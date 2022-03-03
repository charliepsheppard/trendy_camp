import React from 'react';
import ReviewIndexItem from './review_index_item';

class ReviewIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const reviews = this.props.reviews.map(review => <ReviewIndexItem key={review.id} session={this.props.session} review={review} deleteReview={this.props.deleteReview} />)
    return (
      <div>
        {reviews}
      </div>
    );
  };
}

export default ReviewIndex;