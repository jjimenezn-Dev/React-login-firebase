import React, { useContext, useState, useEffect } from 'react';
import { observer } from 'mobx-react';
import historyStored from '../../stores/historyStore';

const UserMenu = observer((props: any) => {
    const HistoryContextStore = useContext(historyStored);
    const [localState, setLocalState] = useState({ name: "", id: "" });

    function homeHandler(event: any) {
        try {
            let userKey = props.history.location.state.username ? props.history.location.state.username : "";
            let authName = props.history.location.state.authName ? props.history.location.state.authName : "";
            HistoryContextStore.history.push({ pathname: "/home", state: { authName: authName, username: userKey } });
            HistoryContextStore.history.go();
        } catch (error) {
            HistoryContextStore.history.push("/");
            HistoryContextStore.history.go();
        }
    }

    function getName() {
        return props.history.location.state.authName ? props.history.location.state.authName : "";
    }

    return (
        <div>
            <div className="ligh-font">
                <h3>Bienvenido</h3> <h4>{getName()}</h4>
            </div>
            <div className="welcome-message"></div>
            <ul>
                <h6 className="sub-tittle">Usuario</h6>
                <li onClick={homeHandler} className="menu-button">Inicio</li>
            </ul>
        </div>
    );
})

export default UserMenu;