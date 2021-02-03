import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import '../../scss/Navbar/NavBar.scss'

import { useMediaPredicate } from "react-media-hook";

const Header = () => {

    const [navButton, setNavButton] = useState(false)
    const biggerThan400 = useMediaPredicate("(max-width: 950px)");

    return (
        <div>
            {biggerThan400 && <div className="nav-min">
                <ul className={navButton ? 'navigationContainer active' : 'navigationContainer'}>
                    <NavLink onClick={() => setNavButton(false)} exact to="/">Start</NavLink>
                    <NavLink onClick={() => setNavButton(false)} exact to="/pogoda">Pogoda godzinowa</NavLink>
                    <NavLink onClick={() => setNavButton(false)} exact to="/pogoda-5-dni">Prognoza na 5 dni</NavLink>
                    <NavLink onClick={() => setNavButton(false)} exact to="/zanieczyszczenia">Zanieczyszczenia</NavLink>
                    <NavLink onClick={() => setNavButton(false)} exact to="/mapa-pogody">Mapa pogody</NavLink>
                    <li>
                        <div className="box-description">
                            Mateusz Kaproń jestem front-end developer oraz designer
                        </div>
                        <div className="box-link">
                            <a href="https://github.com/szkapec"><i className="fab fa-github"></i></a>
                            <a href="https://www.linkedin.com/in/mateusz-kapro%C5%84-664b92197/"><i className="fab fa-linkedin"></i></a>
                            <a href="https://www.facebook.com/mateusz.kapron.50/"><i className="fab fa-facebook"></i></a>
                            <a href="https://www.youtube.com/channel/UCfDIy_8Ig3F_B1-CsNi2lQw?view_as=subscriber"><i className="fab fa-youtube"></i></a>
                        </div>
                        <div className="box-contact">
                            <a href="mailto:mateusz.kapron24@gmail.com">mateusz.kapron24@gmai.com</a>
                            <a href="tel:+48661360889">661-360-889</a>
                        </div>
                    </li>
                </ul>
                <div className="navBar">
                    <div className="navBar-contact">
                        <span><NavLink style={{color:'#3368a3'}} onClick={() => setNavButton(false)} exact to="/pogoda">POGODA</NavLink></span>
                        <a href="mailto:mateusz.kapron24@gmail.com"><i className="far fa-envelope"></i></a>
                        <a href="tel:+48661360889"> <i className="fas fa-phone-alt"></i></a>
                    </div>
                    <div className="navBar-menu">
                        MENU
                    </div>
                    <div className="container-box" onClick={() => setNavButton(!navButton)}>
                        <div className={navButton ? "box active" : "box"}>
                            <div className="rendering"></div>
                        </div>
                    </div>
                </div>
            </div>}

            {!biggerThan400 && (
                <div className="navigation-container">
                    <ul className="navigationWrapper">
                        <li className="navigationItem" >
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
                                className="navigationItemLink" to="/zanieczyszczenia">Jakość powietrza
                            </NavLink>
                        </li>
                        <li className="navigationItem">
                            <NavLink
                                activeClassName="navigationItemLinkActive"
                                className="navigationItemLink" to="/mapa-pogody">Mapa pogody
                            </NavLink>
                        </li>
                    </ul>
                </div>
            )}

        </div>
    )
}


export default Header;