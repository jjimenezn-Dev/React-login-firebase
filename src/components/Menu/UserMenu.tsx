import React, { useContext } from 'react';
import { observer } from 'mobx-react';
import historyStored from '../../stores/historyStore';

const UserMenu: React.FC = observer(() => {
    const HistoryContextStore = useContext(historyStored);

    function homeHandler(event: any) {
        HistoryContextStore.history.push("/home");
        HistoryContextStore.history.go();
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