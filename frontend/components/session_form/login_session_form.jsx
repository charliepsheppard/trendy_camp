import React from 'react';


class LoginSessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
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
      <ul>
        {this.props.errors.map((error, idx) => (
          <li key={idx}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit}>
          <div className="form-header">
            <h2 className="form-header-primary">Welcome back!</h2>
            <h3 className="form-header-secondary">Let's get you outside.</h3>
            <br />
          </div>
          {this.renderErrors()}
          <button className="sign-in-demo">Demo Sign in</button>
          <hr />
          <div className="login-form">
            <input
              className="login-input"
              type="text"
              placeholder='Email address...'
              value={this.state.email}
              onChange={this.handleChange('email')}
            />
            <input
              className="login-input"
              type="password"
              placeholder='Password...'
              value={this.state.password}
              onChange={this.handleChange('password')}
            />
            <input className="session-submit" type="submit" value={this.props.formType} />
            <span className="action-prompt">Don't have a hipcamp account? {this.props.navLink}</span>
          </div>
        </form>
      </div>
    )
    // return this.props.formType === 'login' ? this.renderLogin() : this.renderSignup();
  };
};

export default LoginSessionForm;