import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {
  const sessionLinks = () => {
    return (
      <nav className="session-link-nav">
        <Link className="session-link" to="/login">Log in</Link>
        <Link className="session-link" to="/signup">Sign Up</Link>
      </nav>
    );
  };
  const personalGreeting = () => {
    return (
      <div className="session-link-nav">
        {/* <h2>Hi {currentUser.firstName}!</h2> */}
        <span className="session-link-nav-logout" onClick={logout}>Log Out</span>
      </div>
    );
  };

  return currentUser ? personalGreeting() : sessionLinks();
};

export default Greeting;