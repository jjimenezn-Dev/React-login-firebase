import React, { useState, useContext } from 'react';
import historyStored from '../../stores/historyStore';
import { observer } from 'mobx-react-lite';

const ResetPassword= observer(() => {
    const HistoryContextStore = useContext(historyStored);  

    const [localState, setLocalState] = useState({username:"", password:""});

    function handleLoginClick(event:any) {
        event.preventDefault();
		HistoryContextStore.history.push("/RecoverPass/reset");
		HistoryContextStore.history.go();
    }

    function handleUserNameChange(event:any) {
        setLocalState({ ...localState, username: event.target.value });
    }
    
    return (
        <div>
            <form>
            <div className="container-login">
                <h1>Reiniciar Contraseña</h1>
                <label className="uname"><b>Correo</b></label>
                <input type="text" placeholder="Ingresar Correo" name="uname" onChange={handleUserNameChange} required/>
                    
                <button type="submit" onClick={handleLoginClick}>Reiniciar mi Contraseña</button>
            </div>
        </form>
        </div>
    );
})

export default ResetPassword;