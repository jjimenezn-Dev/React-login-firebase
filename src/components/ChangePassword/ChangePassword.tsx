import React, { useState } from 'react';

const ChangePassword= ({match}:any) => {
    const [localState, setLocalState] = useState({username:"", password:""});

    function handleLoginClick(event:any) {
        event.preventDefault();
    }

    function handlePasswordVerChange(event:any) {
        setLocalState({ ...localState, username: event.target.value });
    }
    
    function handlePasswordChange(event:any) {
        setLocalState({ ...localState, password: event.target.value });
    }
    return (
        <div>
            <form>
            <div className="container-login">
                <h1>Reiniciar Contraseña</h1>
                
                <label className="psw"><b>Contraseña</b></label>
                <input type="password" placeholder="Enter Password" name="psw" onChange={handlePasswordChange} required/>
                <label className="psw"><b>Confirmar Contraseña</b></label>
                <input type="password" placeholder="Enter Password" name="psw" onChange={handlePasswordVerChange} required/>
                    
                <button type="submit" onClick={handleLoginClick}>Reiniciar mi clave</button>
            </div>
        </form>
        </div>
    );
}

export default ChangePassword;