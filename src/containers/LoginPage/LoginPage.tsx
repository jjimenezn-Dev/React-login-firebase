import React, { useEffect } from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import { BrowserRouter as Router, Route, } from 'react-router-dom';
import SignupForm from '../../components/SignupForm/SignupForm';

const LoginPage= ({match}:any) => {


  return (
    <div className="login-page">
      <h1>¡Bienvenido al curso de manejo defensivo!</h1>
      <Router>
        <Route path="/" exact component={LoginForm} />
        <Route path="/signup" exact component={SignupForm} />
      </Router>
    </div>
  )
}

export default LoginPage;