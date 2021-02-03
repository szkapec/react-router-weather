import React from 'react';
import '../../../scss/Current/Current.scss';
import snow from '../../../assets/new/snow.svg';
import rain from '../../../assets/new/rain.svg';
import shadows from '../../../assets/new/shadow.svg'
import sun from '../../../assets/new/sun.svg';
import nightPictures from '../../../assets/new/night.svg';

const CurrentAll = ({props}) => {
    const {cityA, zachmurzenieA} = props
    const {temD,wilgotnoscD,opadyD,wiatrD,godzinaD} = props
    const {valueD} = props;

    const night = (data, clouds ) => {
        if(Number(data) > 18 && clouds<70 || Number(data) < 4 && clouds<70) {
            return <img src={nightPictures} className="wyswietl_img"/>
        }
       
        return;
    }
    return (
      
        <>
        <div className="view__city">{cityA? `Prognoza pogody godzinnej dla ${cityA}` : null}</div>
        <section className="weather-container">
            <div className="weather-container__position">
                <span  className="time">Godzina</span>
                <span>Prognoza</span>
                <span className="weather-container__wind">Wiatr</span>
                <span className="weather-container__media">Opady</span>
                <span className="weather-container__media">Wilgotność</span>
            </div>
           {valueD.map((item, index) =>  {
               if(index>10) return;
               return (
                <div key={item.dt} className="weather-container__position">
                    <span className="time">{item.dt_txt.substring(11,19)&&<div>{item.dt_txt.substring(11,19)}</div>}</span>
                    <span>
                        
                        {night(item.dt_txt.substring(11,13), item.clouds.all ) ? night(item.dt_txt.substring(11,13), item.clouds.all ) :
                        item.clouds.all>70&&item.clouds.all>0? <img src={rain} alt="rain"/> : item.clouds.all>70&&item.clouds.all<0 ? <img src={snow} alt="snow"/> :
                        zachmurzenieA > 50 ? <img src={shadows} alt="shadows"/> : <img src={sun} alt="sun"/> }
                        {item.main.temp_max&&<div>{Math.floor(item.main.temp_max)}&#176;C</div>}
                    </span>
                    <span className="weather-container__wind">{item.wind.speed&&<div>{Math.floor(item.wind.speed*10)} km/h</div>}</span>
                    <span className="weather-container__media">{item.clouds.all&&<div>{item.clouds.all}%</div>}</span>
                    <span className="weather-container__media">{item.main.humidity&&<div>{item.main.humidity}%</div>}</span>
                </div>
               )
           })}
           

        </section>

        <div className="wyswietl__kreska"></div>

            {temD? (
                <div className="views__display-weather" style={{display:'grid'}}>
                    <div  style={{ gridArea: '1/1/4/2'}}>
                        <div>
                        {night(godzinaD.substring(11,13), opadyD ) ? night(godzinaD.substring(11,13), opadyD ) :
                       opadyD>70&&opadyD>0? <img src={rain}  className="wyswietl_img" alt="rain"/> : opadyD>70&&opadyD<0 ? <img src={snow}  className="wyswietl_img" alt="snow"/> :
                        <img className="wyswietl_img"  src={shadows} alt="shadows"/>}
                        <div style={{marginTop: '30px'}}>{godzinaD?(<div><span className="bold">Godzina: </span>{godzinaD.substring(11,16)}</div>): null}</div>
                    </div>
                    </div>
                    
                    <div>{temD?(<div><span className="bold">Temperatura: </span>{Math.floor(temD)}&#176;C</div>) : null}</div>
                    <div>{wilgotnoscD?(<div><span className="bold">Wilgotność: </span>{wilgotnoscD}%</div>): null}</div>
                    <div>{wilgotnoscD?(<div><span className="bold">Deszcz: </span>{opadyD?opadyD:"Brak danych"}%</div>): null}</div>
                    <div><b>{wilgotnoscD?opadyD>75 ? 'deszczowo' : opadyD<40 ? 'Słonecznie' : 'Liczne przejaśnienia' : null}</b></div>
                    <div>{wiatrD?(<div><span className="bold">Wiatr: </span>{Math.floor(wiatrD*5)} km/h</div>): null}</div>
                    <div></div>
                   
                </div>
            ): (<div className="views__wether-hour">Sprawdz pogodę o konkretnej godzinie!</div>)}
        </>
    )
}

export default CurrentAll