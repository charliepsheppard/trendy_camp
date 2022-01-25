import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {
  const sessionLinks = () => {
    return (
      <nav>
        <Link to="/login">Login</Link>
        &nbsp;or&nbsp;
        <Link to="/signup">Sign Up!</Link>
      </nav>
    );
  };
  const personalGreeting = () => {
    return (
      <div>
        <h2>Hi {currentUser.firstName}!</h2>
        <button onClick={logout}>Log Out</button>
      </div>
    );
  };

  return currentUser ? personalGreeting() : sessionLinks();
};

export default Greeting;