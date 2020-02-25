import React from 'react';
import './WyswietlAll.css';
import przejasnienia from '../../../assets/weather/002-cloudy-13.svg';
import deszcz from '../../../assets/weather/009-rain-26.svg';
import slonce from '../../../assets/weather/013-sun-8.svg';

const WyswietlAll = ({props}) => {

    const {tempA,wilgotnoscA,opadyA,wiatrA,ktoraGodzinaA, cityA} = props
    const {tempB,wilgotnoscB,opadyB,wiatrB,ktoraGodzinaB} = props
    const {tempC,wilgotnoscC,opadyC,wiatrC,ktoraGodzinaC} = props
    const {tempD,wilgotnoscD,opadyD,wiatrD,godzinaD} = props


    return (

        <>
        <div className="wyswietl__miasto">{cityA? `Miasto: ${cityA}` : null}</div>

        <div className="wyswietl__grid">
            <div className="wyswietl__pierwszy">
                <div>{ktoraGodzinaA?`Godzina: ${ktoraGodzinaA}`: null}</div>
                <div>{tempA? `Temp: ${tempA}C` : null}</div>
                <div>{wilgotnoscA? `Wilgotność: ${wilgotnoscA}%` : null}</div>
                <div>{opadyA? `Opady: ${opadyA}%` : null}</div>
                <div>{wiatrA? `Wiatr: ${wiatrA*10}km/h` : null}</div>
            </div>
            <div className="wyswietl__drugi">
            <div>{ktoraGodzinaB?`Godzina: ${ktoraGodzinaB}`: null}</div>
            <div>{tempB? `Temp: ${tempB}C` : null}</div>
            <div>{wilgotnoscB? `Wilgotność: ${wilgotnoscB}%` : null}</div>
            <div>{opadyB? `Opady: ${opadyB}%` : null}</div>
            <div>{wiatrB? `Wiatr: ${wiatrB*10}km/h` : null}</div>
            </div>
            <div className="wyswietl__trzeci">
            <div>{ktoraGodzinaC?`Godzina: ${ktoraGodzinaC}`: null}</div>
            <div>{tempC? `Temp:  ${tempC}` : null}</div>
            <div>{wilgotnoscC? `Wilgotność: ${wilgotnoscC}%` : null}</div>
            <div>{opadyC? `Opady: ${opadyC}%` : null}</div>
            <div>{wiatrC? `Wiatr: ${wiatrC*10}km/h` : null}</div>
            </div>
        </div>

        <div className="wyswietl_pogodaGodzinowa" style={{display:'grid',gridTemplateColumns:'repeat(2,1fr)',gridTemplateRows:'50px 50px 50px 50px'}}>
            <div  style={{ gridArea: '1/1/4/2'}}>{wilgotnoscD?opadyD>75 ? <img className="wyswietl_img" src={deszcz} alt="deszcz"/> : opadyD<40 ? <img className="wyswietl_img"  src={slonce} alt="slonecznie"/> : <img className="wyswietl_img"  src={przejasnienia} alt="przejasnienia"/>:null}</div>
            <div style={{ fontWeight:'700'}}>{tempD?`Temperatura: ${tempD} C` : null}</div>
            <div>{wilgotnoscD?`Wilgotność: ${wilgotnoscD}%`: null}</div>
            <div>{opadyD?`Deszcz: ${opadyD}%`: null}</div>
            <div style={{fontWeight:'700'}}>{godzinaD?` Godzina: ${godzinaD.substring(11,16)}`: null}</div>
            <div style={{ fontWeight:'700'}} >{wiatrD?`Wiatr: ${wiatrD*10}km/h`: null}</div>
            
        </div>

        </>
    )
}

export default WyswietlAll