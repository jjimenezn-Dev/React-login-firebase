import React, { useContext, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import historyStored from '../../stores/historyStore';
import firebaseStore from '../../stores/firebaseStore';

const AdminMenu = observer((props: any) => {
    const HistoryContextStore = useContext(historyStored);
    const firebaseContextStore = useContext(firebaseStore);
    var Users:any = []

    function usersListHandler(event: any) {
        try {
            let userKey = props.history.location.state.username ? props.history.location.state.username : "";
            HistoryContextStore.history.push({ pathname: "/usuarios", state: { username: userKey, data: Users } });
            HistoryContextStore.history.go();
        } catch (error) {
            HistoryContextStore.history.push("/");
            HistoryContextStore.history.go();
        }
    }

    useEffect(() => {
        let userKey = props.history.location.state.username ? props.history.location.state.username : "";
        firstAsync().then(() => {
            const db = firebaseContextStore.connections.firestore();
            secondAsync(userKey, db).then(function (userRef: any) {
                userRef.forEach(function (doc: any) {
                    let user = doc.data();
                    Users.push(user)
                });
            });
        })
    }, []);

    
    async function firstAsync() {
        return firebaseContextStore.addConnection();;
    }

    async function secondAsync(userKey: any, db: any) {
        return db.collection("users").where("id", "==", userKey).get();
    }

    return (
        <ul>
            <h6 className="sub-tittle">administrador</h6>
            <li onClick={usersListHandler} className="menu-button">Usuarios</li>
        </ul>
    );
})

export default AdminMenu;