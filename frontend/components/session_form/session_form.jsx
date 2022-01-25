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

  render() {
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit}>
          <div className="login-form">
            <label>Email:
              <input 
                type="text"
                value={this.state.email}
                onChange={this.handleChange('email')}
                className="login-input"
              />
            </label>
            <label>Password:
              <input 
                type="password"
                value={this.state.password}
                onChange={this.handleChange('password')}
                className="login-input"
              />
            </label>
            <input className="session-submit" type="submit" value={this.props.formType}/>
          </div>
        </form>
      </div>
    )
  };
};

export default SessionForm;