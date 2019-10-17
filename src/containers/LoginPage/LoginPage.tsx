import React, { useEffect } from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import { BrowserRouter as Router, Route, } from 'react-router-dom';
import SignupForm from '../../components/SignupForm/SignupForm';

const LoginPage: React.FC = () => {


  return (
    <div className="login-page">
      <Router>
        <Route path="/" exact component={LoginForm} />
        <Route path="/signup" exact component={SignupForm} />
      </Router>
    </div>
  )
}

export default LoginPage;