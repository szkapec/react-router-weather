import React from 'react'
import przejasnienia from "../../assets/weather/002-cloudy-13.svg";
import snieg from "../../assets/weather/003-snow-8.svg";
import deszcz from "../../assets/weather/009-rain-26.svg";
import mroz from "../../assets/weather/017-thermometer-7.svg";
import slonce from "../../assets/weather/013-sun-8.svg";
import dodatniaTemp from "../../assets/weather/024-thermometer-5.svg";
import zachmurzone from "../../assets/weather/014-cloud-8.svg";
import wiatr from "../../assets/weather/027-wind-sign.svg";
import "./scss/viewStart.scss";


class Global extends React.Component {

    state = {
        changeInput: 'Warszawa',
        value: "",
        date: "",
        miasto: "Lublin",
        wschod: "",
        zachod: "",
        temperatura: "",
        wilgotnosc: "",
        wiatr: "",
        error: false,
        zachmurzenie: "",
        dzien: "",
        miesiac: "",
        rok: "",
        godzina: "",
        minuta: "",
        czas: "",
        cisnienie: ""
      };
    
      componentDidMount() {
        this.fetchApi();
        this.time()
        this.geolocation(); 
      }
      
      
    
      geolocation = () => {
    
        fetch('https://api.ipify.org?format=json')
        .then(res=> console.log(res))
        // http://ip-api.com/json/24.48.0.1
        // var x = document.getElementById("demo");
        //   if (navigator.geolocation) {
        //     navigator.geolocation.getCurrentPosition(showPosition);
        //   } else {
        //     x.innerHTML = "Geolocation is not supported by this browser.";
        //   }
        
        // function showPosition(position) {
        //   x.innerHTML = "Latitude: " + position.coords.latitude +
        //   "<br>Longitude: " + position.coords.longitude;
        // }
    
    }
    
      time = () => {
    
        setInterval(() => {
    
          if(this.state.godzina>=24) {
            this.setState({godzina: 0})
          }
          else if(this.state.minuta>60){
            this.setState({minuta: 0, godzina: this.state.godzina+1})
          }
    
          this.setState(prevState => ({
            minuta: this.state.minuta + 1
          }));
        }, 60000);
      };
    
    
    
      check = () => {
        if (this.state.wilgotnosc > 70) {
          if (this.state.temperatura > 0) {
            return (
              <div className="ViewStart__img one">
                <img className="ViewStart__img1" src={deszcz} alt="deszcz" />
                <p>Deszcz</p>
              </div>
            );
          } else if (this.state.temperatura <= 0) {
            return (
              <div className="ViewStart__img one">
                <img className="ViewStart__img1" src={snieg} alt="snieg" />
                <p>Śnieg</p>
              </div>
            );
          }
        } else if (this.state.zachmurzenie > 70) {
          return (
            <div className="ViewStart__img one">
              <img
                className="ViewStart__img1"
                src={zachmurzone}
                alt="zachmurzenie"
              />
              <p>Zachmurzone</p>
            </div>
          );
        } else if (this.state.zachmurzenie < 70 && this.state.zachmurzenie > 40) {
          return (
            <div className="ViewStart__img one">
              <img
                className="ViewStart__img1"
                src={przejasnienia}
                alt="przejasnienia"
              />
              <p>Liczne przejasnienia</p>
            </div>
          );
        } else if (this.state.zachmurzenie <= 40) {
          return (
            <div style={{ fill: "red" }} className="ViewStart__img one">
              <img className="ViewStart__img1" src={slonce} alt="slonce" />
              <p>Słonecznie</p>
            </div>
          );
        }
      };
    
      weather = () => {
        if (this.state.wiatr > 30) {
          return (
            <div className=" ViewStart__img ViewStart__imgAlert">
              <img className="ViewStart__img1" src={wiatr} alt="wiatr" />
              <p>Uwaga silny wiatr!</p>
            </div>
          );
        }
      };
      temperature = () => {
        if (this.state.temperatura > 0) {
          return (
            <div className="ViewStart__img ">
              <img
                className="ViewStart__img1"
                src={dodatniaTemp}
                alt="dodatniaTemp"
              />
              <p>Dodatnia temperatura</p>
            </div>
          );
        } else if (this.state.temperatura <= 0) {
          return (
            <div className="ViewStart__img">
              <img className="ViewStart__img1" src={mroz} alt="mroz" />
              <p>Mróz</p>
            </div>
          );
        }
      };
      
      fetchApi = () => {
        let api = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.changeInput}&APPID=8c0ca88fe2b8fe6d6c954e8c13f95f86&units=metric`;
        console.log(api)
        fetch(api)
          .then(poj => {
            if (poj.ok) {
              return poj;
            }
            throw Error("Bład");
          })
          .then(poj => poj.json())
          .then(poj => {
            const data = new Date();
            const dzien = data.getDate();
            const miesiac = data.getMonth();
            const rok = data.getFullYear();
            const godzina = data.getHours();
            const minuta = data.getMinutes();
            const czas = new Date().toLocaleString();
    
            this.setState(prevState => ({
              error: false,
              date: czas,
              miasto: poj.name,
              wschod: poj.sys.sunrise,
              zachod: poj.sys.sunset,
              temperatura: poj.main.temp,
              cisnienie: poj.main.pressure,
              wilgotnosc: poj.main.humidity,
              wiatr: poj.wind.speed * 10,
              zachmurzenie: poj.clouds.all,
              dzien,
              miesiac,
              rok,
              godzina,
              minuta,
              czas
            }));
          });
      };
    
      render() {
    
       
        return ( 
        <>
         
          <div className="ViewStart__contener">
             {console.log(this.state.zachod)}
            {/* <h1 className="ViewStart__h1">
              <img className="viewStart_sniezka" src={sniezka} alt="sniezka" /> Witam na stronie
              poświęconej pogodzie
              <img className="viewStart_sniezka1" src={sniezka} alt="sniezka" />
            </h1>
            <h2 className="ViewStart__h2">
              Nie chcesz zmoknąć? <span>Sprawdź pogodę!</span>
            </h2> */}
    
            <div className="ViewStart_city">
    
              <div className='search__city'>
             
                  <input type="text" value={this.state.changeInput} onChange={(e) => this.setState({changeInput: e.target.value})}/>
                  <button onClick={() => this.fetchApi()}>Wyszukaj</button>
              </div>
              <b>{this.state.miasto}</b> 
            </div>
            
            <div className="ViewStart__pogoda">
              Pogoda teraz - dzisiaj godz:
              {this.state.godzina < 10
                ? "0" + this.state.godzina
                : this.state.godzina}
              :
              {this.state.minuta < 10 ? "0" + this.state.minuta : this.state.minuta}
            </div>
            <div className="ViewStart__temp">
              <div>
                Temperatura<p className="temperature">{Math.floor(this.state.temperatura)}&#176;C</p>
              </div>
              <div>
                Ciśnienie <p  className="temperature">{this.state.cisnienie} hPa</p>
              </div>
              <div>
                Wiatr: <p  className="temperature">{Math.floor(this.state.wiatr)} km/s</p>
              </div>
            </div>
    
            <div
              style={{
                display: "grid",
                gridTemplateColumns: `repeat(${this.state.wiatr > 30 ? 3 : 2},1fr)`
              }}
              className="ViewStart__img"
            >
              
              {this.check()}
              {this.temperature()}
              {this.weather()}
            </div>
    
           
         
          </div>
          </>
        );
      }
    }


export default Global;