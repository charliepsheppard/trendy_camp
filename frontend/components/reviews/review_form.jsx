import React from 'react';
import { Link } from 'react-router-dom';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      body: '',
      rating: 1
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(type) {
    return e => {
      this.setState({ [type]: e.currentTarget.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const spotId = parseInt(this.props.match.params.spotId);
    const review = Object.assign({}, this.state, { spot_id: spotId })
    this.props.createReview(review);
    this.props.history.replace(`/spots/${this.props.match.params.spotId}`)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Title: 
            <input 
              type="text"
              value={this.state.title}
              onChange={this.handleChange('title')}
            />
          </label>
          <label>Review: 
            <textarea 
              value={this.state.body}
              onChange={this.handleChange('body')}
            />
          </label>
          <label>1: 
            <input 
              type="radio"
              value="1"
            />
          </label>
          <label>2:
            <input
              type="radio"
            />
          </label>
          <label>3:
            <input
              type="radio"
            />
          </label>
          <label>4:
            <input
              type="radio"
            />
          </label>
          <label>5:
            <input
              type="radio"
            />
          </label>
          <button>Leave review</button>
          <button><Link to={`/spots/${this.props.match.params.spotId}`}>Done</Link></button>
        </form>
      </div>
    )
  }
}

export default ReviewForm