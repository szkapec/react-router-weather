import React from 'react';
import './WyswietlAll.css';
import przejasnienia from '../../../assets/weather/002-cloudy-13.svg';
import deszcz from '../../../assets/weather/009-rain-26.svg';
import slonce from '../../../assets/weather/013-sun-8.svg';
import snieg from '../../../assets/weather/003-snow-8.svg';


const WyswietlAll = ({props}) => {

    const {temA,wilgotnoscA,opadyA,wiatrA,ktoraGodzinaA, cityA, zachmurzenieA} = props
    const {temB,wilgotnoscB,opadyB,wiatrB,ktoraGodzinaB, zachmurzenieB} = props
    const {temC,wilgotnoscC,opadyC,wiatrC,ktoraGodzinaC, zachmurzenieC} = props
    const {temD,wilgotnoscD,opadyD,wiatrD,godzinaD} = props


    return (

        <>
        <div className="wyswietl__miasto">{cityA? `Miasto: ${cityA}` : null}</div>

        <div className="wyswietl__grid">
            <div className="wyswietl__pierwszy">
                <div className="wyswietl__grid-img">{opadyA>70&&temA>0? <img src={deszcz} alt="deszcz"/> : opadyA>70&&temA<0 ? <img src={snieg} alt="snieg"/> : zachmurzenieA > 50 ? <img src={przejasnienia} alt="przejasnienia"/> : <img src={slonce} alt="slonce"/> }</div>
                <div>{ktoraGodzinaA?(<div><span className="pogrubienie">Godzina: </span>{ktoraGodzinaA}</div>): null}</div>
                <div>{temA? (<div><span className="pogrubienie">Temp: </span>{Math.floor(temA)}&#176;C</div>) : null}</div>
                <div>{wilgotnoscA? (<div><span className="pogrubienie">Wilgotność: </span>{wilgotnoscA}%</div>) : null}</div>
                <div>{opadyA? (<div><span className="pogrubienie">Opady: </span>{opadyA}%</div>) : null}</div>
                <div>{wiatrA? (<div><span className="pogrubienie">Wiatr: </span>{Math.floor(wiatrA*10)} km/h</div>) : null}</div>
            </div>

            <div className="wyswietl__drugi">
                <div className="wyswietl__grid-img">{opadyB>70&&temB>0? <img src={deszcz} alt="deszcz"/> : opadyB>70&&temB<0 ? <img src={snieg} alt="snieg"/> : zachmurzenieB > 50 ? <img src={przejasnienia} alt="przejasnienia"/> : <img src={slonce} alt="slonce"/> }</div>
                <div>{ktoraGodzinaB?(<div><span className="pogrubienie">Godzina: </span>{ktoraGodzinaB}</div>): null}</div>
                <div>{temB? (<div><span className="pogrubienie">Temp: </span>{Math.floor(temB)}&#176;C</div>) : null}</div>
                <div>{wilgotnoscB? (<div><span className="pogrubienie">Wilgotność: </span>{wilgotnoscB}%</div>) : null}</div>
                <div>{opadyB? (<div><span className="pogrubienie">Opady: </span>{opadyB}%</div>) : null}</div>
                <div>{wiatrB? (<div><span className="pogrubienie">Wiatr: </span>{Math.floor(wiatrB*10)} km/h</div>) : null}</div>
            </div>

            <div className="wyswietl__trzeci">
                <div className="wyswietl__grid-img">{opadyC>70&&temC>0? <img src={deszcz} alt="deszcz"/> : opadyC>70&&temC<0 ? <img src={snieg} alt="snieg"/> : zachmurzenieC > 50 ? <img src={przejasnienia} alt="przejasnienia"/> : <img src={slonce} alt="slonce"/> }</div>            
                <div>{ktoraGodzinaC?(<div><span className="pogrubienie">Godzina: </span>{ktoraGodzinaC}</div>): null}</div>
                <div>{temC? (<div><span className="pogrubienie">Temp: </span>{Math.floor(temC)}&#176;C</div>) : null}</div>
                <div>{wilgotnoscC? (<div><span className="pogrubienie">Wilgotność: </span>{wilgotnoscC}%</div>) : null}</div>
                <div>{opadyC? (<div><span className="pogrubienie">Opady: </span>{opadyC}%</div>) : null}</div>
                <div>{wiatrC? (<div><span className="pogrubienie">Wiatr: </span>{Math.floor(wiatrC*10)} km/h</div>) : null}</div>
            </div>
        </div>

        <div className="wyswietl__kreska"></div>

            {temD? (
                <div className="wyswietl_pogodaGodzinowa" style={{display:'grid'}}>
                    <div  style={{ gridArea: '1/1/4/2'}}>{wilgotnoscD?opadyD>75 ? <img className="wyswietl_img" src={deszcz} alt="deszcz"/> : opadyD<40 ? <img className="wyswietl_img"  src={slonce} alt="slonecznie"/> : <img className="wyswietl_img"  src={przejasnienia} alt="przejasnienia"/>:null}</div>
                    
                    <div>{temD?(<div><span className="pogrubienie">Temperatura: </span>{Math.floor(temD)}&#176;C</div>) : null}</div>
                    <div>{wilgotnoscD?(<div><span className="pogrubienie">Wilgotność: </span>{wilgotnoscD}%</div>): null}</div>
                    <div>{wilgotnoscD?(<div><span className="pogrubienie">Deszcz: </span>{opadyD?opadyD:"Brak danych"}%</div>): null}</div>
                    <div style={{padding: '10px 0 0 30px', fontWeight:'700'}}>{wilgotnoscD?opadyD>75 ? 'Deszczowo' : opadyD<40 ? 'Słonecznie' : 'Liczne przejaśnienia' : null}</div>
                    <div>{wiatrD?(<div><span className="pogrubienie">Wiatr: </span>{Math.floor(wiatrD*5)} km/h</div>): null}</div>
                    <div></div>
                    <div>{godzinaD?(<div><span className="pogrubienie">Godzina: </span>{godzinaD.substring(11,16)}</div>): null}</div>
                </div>
            ): (<div style={{margin: '20px 20px 20px', fontWeight: '700'}}>Sprawdz pogodę co trzy godziny!</div>)}
                
            
        </>
    )
}

export default WyswietlAll