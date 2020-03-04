import React from 'react';
import smartfon from '../../../assets/weather/102-smartphone.svg';
import {NavLink} from 'react-router-dom';
import '../viewStart.scss';
import '../../../components/Header/header.scss';

const ViewJakoscPowietrza = () => (
    <div>
    <div className="ViewJakoscPowietrza__styleGrid" style={{
        display: 'grid',
        gridTemplateColumns: '100px repeat(2,1fr)',
        gridTemplateRows: 'repeat(2,80px)',
        backgroundColor: '#1B4778',
    }}>

    <div style={{gridArea:'1/1/3/2', backgroundColor: '#1B4778', borderLeft: '3px solid #1B4778' }}>
        <img alt="smartfon" style={{width:"80px", marginTop: "40px"}} src={smartfon} />
    </div>

    <div style={{gridArea: '1/2/2/3' , marginLeft:'30px', textAlign:'center', marginTop: '20px'}}>
    MP 10
    <p style={{fontWeight: '600'}}>13% normy</p> 
    </div>
    
    <div style={{gridArea:'2/2/3/3', marginLeft: '30px', textAlign:'center'}}>
    PM 2.5:
    <p style={{fontWeight: '600'}}>19% normy</p>
    </div>

    <div style={{gridArea:'1/3/3/4', marginTop: '40px', textAlign:'center'}}>
    Jakość powietrza:
     <p style={{fontWeight: '600'}}>Bardzo dobra</p>
    </div>
    </div>

        <div style={{display:'grid', gridTemplateColumns: 'repeat(3,1fr)', gridTemplateRows: '60px'}}> 
           
        <button className="hoverr" style={{border: ' 10px solid #1B4778'  , backgroundColor: 'rgb(66, 124, 191)' }}>
                <NavLink
                className="navigationItemLink2" id="pierwszy" to="mapa-pogody">Mapa pogody
                </NavLink>
            </button>
            <button className="hoverr" style={{border: ' 10px solid #1B4778' , backgroundColor: 'rgb(66, 124, 191)'} }>
                <NavLink
                className="navigationItemLink2" to="/pogoda">Pogoda godzinowa
                </NavLink>
            </button>
            <button className="hoverr" style={{border: ' 10px solid #1B4778' , backgroundColor: 'rgb(66, 124, 191)'}}>
                <NavLink
                className="navigationItemLink2" to="/pogoda-5-dni">Pogoda na 5 dni
                </NavLink>
            </button>
        </div>
        </div>
    
    
)


export default ViewJakoscPowietrza;