import React from 'react';


class SignupSessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      zipCode: '',
      // errors: []
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(type) {
    return e => {
      this.setState({ [type]: e.currentTarget.value });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  renderErrors() {
    return (
      <div>
        <ul>
          {this.props.errors.map((error, idx) => (
            <li key={idx}>
              {error}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  render() {
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit}>
          <div className="form-header">
            <h2 className="form-header-primary">Join TrendyCamp</h2>
            <h3 className="form-header-secondary">Discover the best camping near me</h3>
            <br />
          </div>
          {/* <button className="sign-in-demo">Demo Sign in</button> */}
          {/* <hr/> */}
          {this.renderErrors()}
          <div className="login-form">
            <input
              className="login-input"
              type="text"
              placeholder="First name"
              value={this.state.firstName}
              onChange={this.handleChange('firstName')}
            />
            <input
              className="login-input"
              type="text"
              placeholder="Last name"
              value={this.state.lastName}
              onChange={this.handleChange('lastName')}
            />
            <input 
              className="login-input"
              type="text"
              placeholder='Email address'
              value={this.state.email}
              onChange={this.handleChange('email')}
            />
            <input 
              className="login-input"
              type="password"
              placeholder='Enter a password'
              value={this.state.password}
              onChange={this.handleChange('password')}
            />
            <input
              className="login-input"
              type="text"
              placeholder="Zip code"
              value={this.state.zipCode}
              onChange={this.handleChange('zipCode')}
            />
            {/* {this.renderOtherFields()} */}
            <input className="session-submit" type="submit" value={this.props.formType}/>
            <span className="action-prompt">Don't have a hipcamp account? {this.props.navLink}</span>
          </div>
        </form>
      </div>
    )
    // return this.props.formType === 'login' ? this.renderLogin() : this.renderSignup();
  };
};

export default SignupSessionForm;