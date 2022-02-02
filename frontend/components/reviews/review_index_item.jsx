import React from 'react';

class ReviewIndexItem extends React.Component {
  render() {
    console.log('From review item');
    return (
      <div>
        <h3>{this.props.review.title}</h3>
      </div>
    )
  };
}

export default ReviewIndexItem;