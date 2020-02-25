import React from 'react';
import './WyswietlAll.css';

const WyswietlAll = ({props}) => {









    const {tempA,wilgotnoscA,opadyA,wiatrA,ktoraGodzinaA, cityA} = props
    const {tempB,wilgotnoscB,opadyB,wiatrB,ktoraGodzinaB} = props
    const {tempC,wilgotnoscC,opadyC,wiatrC,ktoraGodzinaC} = props
    return (

        <>
        <div className="wyswietl__grid">
            <div className="wyswietl__pierwszy">
                <div>{ktoraGodzinaA?`Godzina: ${ktoraGodzinaA}`: null}</div>
                <div>{cityA}</div>
                <div>{tempA}</div>
                <div>{wilgotnoscA}</div>
                <div>{opadyA}</div>
                <div>{wiatrA}</div>
            </div>
            <div className="wyswietl__drugi">
            <div>{ktoraGodzinaB?`Godzina: ${ktoraGodzinaB}`: null}</div>
            <div>{tempB}</div>
            <div>{wilgotnoscB}</div>
            <div>{opadyB}</div>
            <div>{wiatrB}</div>
            </div>
            <div className="wyswietl__trzeci">
            <div>{ktoraGodzinaC?`Godzina: ${ktoraGodzinaC}`: null}</div>
            <div>{tempC}</div>
            <div>{wilgotnoscC}</div>
            <div>{opadyC}</div>
            <div>{wiatrC}</div>
            </div>
        </div>

        </>
    )
}

export default WyswietlAll