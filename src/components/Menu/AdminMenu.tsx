import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import historyStored from '../../stores/historyStore';

const AdminMenu: React.FC = observer(() => {
    const HistoryContextStore = useContext(historyStored);

    function usersListHandler(event: any) {
        HistoryContextStore.history.push("/usuarios");
        HistoryContextStore.history.go();
    }
    return (
        <ul>
            <h6 className="sub-tittle">administrador</h6>
            <li onClick={usersListHandler} className="menu-button">Usuarios</li>
        </ul>
    );
})

export default AdminMenu;