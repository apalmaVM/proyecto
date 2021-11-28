import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/components/layout/Nav.css';


const Nav = (props) => {

    return (
        <nav>
            <div  className="holder">
                <ul>
                    <li><NavLink activeClassName="activo" exact to ="/">Inicio</NavLink></li>
                    <li><NavLink activeClassName="activo" exact to="/personal">Sobre mi</NavLink></li>
                    <li><NavLink activeClassName="activo" exact to="/recetas">Recetas</NavLink></li>
                    <li><NavLink activeClassName="activo" exact to="/tips">Tips y comentarios</NavLink></li>
                    <li><NavLink activeClassName="activo" exact to="/contacto">Contacto</NavLink></li>
                </ul>
            </div>
        </nav>
    )

}

export default Nav;  