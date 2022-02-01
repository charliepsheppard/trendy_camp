import React from 'react';


class LoginSessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemoLogin = this.handleDemoLogin.bind(this);
  }

  componentWillUnmount() {
    this.props.clearErrors(this.props.errors);
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

  handleDemoLogin(e) {
    e.preventDefault();
    const demoUser = { firstName: 'Demo', lastName: 'User', email: 'demo@demo.com', zipCode: '05452', password: '123456' };
    this.props.processForm(demoUser);
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, idx) => (
          <li key={idx} className="error-display-item">
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
          <div className="login-form">
            <div className="error-display-container">
              {this.renderErrors()}
            </div>
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
            <button className="session-submit" type="submit">Log in</button>
            <br/>
            <button className="demo-submit" onClick={this.handleDemoLogin}>Demo log in</button>
            <span className="action-prompt">Don't have a TrendyCamp account? {this.props.navLink}</span>
          </div>
        </form>
      </div>
    )
    // return this.props.formType === 'login' ? this.renderLogin() : this.renderSignup();
  };
};

export default LoginSessionForm;