import React from 'react';
import smartfon from '../../../assets/weather/102-smartphone.svg';
import {NavLink} from 'react-router-dom';
import '../scss/viewStart.scss';
import '../../../components/NavBar/NavBar.scss';

const AirQuality = () => (
    <div>
    <div className="ViewJakoscPowietrza__styleGrid">

    <div style={{gridArea:'1/1/3/2', backgroundColor: '#1B4778', borderLeft: '3px solid #1B4778' }}>
        <img className="smart" alt="smartfon" src={smartfon} />
    </div>

    <div style={{gridArea: '1/2/2/3' , textAlign:'center', marginTop: '20px'}}>
    <b>MP 10:</b>
    <p style={{fontWeight: '600'}}>13% normy</p> 
    </div>
    
    <div style={{gridArea:'2/2/3/3', textAlign:'center'}}>
    <b>PM 2.5:</b>
    <p style={{fontWeight: '600'}}>19% normy</p>
    </div>

    <div style={{gridArea:'1/3/3/4', marginTop: '40px', textAlign:'center'}}>
    <b>Jakość powietrza:</b>
     <p style={{fontWeight: '600'}}>Bardzo dobra</p>
    </div>
    </div>

        <div className="nav-button__container"> 
           
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
        </div>
    
    
)


export default AirQuality;