import React from 'react';
import wiatr from "../../../assets/weather/027-wind-sign.svg";
import zachmurzone from "../../../assets/weather/014-cloud-8.svg";

import rain from '../../../assets/new/rain.svg';
import shadows from '../../../assets/new/shadow.svg'
import frost from '../../../assets/weather/017-thermometer-7.svg';
import tempPositive from '../../../assets/weather/024-thermometer-5.svg';
import sun from '../../../assets/new/sun.svg';
import snow from '../../../assets/new/snow.svg';

import './viewsWeather5day.css';

const WyswietlPogode5dni = (props) => {

    const {newValue, dataC,dataD,dataE, temA, cisA, wiatryA, chA,temB, cisB, wiatryB, chB,temC, cisC, wiatryC, chC,temD, cisD, wiatryD, chD,temE, cisE, wiatryE, chE, wilgA,wilgB,wilgC,wilgD,wilgE} = props.all;





    return (

        <>
        <div className="piecDni__wyniki jeden">
            <h3 className="piecDni__h3">Dzisiaj  </h3>
            {temA>0&&wilgA>20&&chA>80 ? <img src={rain} alt="rain"/> : temA<0&&wilgA>20&&chA>80 ? <img src={snow} alt="snow"/> : chA>80 ? <img src={zachmurzone} alt="zachmurzone"/> : chA>=50&&chA<=80 ? <img src={shadows} alt="shadows"/> : chA< 50 ? <img src={sun} alt="słonecznie"/> : 'Błąd prosze o kontakt z adminem' }
            {wiatryA*10 > 30 ? <img className="pecDni__wiatr" src={wiatr} alt="silny wiatr"/> : null}
            <div><b>Temperatura: </b> {temA}&#176;C</div>
            <div><b>Ciśnienie: </b>  {cisA} hPa</div>
            <div><b>Wiatr: </b> {Math.floor(wiatryA*10)} km/s</div>
            <div><b>Chmury: </b> {chA} %</div>
            <div><b>Wilgotność: </b>{wilgA}%</div>
        </div>

        
            <div className="piecDni__wyniki dwa">
                <h3 className="piecDni__h3">Jutro</h3>
                {temB>0&&wilgB>20&&chB>80  ? <img src={rain} alt="rain"/> : temB<0&&wilgB>20&&chB>80 ? <img src={snow} alt="snow"/> : chB>80 ? <img src={zachmurzone} alt="zachmurzone"/> : chB>=50&&chB<=80 ? <img src={shadows} alt="shadows"/> : chB< 50 ? <img src={sun} alt="słonecznie"/> : 'Błąd prosze o kontakt z adminem' }
                {wiatryB*10 > 30 ? <img src={wiatr} alt="silny wiatr"/> : null}
                <div><b>Temperatura: </b> {temB}&#176;C</div>
                <div><b>Ciśnienie: </b> {cisB} hPa</div>
                <div><b>Wiatr: </b> {Math.floor(wiatryB*10)} km/s</div>
                <div><b>Chmury: </b> {chB} %</div>
                <div><b>Wilgotność: </b> {wilgB} % </div> 
            </div>

            
            <div className="piecDni__wyniki trzy">
                <h3 className="piecDni__h3">Dzień: {dataC.substring(0,10)}</h3>
                {temC>0&&wilgC>20&&chC>80  ? <img src={rain} alt="rain"/>: temC<0&&wilgC>20&&chC>80 ? <img src={snow} alt="snow"/> : chC>80 ? <img src={zachmurzone} alt="zachmurzone"/> : chC>=50&&chC<=80 ? <img src={shadows} alt="shadows"/> : chC< 50 ? <img src={sun} alt="słonecznie"/> : 'Błąd prosze o kontakt z adminem' }
                {wiatryC*10 > 30 ? <img src={wiatr} alt="silny wiatr"/> : null}
                <div><b>Temperatura: </b> {temC}&#176;C</div>
                <div><b>Ciśnienie: </b>  {cisC} hPa</div>
                <div><b>Wiatr: </b> {Math.floor(wiatryC*10)} km/s</div>
                <div><b>Chmury: </b> {chC} %</div>
                <div><b>Wilgotność: </b> {wilgC} % </div> 
            </div>

            
            <div className="piecDni__wyniki cztery">
                <h3 className="piecDni__h3">Dzień: {dataD.substring(0,10)}</h3>
                {temD>0&&wilgD>20&&chD>80 ? <img src={rain} alt="rain"/> : temD<0&&wilgD>20&&chD>80 ? <img src={snow} alt="snow"/> : chD>80 ? <img src={zachmurzone} alt="zachmurzone"/> : chD>=50&&chD<=80 ? <img src={shadows} alt="shadows"/> : chD< 50 ? <img src={sun} alt="słonecznie"/> : 'Błąd prosze o kontakt z adminem' }
                {wiatryD*10 > 30 ? <img src={wiatr} alt="silny wiatr"/> : null}
                <div><b>Temperatura: </b> {temD}&#176;C</div>
                <div><b>Ciśnienie: </b>  {cisD} hPa</div>
                <div><b>Wiatr: </b>{Math.floor(wiatryD*10)} km/s</div>
                <div><b>Chmury: </b>{chD} %</div>
                <div><b>Wilgotność: </b> {wilgD} % </div> 
            </div>

            
            <div className="piecDni__wyniki piec">
                <h3 className="piecDni__h3">Dzień: {dataE.substring(0,10)}</h3>
                {temE>0&&wilgE>20&&chE>80 ? <img src={rain} alt="rain"/> : temE<0&&wilgE>20&&chE>80 ? <img src={snow} alt="snow"/> : chE>80 ? <img src={zachmurzone} alt="zachmurzone"/> : chE>50&&chE<80 ? <img src={shadows} alt="shadows"/> : chE< 50 ? <img src={sun} alt="słonecznie"/> : 'Błąd prosze o kontakt z adminem' }
                {wiatryE*10 > 30 ? <img src={wiatr} alt="silny wiatr"/> : null}
                <div><b>Temperatura: </b> {temE}&#176;C</div>
                <div><b>Ciśnienie: </b> {cisE} hPa</div>
                <div><b>Wiatr: </b>{Math.floor(wiatryE*10)} km/s</div>
                <div><b>Chmury: </b>{chE} %</div>
                <div><b>Wilgotność: </b> {wilgE} % </div> 
            </div>
            
        </>
    )
}

export default WyswietlPogode5dni;