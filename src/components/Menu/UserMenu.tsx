import React, { FunctionComponent } from 'react';

const UserMenu: FunctionComponent = () => {

    return (
        <ul>
            <h6 className="sub-tittle">Menu de Usuario</h6>
            <li className="menu-button">Inicio</li>
            <li className="menu-button">Mis Cursos</li>
            <li className="menu-button">Editar Perfil</li>
        </ul>
    );
}

export default UserMenu;