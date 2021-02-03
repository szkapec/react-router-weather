import React from 'react';
import smartfon from '../../../assets/weather/102-smartphone.svg';
import { NavLink } from 'react-router-dom';
import '../../../scss/Start/Start.scss';
// import '../../../components/NavBar/NavBar.scss';

const AirQuality = () => (
    <>
        <div className="View__quality">

            <div style={{ gridArea: '1/1/3/2', borderLeft: '4px solid #a6c2e2', borderBottom: "4px solid #a6c2e2" }}>
                <img className="smart" alt="smartfon" src={smartfon} />
            </div>
            <div style={{ gridArea: '1/2/2/3', textAlign: 'center', marginTop: '20px' }}>
                <b>MP 10:</b>
                <p style={{ fontWeight: '600' }}>13% normy</p>
            </div>
            <div style={{ gridArea: '2/2/3/3', textAlign: 'center', borderBottom: "4px solid #a6c2e2" }}>
                <b>PM 2.5:</b>
                <p style={{ fontWeight: '600' }}>19% normy</p>
            </div>
            <div style={{ gridArea: '1/3/3/4', paddingTop: '40px', textAlign: 'center', borderRight: '4px solid #a6c2e2', borderBottom: "4px solid #a6c2e2" }}>
                <b>Jakość powietrza:</b>
                <p style={{ fontWeight: '600' }}>Bardzo dobra</p>
            </div>
        </div>

        <div className="nav-button__container" style={{ maxWidth: '1240px', margin: '0 auto',background: 'none' }}>
            <button className="nav-button">
                <NavLink
                    className="navigationItemLink2" id="pierwszy" to="/pogoda">Pogoda godzinowa
                </NavLink>
            </button>
            <button className="nav-button">
                <NavLink
                    className="navigationItemLink2" to="/zanieczyszczenia">Jakość powietrza
                </NavLink>
            </button>
            <button className="nav-button">
                <NavLink
                    className="navigationItemLink2" to="/pogoda-5-dni">Pogoda na 5 dni
                </NavLink>
            </button>
        </div>
    </>


)


export default AirQuality;