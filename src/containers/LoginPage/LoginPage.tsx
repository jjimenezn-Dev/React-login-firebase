import React, { FunctionComponent, useEffect } from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import connectDB from '../../components/utils/connectDB';



const LoginPage: FunctionComponent = () => {
  useEffect (()=>{
    connectDB();
  }, [])
  
  return(
      <div className="login-page">
          <LoginForm></LoginForm>
      </div>
  )
}

export default LoginPage;