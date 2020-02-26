import React from 'react';
import {NavLink} from 'react-router-dom';
import './header.scss';

const Header = () => (


       
<nav>
    <ul className="nawigationWrapper">
        <li className="navigationItem">
            <NavLink exact
            activeClassName="navigationItemLinkActive"
            className="navigationItemLink" to="/">Start
            </NavLink>
        </li>

        <li className="navigationItem">
            <NavLink
            activeClassName="navigationItemLinkActive"
            className="navigationItemLink" to="/pogoda">Pogoda godzinowa
            </NavLink>
        </li>

        <li className="navigationItem">
            <NavLink
            activeClassName="navigationItemLinkActive"
            className="navigationItemLink" to="/pogoda-5-dni">Prognoza na 5 dni
            </NavLink>
        </li>
        <li className="navigationItem">
            <NavLink
            activeClassName="navigationItemLinkActive"
            className="navigationItemLink" to="/zanieczyszczenia">Zanieczyszczenia
            </NavLink>
        </li>
        <li className="navigationItem">
            <NavLink
            activeClassName="navigationItemLinkActive"
            className="navigationItemLink" to="/mapa-pogody">Mapa pogody
            </NavLink>
        </li>
        <li className="navigationItem">
            <NavLink
            activeClassName="navigationItemLinkActive"
            className="navigationItemLink" to="/contact">Kontakt
            </NavLink>
        </li>

    </ul>
</nav>

)

export default Header;