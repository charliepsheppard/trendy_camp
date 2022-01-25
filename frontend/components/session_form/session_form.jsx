import React from 'react';


class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      zipCode: ''
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

  renderOtherFields() {
    if (this.props.formType === 'signup') {
      return (
        <div>
          <label>First Name:
              <input
              type="text"
              value={this.state.firstName}
              onChange={this.handleChange('firstName')}
            />
          </label>
          <label>Last Name:
              <input
              type="text"
              value={this.state.lastName}
              onChange={this.handleChange('lastName')}
            />
          </label>
          <label>Zip Code:
              <input
              type="text"
              value={this.state.zipCode}
              onChange={this.handleChange('zipCode')}
            />
          </label>
        </div>
      )
    } else {
      return <div></div>
    }
  }

  render() {
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit}>
          <div className="form-header">
            <h2 className="form-header-primary">Welcome back!</h2>
            <h3 className="form-header-secondary">Let's get you outside.</h3>
            <br />
          Please {this.props.formType} or {this.props.navLink}
          </div>
          {this.renderErrors()}
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
            {this.renderOtherFields()}
            <input className="session-submit" type="submit" value={this.props.formType}/>
          </div>
        </form>
      </div>
    )
    // return this.props.formType === 'login' ? this.renderLogin() : this.renderSignup();
  };
};

export default SessionForm;