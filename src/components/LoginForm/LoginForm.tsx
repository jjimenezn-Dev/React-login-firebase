import React, { FunctionComponent } from 'react';

const LoginForm: FunctionComponent = () => {
    return (
        <form action="/action_page.php">
            <div className="container">
                <label className="uname"><b>Username</b></label>
                <input type="text" placeholder="Enter Username" name="uname" required/>

                <label className="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" required/>
                    
                <button type="submit">Login</button>
                <span className="psw">Forgot <a href="#">password?</a></span>

            </div>
        </form>
    );
}


export default LoginForm;