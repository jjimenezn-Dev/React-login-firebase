import React, { useState, useContext } from 'react';
import { observer } from 'mobx-react-lite';
import historyStored from '../../stores/historyStore';
import firebaseStore from '../../stores/firebaseStore';

const LoginForm = observer(() => {
    const HistoryContextStore = useContext(historyStored);
    const firebaseContextStore = useContext(firebaseStore);
    
    const [localState, setLocalState] = useState({username:"", password:""});

    function handleLoginClick(event:any) {
        event.preventDefault();
        firebaseContextStore.addAuth();
        doSignInWithEmailAndPassword(localState.username, localState.password);
    }

    function doSignInWithEmailAndPassword(email: string, password: string) {
        try {
            firebaseContextStore.fireAuth[0].signInWithEmailAndPassword(email, password)
            .then(function (user: any) {
                console.log('Credenciales correctas, ¡bienvenido!');
                HistoryContextStore.history.push("/home", {username: localState.username});
                HistoryContextStore.history.go();
                //juan_jimenezn@hotmail.com
            })
            .catch(function (error: any) {
                alert("Error al iniciar sesión");
            });
        } catch (error) {
            alert("error autenticación");
        }
        
    }

    function handleUserNameChange(event:any) {
        setLocalState({ ...localState, username: event.target.value });
    }
    
    function handlePasswordChange(event:any) {
        setLocalState({ ...localState, password: event.target.value });
    }

    function handleLoginClickLink(event:any) {
        HistoryContextStore.history.push("/signup");
        HistoryContextStore.history.go();
    }
    return (
        <form>
            <div className="container-login">
                <label className="uname"><b>Correo</b></label>
                <input type="text" placeholder="Ingresar Correo" name="uname" onChange={handleUserNameChange} required/>

                <label className="psw"><b>Contraseña</b></label>
                <input type="password" placeholder="Ingresar Contraseña" name="psw" onChange={handlePasswordChange} required/>
                    
                <button type="submit" onClick={handleLoginClick}>Login</button>
                <p onClick={handleLoginClickLink} className="registrer_link">Formulario de registro</p>
            </div>
        </form>
    );
})

export default LoginForm;