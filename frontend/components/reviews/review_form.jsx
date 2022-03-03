import React from 'react';
import { Link } from 'react-router-dom';

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
    this.state.recommended ? this.setState({ recommended: false }) : this.setState({ recommended: true })
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
    // console.log('review in review form: ', review);
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
    // console.log('state in review form', this.state.recommended);
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
            {/* <label>Recommend
            <input
                type="radio"
                value="true"
              />
            </label>
            <label>Not recommend
            <input
                type="radio"
                value="false"
              />
            </label> */}
            <label>Recommend
              <button 
                type="button"
                className="recommend-btn selected-option"
                onClick={this.handleClick}
              >Yes</button>
            </label>
            <label>Not Recommend
              <button 
                type="button"
                className="recommend-btn"
                onClick={this.handleClick}
              >No</button>
            </label>
          </div>
          <button className="review-submit">Leave review</button>
          <button className="review-done-button"><Link to={`/spots/${this.props.match.params.spotId}`} className="review-done-link">X</Link></button>
        </form>
      </div>
    )
  }
}

export default ReviewForm