import React from 'react'
import {NavLink} from 'react-router-dom'
import CartCounter from '../atoms/CartCounter';

const MenuItems = () => (
    <div className="s-grid-1 lg-cols-3 s-cross-center s-main-end header-links">
        <nav className="main-menu" id="main-menu">
            <ul>
                <li><NavLink to="/" activeClassName="activo"> Inicio </NavLink></li>
                <li><NavLink to="/courses" activeClassName="activo"> Cursos </NavLink></li>
                <li><NavLink to="/form" activeClassName="activo"> Formulario </NavLink></li>
                <li><NavLink to="/users" activeClassName="activo">Usuarios</NavLink></li>
                <CartCounter />
            </ul>
        </nav>
        <div className="main-menu-toggle to-l" id="main-menu-toggle"></div>
    </div>
)

export default MenuItems