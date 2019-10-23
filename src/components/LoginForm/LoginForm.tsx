import React, { useState, useContext } from 'react';
import { observer } from 'mobx-react-lite';
import historyStored from '../../stores/historyStore';
import firebaseStore from '../../stores/firebaseStore';
import { Container, Row, Col } from 'react-bootstrap';

const LoginForm = observer(() => {
    const HistoryContextStore = useContext(historyStored);
    const firebaseContextStore = useContext(firebaseStore);

    const [localState, setLocalState] = useState({ username: "", password: "" });

    function handleLoginClick(event: any) {
        event.preventDefault();
        firebaseContextStore.addAuth();
        doSignInWithEmailAndPassword(localState.username, localState.password);
    }

    function doSignInWithEmailAndPassword(email: string, password: string) {
        try {
            firebaseContextStore.fireAuth[0].signInWithEmailAndPassword(email, password)
                .then(function (user: any) {
                    HistoryContextStore.history.push({ pathname: "/home", state: { username: firebaseContextStore.fireAuth[0].W ? `${firebaseContextStore.fireAuth[0].W}` : "none" } });
                    HistoryContextStore.history.go();
                    //juan_jimenezn@hotmail.com
                })
                .catch(function (error: any) {
                    //alert("Error al iniciar sesión");
                });
        } catch (error) {
            alert("error autenticación");
        }

    }

    function handleUserNameChange(event: any) {
        setLocalState({ ...localState, username: event.target.value });
    }

    function handlePasswordChange(event: any) {
        setLocalState({ ...localState, password: event.target.value });
    }

    function handleLoginClickLink(event: any) {
        HistoryContextStore.history.push("/signup");
        HistoryContextStore.history.go();
    }
    return (
        <Container>
            <Row>
                <Col>
                    <div className="container-login explanation">
                        <p>Es muy fácil empezar a realizar tu curso de manejo defensivo, solo sigue estos tres sencillos pasos:</p>
                        <ul>
                            <li><span>1. </span> Comunícate a cursomanejo.info@gmail.com o al (+57) 320 478 2691 y solicita tu incorporación al curso</li>
                            <li><span>2. </span> Paga los derechos del curso, luego se te asignará un usuario para que lo realices</li>
                            <li><span>3. </span> Realiza tu curso de manera rápida y desde cualquier dispositivo, el certificado será enviado 3 días hábiles después de la aprobación del curso</li>
                        </ul>
                        <p>¡No esperes para realizar tu curso de manejo defensivo!</p>
                    </div>
                </Col>
                <Col>
                    <form>
                        <div className="container-login">
                            <label className="uname"><b>Correo</b></label>
                            <input type="text" placeholder="Ingresar Correo" name="uname" onChange={handleUserNameChange} required />

                            <label className="psw"><b>Contraseña</b></label>
                            <input type="password" placeholder="Ingresar Contraseña" name="psw" onChange={handlePasswordChange} required />

                            <button type="submit" onClick={handleLoginClick}>Login</button>
                            <p onClick={handleLoginClickLink} className="registrer_link">Formulario de registro</p>
                        </div>
                    </form>
                </Col>
            </Row>
        </Container>

    );
})

export default LoginForm;