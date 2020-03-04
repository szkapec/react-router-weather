import React from 'react';
import przejasnienia from "../../../assets/weather/002-cloudy-13.svg";
import snieg from "../../../assets/weather/003-snow-8.svg";
import deszcz from "../../../assets/weather/009-rain-26.svg";
import mroz from "../../../assets/weather/017-thermometer-7.svg";
import slonce from "../../../assets/weather/013-sun-8.svg";
import dodatniaTemp from "../../../assets/weather/024-thermometer-5.svg";
import wiatr from "../../../assets/weather/027-wind-sign.svg";
import zachmurzone from "../../../assets/weather/014-cloud-8.svg";
import sniezka from "../../../assets/weather/092-snowflake.svg";

import './WyswietlPogode5dni.css';

const WyswietlPogode5dni = (props) => {

    const {dataC,dataD,dataE, temA, cisA, wiatryA, chA,temB, cisB, wiatryB, chB,temC, cisC, wiatryC, chC,temD, cisD, wiatryD, chD,temE, cisE, wiatryE, chE, wilgA,wilgB,wilgC,wilgD,wilgE} = props.all;





    return (

        <>
        <div className="piecDni__wyniki jeden">
            <h3 className="piecDni__h3">Dzisiaj  </h3>
            {temA>0&&wilgA>20&&chA>80 ? <img src={deszcz} alt="deszcz"/> : temA<0&&wilgA>20&&chA>80 ? <img src={snieg} alt="snieg"/> : chA>80 ? <img src={zachmurzone} alt="zachmurzone"/> : chA>50&&chA<80 ? <img src={przejasnienia} alt="przejasnienia"/> : chA< 50 ? <img src={slonce} alt="słonecznie"/> : 'Błąd prosze o kontakt z adminem' }
            {wiatryA*10 > 30 ? <img className="pecDni__wiatr" src={wiatr} alt="silny wiatr"/> : null}
            <div><b>Temperatura: </b> {temA}&#176;C</div>
            <div><b>Ciśnienie: </b>  {cisA} hPa</div>
            <div><b>Wiatr: </b> {Math.floor(wiatryA*10)} km/s</div>
            <div><b>Chmury: </b> {chA} %</div>
            <div><b>Wilgotność: </b>{wilgA}%</div>
        </div>

        
            <div className="piecDni__wyniki dwa">
                <h3 className="piecDni__h3">Jutro</h3>
                {temB>0&&wilgB>20&&chB>80  ? <img src={deszcz} alt="deszcz"/> : temB<0&&wilgB>20&&chB>80 ? <img src={snieg} alt="snieg"/> : chB>80 ? <img src={zachmurzone} alt="zachmurzone"/> : chB>50&&chB<80 ? <img src={przejasnienia} alt="przejasnienia"/> : chB< 50 ? <img src={slonce} alt="słonecznie"/> : 'Błąd prosze o kontakt z adminem' }
                {wiatryB*10 > 30 ? <img src={wiatr} alt="silny wiatr"/> : null}
                <div><b>Temperatura: </b> {temB}&#176;C</div>
                <div><b>Ciśnienie: </b> {cisB} hPa</div>
                <div><b>Wiatr: </b> {Math.floor(wiatryB*10)} km/s</div>
                <div><b>Chmury: </b> {chB} %</div>
                <div><b>Wilgotność: </b> {wilgB} % </div> 
            </div>

            
            <div className="piecDni__wyniki trzy">
                <h3 className="piecDni__h3">Dzień: {dataC.substring(0,10)}</h3>
                {temC>0&&wilgC>20&&chC>80  ? <img src={deszcz} alt="deszcz"/>: temC<0&&wilgC>20&&chC>80 ? <img src={snieg} alt="snieg"/> : chC>80 ? <img src={zachmurzone} alt="zachmurzone"/> : chC>50&&chC<80 ? <img src={przejasnienia} alt="przejasnienia"/> : chC< 50 ? <img src={slonce} alt="słonecznie"/> : 'Błąd prosze o kontakt z adminem' }
                {wiatryC*10 > 30 ? <img src={wiatr} alt="silny wiatr"/> : null}
                <div><b>Temperatura: </b> {temC}&#176;C</div>
                <div><b>Ciśnienie: </b>  {cisC} hPa</div>
                <div><b>Wiatr: </b> {Math.floor(wiatryC*10)} km/s</div>
                <div><b>Chmury: </b> {chC} %</div>
                <div><b>Wilgotność: </b> {wilgC} % </div> 
            </div>

            
            <div className="piecDni__wyniki cztery">
                <h3 className="piecDni__h3">Dzień: {dataD.substring(0,10)}</h3>
                {temD>0&&wilgD>20&&chD>80 ? <img src={deszcz} alt="deszcz"/> : temD<0&&wilgD>20&&chD>80 ? <img src={snieg} alt="snieg"/> : chD>80 ? <img src={zachmurzone} alt="zachmurzone"/> : chD>50&&chD<80 ? <img src={przejasnienia} alt="przejasnienia"/> : chD< 50 ? <img src={slonce} alt="słonecznie"/> : 'Błąd prosze o kontakt z adminem' }
                {wiatryD*10 > 30 ? <img src={wiatr} alt="silny wiatr"/> : null}
                <div><b>Temperatura: </b> {temD}&#176;C</div>
                <div><b>Ciśnienie: </b>  {cisD} hPa</div>
                <div><b>Wiatr: </b>{Math.floor(wiatryD*10)} km/s</div>
                <div><b>Chmury: </b>{chD} %</div>
                <div><b>Wilgotność: </b> {wilgD} % </div> 
            </div>

            
            <div className="piecDni__wyniki piec">
                <h3 className="piecDni__h3">Dzień: {dataE.substring(0,10)}</h3>
                {temE>0&&wilgE>20&&chE>80 ? <img src={deszcz} alt="deszcz"/> : temE<0&&wilgE>20&&chE>80 ? <img src={snieg} alt="snieg"/> : chE>80 ? <img src={zachmurzone} alt="zachmurzone"/> : chE>50&&chE<80 ? <img src={przejasnienia} alt="przejasnienia"/> : chE< 50 ? <img src={slonce} alt="słonecznie"/> : 'Błąd prosze o kontakt z adminem' }
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