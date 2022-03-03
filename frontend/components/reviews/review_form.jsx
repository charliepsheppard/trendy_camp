import React from 'react';
import { Link } from 'react-router-dom';
import { FaThumbsUp } from 'react-icons/fa';
import { FaThumbsDown } from 'react-icons/fa';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      body: '',
      recommended: true,
      errors: []
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(type) {
    return e => {
      this.setState({ [type]: e.currentTarget.value });
    };
  }

  handleClick(e) {
    e.preventDefault();
    $('.selected-option').removeClass("selected-option");
    $(e.currentTarget).addClass("selected-option");
    this.setState({ recommended: e.currentTarget.value })
  }

  handleSubmit(e) {
    e.preventDefault();
    const spotId = parseInt(this.props.match.params.spotId);
    const review =  {
      title: this.state.title,
      body: this.state.body,
      recommended: this.state.recommended
    }
    const reviewToSubmit = Object.assign({}, review, { spot_id: spotId })
    this.props.createReview(reviewToSubmit)
      .then(() => this.props.history.push(`/spots/${this.props.match.params.spotId}`))
      .fail(() => this.setState({ errors: this.props.errors }))
  }

  renderErrors() {
    return (
      <ul>
        {this.state.errors.length > 0 ? this.props.errors.map((error, idx) => (
          <li key={idx} className="error-display-item">
            {error}
          </li>
        )) : <p></p>}
      </ul>
    )
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="review-form-container">
          <div className="error-display-container">
            {this.renderErrors()}
          </div>
          <input 
            type="text"
            value={this.state.title}
            onChange={this.handleChange('title')}
            placeholder="Title..."
            className="title-input"
          />
          <textarea 
            value={this.state.body}
            onChange={this.handleChange('body')}
            placeholder="What did you think?..."
            className="body-input"
          />
          <div className="recommended-container">
            <p>Would you recommend this site?</p>
              <div className="recommend-buttons-container">
                <button
                  type="button"
                  className="recommend-btn selected-option"
                  value={true}
                  onClick={this.handleClick}
                ><FaThumbsUp /></button>
                <button
                  type="button"
                  value={false}
                  className="recommend-btn"
                  onClick={this.handleClick}
                ><FaThumbsDown /></button>
              </div>
          </div>
          <button className="review-submit">Leave review</button>
          <button className="review-done-button"><Link to={`/spots/${this.props.match.params.spotId}`} className="review-done-link">X</Link></button>
        </form>
      </div>
    )
  }
}

export default ReviewForm