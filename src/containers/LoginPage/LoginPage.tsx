import React, { FunctionComponent } from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';



const LoginPage: FunctionComponent = () => {
    return(
        <div className="login-page">
            <LoginForm></LoginForm>
        </div>
    )
    
}

export default LoginPage;

/*
<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/6.6.1/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#config-web-app -->

<script>
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDl5_Wh_AH82ESRAwxjsAPCY1kslW1kw_0",
    authDomain: "login-react-8a0d8.firebaseapp.com",
    databaseURL: "https://login-react-8a0d8.firebaseio.com",
    projectId: "login-react-8a0d8",
    storageBucket: "",
    messagingSenderId: "957088271815",
    appId: "1:957088271815:web:9208d7bd066a1fac1d9de2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
</script>
*/