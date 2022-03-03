import React from 'react';
import { Link } from 'react-router-dom';

class ReviewEditForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: this.props.review.title,
      body: this.props.review.body,
      recommended: this.props.review.recommended,
      id: this.props.review.id,
      errors: []
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.addClassToRecommendOnLoad = this.addClassToRecommendOnLoad.bind(this);
  }

  componentDidMount() {
    this.addClassToRecommendOnLoad();
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

  addClassToRecommendOnLoad() {
    if (this.state.recommended === false) return $('#not-recommend').addClass('selected-option'); 
  }

  handleSubmit(e) {
    e.preventDefault();
    const spotId = parseInt(this.props.match.params.spotId);
    const review = Object.assign({}, this.state, { spot_id: spotId })
    this.props.updateReview(review)
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
    console.log('review edit form: ', this.state.recommended);
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
            <label>Recommend
              <button
                id='recommend'
                type="button"
                className="recommend-btn"
                value={true}
                onClick={this.handleClick}
              >Yes</button>
            </label>
            <label>Not Recommend
              <button
                id="not-recommend"
                type="button"
                value={false}
                className="recommend-btn"
                onClick={this.handleClick}
              >No</button>
            </label>
          </div>
          <button className="review-submit">Edit review</button>
          <button className="review-done-button"><Link to={`/spots/${this.props.match.params.spotId}`} className="review-done-link">X</Link></button>
        </form>
      </div>
    )
  }
}

export default ReviewEditForm;