import React, { useContext } from 'react';
import { observer } from 'mobx-react';
import historyStored from '../../stores/historyStore';

const UserMenu = observer((props: any) => {
    const HistoryContextStore = useContext(historyStored);

    function homeHandler(event: any) {
        try {
            let userKey = props.history.location.state.username ? props.history.location.state.username : "";
            HistoryContextStore.history.push({ pathname: "/home", state: { username: userKey } });
            HistoryContextStore.history.go();
        } catch (error) {
            HistoryContextStore.history.push("/");
            HistoryContextStore.history.go();
        }
    }
    return (
        <ul>
            <h6 className="sub-tittle">Usuario</h6>
            <li onClick={homeHandler} className="menu-button">Inicio</li>
            <li className="menu-button">Mi Progreso</li>
            <li className="menu-button">Editar Perfil</li>
        </ul>
    );
})

export default UserMenu;