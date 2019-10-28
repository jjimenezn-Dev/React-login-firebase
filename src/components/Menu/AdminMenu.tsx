import React, { useContext, useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import historyStored from '../../stores/historyStore';
import firebaseStore from '../../stores/firebaseStore';

const AdminMenu = observer((props: any) => {
    const HistoryContextStore = useContext(historyStored);
    const firebaseContextStore = useContext(firebaseStore);
    var Users: any = []
    const [localState, setLocalState] = useState({ name: "", });

    function usersListHandler(event: any) {
        try {
            let userKey = props.history.location.state.username ? props.history.location.state.username : "";
            let authName = props.history.location.state.authName ? props.history.location.state.authName : "";
            HistoryContextStore.history.push({ pathname: "/usuarios", state: { authName: authName, username: userKey, data: Users } });
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
                    if (userKey == user.id) {
                        localState.name = `${user.name} ${user.last_name}`
                    }
                });
            });
        })
    }, []);


    async function firstAsync() {
        return firebaseContextStore.addConnection();;
    }

    async function secondAsync(userKey: any, db: any) {
        return db.collection("users").get();
    }

    return (
        <ul>
            <h6 className="sub-tittle">administrador</h6>
            <li onClick={usersListHandler} className="menu-button">Usuarios</li>
        </ul>
    );
})

export default AdminMenu;