import React, { useState, useContext } from 'react';
import historyStored from '../../stores/historyStore';
import firebaseStore from '../../stores/firebaseStore';
import { IUser } from '../../interfaces/UserI';

const SignupForm= ({match}:any) => {
    const HistoryContextStore = useContext(historyStored);
    const firebaseContextStore = useContext(firebaseStore);

    const [localState, setLocalState] = useState({ username: "", password: "" });
    const [usareState, setUserState] = useState({ id: "0", name: "", last_name: "", mail: "", document_id: "", available: "false", isAdmin: "false", courses: '{"1":false, "2":false, "3":false, "4":false, "5":false, "6":false}' });

    function handleUserNameChange(event: any) {
        setLocalState({ ...localState, username: event.target.value });
        setUserState({ ...usareState, mail: event.target.value });
    }

    function handlePasswordChange(event: any) {
        setLocalState({ ...localState, password: event.target.value });
    }


    function handleNameChange(event: any) {
        setUserState({ ...usareState, name: event.target.value });
    }

    function handleLastNameChange(event: any) {
        setUserState({ ...usareState, last_name: event.target.value });
    }

    function handleDocumentNameChange(event: any) {
        setUserState({ ...usareState, document_id: event.target.value });
    }

    function addUser(event: any) {
        event.preventDefault();
        if(localState.username.length <= 10 || localState.password.length <= 5){
            alert("correo electronico incorrecto o contraseña es menor de 5 digitos ")
            return;
        }
        if(usareState.name.length == 0 || usareState.last_name.length == 0 || usareState.document_id.length === 0 ){
            alert("Verificar que ningun campo quede vacío. ")
            return;
        }
        const db = firebaseContextStore.connections.firestore();
        try {
        firebaseContextStore.connections.fireAuth().createUserWithEmailAndPassword(usareState.mail, localState.password).then(()=>{
            db.collection("users").add(usareState).then(()=>{
                alert("Tu cuenta a sido creado exitosamente, comunicate con su jefe para la activación de la cuenta.");
                HistoryContextStore.history.push("/");
                HistoryContextStore.history.go();
            });
        });            
        } catch (error) {
            console.log(firebaseContextStore.fireAuth);
            
        }
        
    }

    return (
        <form>
            <div className="container-signup">
                <h1>Registro</h1>
                <label className="uname"><b>Correo</b></label>
                <input type="text" placeholder="Ingresar Correo" name="uname" onChange={handleUserNameChange} required />

                <label className="psw"><b>Contraseña</b></label>
                <input type="password" placeholder="Ingresar Contraseña" name="psw" onChange={handlePasswordChange} required />

                <label className="uname"><b>Nombre</b></label>
                <input type="text" placeholder="Ingresar Nombre" name="name" onChange={handleNameChange} required />

                <label className="uname"><b>Apellido</b></label>
                <input type="text" placeholder="Ingresar Apellido" name="lname" onChange={handleLastNameChange} required />

                <label className="uname"><b>Documento</b></label>
                <input type="text" placeholder="Ingresar Documento" name="doc" onChange={handleDocumentNameChange} required />

                <button type="submit" onClick={addUser}>Crear</button>
            </div>
        </form>
    );
}

export default SignupForm;