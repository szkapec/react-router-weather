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
                <div>{ktoraGodzinaA?(<div><span className="pogrubienie">Godzina: </span>{ktoraGodzinaA}</div>): null}</div>
                <div>{tempA? (<div><span className="pogrubienie">Temp: </span>{tempA}</div>) : null}</div>
                <div>{wilgotnoscA? (<div><span className="pogrubienie">Wilgotność: </span>{wilgotnoscA}%</div>) : null}</div>
                <div>{opadyA? (<div><span className="pogrubienie">Opady: </span>{opadyA}%</div>) : null}</div>
                <div>{wiatrA? (<div><span className="pogrubienie">Wiatr: </span>{wiatrA*10} km/h</div>) : null}</div>
            </div>
            <div className="wyswietl__drugi">
            <div>{ktoraGodzinaB?(<div><span className="pogrubienie">Godzina: </span>{ktoraGodzinaB}</div>): null}</div>
            <div>{tempB? (<div><span className="pogrubienie">Temp: </span>{tempB}</div>) : null}</div>
            <div>{wilgotnoscB? (<div><span className="pogrubienie">Wilgotność: </span>{wilgotnoscB}%</div>) : null}</div>
            <div>{opadyB? (<div><span className="pogrubienie">Opady: </span>{opadyB}%</div>) : null}</div>
            <div>{wiatrB? (<div><span className="pogrubienie">Wiatr: </span>{wiatrB*10} km/h</div>) : null}</div>
            </div>
            <div className="wyswietl__trzeci">
            <div>{ktoraGodzinaC?(<div><span className="pogrubienie">Godzina: </span>{ktoraGodzinaC}</div>): null}</div>
            <div>{tempC? (<div><span className="pogrubienie">Temp: </span>{tempC}</div>) : null}</div>
            <div>{wilgotnoscC? (<div><span className="pogrubienie">Wilgotność: </span>{wilgotnoscC}%</div>) : null}</div>
            <div>{opadyC? (<div><span className="pogrubienie">Opady: </span>{opadyC}%</div>) : null}</div>
            <div>{wiatrC? (<div><span className="pogrubienie">Wiatr: </span>{wiatrC*10} km/h</div>) : null}</div>
            </div>
        </div>

        <div className="wyswietl__kreska"></div>

            {tempD? (
                <div className="wyswietl_pogodaGodzinowa" style={{display:'grid'}}>
                    <div  style={{ gridArea: '1/1/4/2'}}>{wilgotnoscD?opadyD>75 ? <img className="wyswietl_img" src={deszcz} alt="deszcz"/> : opadyD<40 ? <img className="wyswietl_img"  src={slonce} alt="slonecznie"/> : <img className="wyswietl_img"  src={przejasnienia} alt="przejasnienia"/>:null}</div>
                    
                    <div>{tempD?(<div><span className="pogrubienie">Temperatura: </span>{tempD}&#176;C</div>) : null}</div>
                    <div>{wilgotnoscD?(<div><span className="pogrubienie">Wilgotność: </span>{wilgotnoscD}%</div>): null}</div>
                    <div>{opadyD?(<div><span className="pogrubienie">Deszcz: </span>{opadyD}%</div>): null}</div>
                    <div>{godzinaD?(<div><span className="pogrubienie">Godzina: </span>{godzinaD.substring(11,16)}</div>): null}</div>
                    <div>{wiatrD?(<div><span className="pogrubienie">Wiatr: </span>{wiatrD*10} km/h</div>): null}</div>
                </div>
            ): (<div style={{margin: '20px 20px 20px', fontWeight: '700'}}>Sprawdz pogodę co trzy godziny!</div>)}
                

        </>
    )
}

export default WyswietlAll