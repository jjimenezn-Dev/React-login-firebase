import React, { FunctionComponent, useState, useEffect } from 'react';
import loginUser from '../utils/loginUser';

const LoginForm: FunctionComponent = () => {
    const [localState, setLocalState] = useState({username:"", password:""});

    function handleLoginClick(event:any) {
        event.preventDefault();
        loginUser(localState.username, localState.password);
    }

    function handleUserNameChange(event:any) {
        setLocalState({ ...localState, username: event.target.value });
    }
    
    function handlePasswordChange(event:any) {
        setLocalState({ ...localState, password: event.target.value });
    }
    return (
        <form>
            <div className="container">
                <label className="uname"><b>Username</b></label>
                <input type="text" placeholder="Enter Username" name="uname" onChange={handleUserNameChange} required/>

                <label className="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" onChange={handlePasswordChange} required/>
                    
                <button type="submit" onClick={handleLoginClick}>Login</button>
                <span className="psw">Forgot <a href="#">password?</a></span>
            </div>
        </form>
    );
}

export default LoginForm;