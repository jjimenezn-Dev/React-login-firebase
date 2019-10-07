import React, { FunctionComponent } from 'react';

const AdminMenu: FunctionComponent = () => {

    return (
        <ul>
            <h6 className="sub-tittle">Menu de administrador</h6>
            <li className="menu-button">Inicio</li>
            <li className="menu-button">Usuarios</li>
        </ul>
    );
}

export default AdminMenu;