import React, { FunctionComponent, useState } from 'react';

const SignupForm = () => {
    const [localState, setLocalState] = useState({username:"", password:""});

    function handleLoginClick(event:any) {
        event.preventDefault();
    }

    function handleUserNameChange(event:any) {
        setLocalState({ ...localState, username: event.target.value });
    }
    
    function handlePasswordChange(event:any) {
        setLocalState({ ...localState, password: event.target.value });
    }
    return (
        <form>
            <div className="container-login">
                <label className="uname"><b>Correo</b></label>
                <input type="text" placeholder="Ingresar Correo" name="uname" onChange={handleUserNameChange} required/>

                <label className="psw"><b>Contraseña</b></label>
                <input type="password" placeholder="Ingresar Contraseña" name="psw" onChange={handlePasswordChange} required/>
                    
                <button type="submit" onClick={handleLoginClick}>Crear</button>
            </div>
        </form>
    );
}

export default SignupForm;