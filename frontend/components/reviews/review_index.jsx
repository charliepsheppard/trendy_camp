import React from 'react';
import ReviewIndexItem from './review_index_item';

const ReviewIndex = (props) => {
  const reviews = props.reviews.map((review) => {
    return <ReviewIndexItem
      key={review.id}
      session={props.session}
      review={review}
      deleteReview={props.deleteReview} 
    />
  })
  return (
    <div>
      {reviews}
    </div>
  )
}

export default ReviewIndex;