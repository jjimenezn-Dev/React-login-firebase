
import 'firebase/auth';
import 'firebase/database';
import firebaseStore from '../../stores/firebaseStore';
import historyStored from '../../stores/historyStore';
import { observer } from 'mobx-react-lite';
import { useContext } from 'react';

//TODO: Isn't work
const HistoryContextStore = useContext(historyStored);
const firebaseContextStore = useContext(firebaseStore);

export function doSignInWithEmailAndPassword(email: string, password: string) {
    firebaseContextStore.fireAuth.signInWithEmailAndPassword(email, password)
        .then(function (user: any) {
            console.log('Credenciales correctas, ¡bienvenido!');
            HistoryContextStore.history.push("/home");
            HistoryContextStore.history.go();
            //juan_jimenezn@hotmail.com
        })
        .catch(function (error: any) {
            alert("Error al iniciar sesión");
        });
}

export function doCreateUserWithEmailAndPassword(email: string, password: string) {
    firebaseContextStore.fireAuth().createUserWithEmailAndPassword(email, password)
}

export function doSignOut() {
    firebaseContextStore.fireAuth().signOut()
}

export function doPasswordReset(email: string) {
    firebaseContextStore.fireAuth().sendPasswordResetEmail(email)
}

export function doPasswordUpdate(password: string) {
    firebaseContextStore.fireAuth().updatePassword(password);
}