import React from 'react'
import ViewJakoscPowietrza from './ViewJakoscPowietrza/ViewJakoscPowietrza';
import ViewPogodaMiejscowa from './ViewPogodaMiejscowa/ViewPogodaMiejscowa';

import przejasnienia from '../../assets/weather/002-cloudy-13.svg';
import snieg from '../../assets/weather/003-snow-8.svg';
import deszcz from '../../assets/weather/009-rain-26.svg';
import mroz from '../../assets/weather/017-thermometer-7.svg';
import slonce from '../../assets/weather/013-sun-8.svg';
import dodatniaTemp from '../../assets/weather/024-thermometer-5.svg';
import wiatr from '../../assets/weather/027-wind-sign.svg';
import zachmurzone from '../../assets/weather/014-cloud-8.svg';
import sniezka from '../../assets/weather/092-snowflake.svg';
import './viewStart.scss'
const api = 'https://api.openweathermap.org/data/2.5/weather?q=Warszawa&APPID=8c0ca88fe2b8fe6d6c954e8c13f95f86&units=metric'


class ViewStart extends React.Component {
 
    state = {
        value: '',
        date: '',
        miasto: 'Lublin',
        wschod: '',
        zachod: '',
        temperatura: '',
        wilgotnosc: '',
        wiatr: '',
        error: false,
        zachmurzenie: '',
        dzien:'',
        miesiac:'',
        rok:'',
        godzina:'',
        minuta:'',
        czas:'',
        cisnienie: '',
      }
 
      componentDidMount() {
          this.polaczenie();
      }
      
      sprawdz = () => {
          if(this.state.wilgotnosc>70) {
             if(this.state.temperatura>0){
                return <div className="ViewStart__img">
                    <img className="ViewStart__img1" src={deszcz} alt={deszcz}/>
                    <p>Deszcz</p>
                </div>
             }
             else if(this.state.temperatura<=0){
                 return <div className="ViewStart__img">
                    <img className="ViewStart__img1" src={snieg} alt={snieg}/>
                    <p>Snieg</p>
                 </div>
             }
          }
          else if(this.state.zachmurzenie>70){
              return <div className="ViewStart__img">
                <img className="ViewStart__img1" src={zachmurzone} alt={zachmurzone}/>  
                <p>Zachmurzone</p>
              </div>
          }
          else if(this.state.zachmurzenie<70 && this.state.zachmurzenie>40){
              return <div className="ViewStart__img">
                    <img className="ViewStart__img1" src={przejasnienia} alt="przejasnienia"/>
                    <p>Liczne przejasnienia</p>
              </div>
          }
          else if(this.state.zachmurzenie<=40) {
              return <div className="ViewStart__img">
                <img className="ViewStart__img1" src={slonce} alt="slonce"/>
                <p>Słonecznie</p>
              </div>
          }
          
      }

      wiatr = () => {
        if(this.state.wiatr > 60){
            return <div className=" ViewStart__img ViewStart__imgAlert">
                <img className="ViewStart__img1" src={wiatr} alt="wiatr"/> 
                <p>Uwaga silny wiatr!</p> 
            </div>
        }
      }
      temperatura = () => {
          if(this.state.temperatura>0){
              return <div className="ViewStart__img">
                <img className="ViewStart__img1" src={dodatniaTemp} alt="dodatniaTemp"/>
                <p>Dodatnia temperatura</p>
              </div>
          }
          else if(this.state.temperatura<=0){
              return <div className="ViewStart__img">
              <img className="ViewStart__img1" src={mroz} alt="mroz"/>
              <p>Mróz</p>
              </div>
          }
      }

    polaczenie = () => {
        fetch(api)
        .then(poj => {
            if(poj.ok){
                return poj;
            }
            throw Error("Bład")
        })
        .then(poj => poj.json())
        .then(poj => {
            const data = new Date();
            const dzien = data.getDate();
            const miesiac= data.getMonth();
            const rok = data.getFullYear();
            const godzina = data.getHours();
            const minuta = data.getMinutes();
            const czas = new Date().toLocaleString()

            this.setState(prevState => ({
                error: false,
                date: czas,
                miasto: poj.name,
                wschod: poj.sys.sunrise,
                zachod: poj.sys.sunset,
                temperatura: poj.main.temp,
                cisnienie: poj.main.pressure,
                wilgotnosc: poj.main.humidity,
                wiatr: poj.wind.speed,
                zachmurzenie: poj.clouds.all,
                dzien,
                miesiac,
                rok,
                godzina,
                minuta,
                czas,
              }))
        })}
 
    render() {


        return (
            <>
            <h1 className="ViewStart__h1"><img className="viewStart_sniezka" src={sniezka}/> Witam na stronie poswięconej pogodzie <img className="viewStart_sniezka1" src={sniezka}/></h1>
            <h2 className="ViewStart__h2">Nie chcesz zmoknąc? <span>sprawdz pogodę!</span></h2>
            <div className="ViewStart__pogoda">Pogoda teraz-dzisiaj godz:
            {this.state.godzina<10 ? 0+this.state.godzina : this.state.godzina}:
            {this.state.minuta<10 ? 0+this.state.minuta:this.state.minuta}</div>
            <div className="ViewStart_city">{this.state.miasto}</div>
            <div className="ViewStart__temp">
            <div>Temperatura<p>{this.state.temperatura}&#176;C</p></div>
            <div>Wiatr: <p>{this.state.wiatr*10} km/s</p></div>
            <div>Ciśnienie <p>{this.state.cisnienie}hPa</p></div>
            </div>
            
            
            
            <div style={{display:'grid',gridTemplateColumns:`repeat(${this.state.wiatr*10>60?3:2},1fr)`}} className="ViewStart__img">
            {this.sprawdz()}
            {this.temperatura()}
            {this.wiatr()}
            </div>
            <ViewJakoscPowietrza/>
            <ViewPogodaMiejscowa/>
            </>
        )
    }
}

export default ViewStart