import React from 'react'
import przejasnienia from "../../assets/weather/002-cloudy-13.svg";
import snieg from "../../assets/weather/003-snow-8.svg";
import deszcz from "../../assets/weather/009-rain-26.svg";
import mroz from "../../assets/weather/017-thermometer-7.svg";
import slonce from "../../assets/weather/013-sun-8.svg";
import dodatniaTemp from "../../assets/weather/024-thermometer-5.svg";
import zachmurzone from "../../assets/weather/014-cloud-8.svg";
import wiatr from "../../assets/weather/027-wind-sign.svg";
import '../../scss/Start/Start.scss';
import AirQuality from './AirQuality/AirQuality';

class Global extends React.Component {

  state = {
    changeInput: 'Warszawa',
    value: "",
    date: "",
    city: "Lublin",
    sunrise: "",
    sunset: "",
    temperature: "",
    humidity: "",
    windSpeed: "",
    error: false,
    clouds: "",
    day: "",
    month : "",
    year : "",
    hour: "",
    minute : "",
    tims: "",
    pressure: ""
  };

  componentDidMount() {
    this.fetchApi();
    this.time()
    this.geolocation();
  }



  geolocation = () => {

    fetch('https://api.ipify.org?format=json')
      .then(res => console.log(res))
  }

  time = () => {

    setInterval(() => {

      if (this.state.hour >= 24) {
        this.setState({ hour: 0 })
      }
      else if (this.state.minute  > 60) {
        this.setState({ minute : 0, hour: this.state.hour + 1 })
      }

      this.setState(prevState => ({
        minute : this.state.minute  + 1
      }));
    }, 60000);
  };



  check = () => {
    if (this.state.humidity > 70) {
      if (this.state.temperature > 0) {
        return (
          <div className="ViewStart__img one">
            <img className="ViewStart__img1" src={deszcz} alt="deszcz" />
            <p>Deszcz</p>
          </div>
        );
      } else if (this.state.temperature <= 0) {
        return (
          <div className="ViewStart__img one">
            <img className="ViewStart__img1" src={snieg} alt="snieg" />
            <p>Śnieg</p>
          </div>
        );
      }
    } else if (this.state.clouds > 70) {
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
    } else if (this.state.clouds < 70 && this.state.clouds > 40) {
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
    } else if (this.state.clouds <= 40) {
      return (
        <div style={{ fill: "red" }} className="ViewStart__img one">
          <img className="ViewStart__img1" src={slonce} alt="slonce" />
          <p>Słonecznie</p>
        </div>
      );
    }
  };

  weather = () => {
    if (this.state.windSpeed > 50) {
      return (
        <div className=" ViewStart__img ViewStart__imgAlert">
          <img className="ViewStart__img1" src={wiatr} alt="wiatr" />
          <p>Uwaga silny wiatr!</p>
        </div>
      );
    }
  };
  temperature = () => {
    if (this.state.temperature > 0) {
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
    } else if (this.state.temperature <= 0) {
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
        const day = data.getDate();
        const month  = data.getMonth();
        const year  = data.getFullYear();
        const hour = data.getHours();
        const minute  = data.getMinutes();
        const tims = new Date().toLocaleString();

        this.setState(prevState => ({
          error: false,
          date: tims,
          city: poj.name,
          sunrise: poj.sys.sunrise,
          sunset: poj.sys.sunset,
          temperature: poj.main.temp,
          pressure: poj.main.pressure,
          humidity: poj.main.humidity,
          windSpeed: poj.wind.speed * 10,
          clouds: poj.clouds.all,
          day,
          month ,
          year ,
          hour,
          minute ,
          tims
        }));
      });
  };

  render() {


    return (
      <>

       <div className="ViewStart__contener" >
       <div className="ViewStart__wrapper">
          <div className="ViewStart__color">
            <div className="ViewStart_city">
              <div className='search__city'>
                <input type="text" value={this.state.changeInput} onChange={(e) => this.setState({ changeInput: e.target.value })} />
                <button onClick={() => this.fetchApi()}>Wyszukaj</button>
              </div>
              <b>{this.state.city}</b>
            </div>
            <div className="ViewStart__pogoda">
              Pogoda teraz - dzisiaj godz:
              {this.state.hour < 10
                ? "0" + this.state.hour
                : this.state.hour} :
              {this.state.minute  < 10 ? "0" + this.state.minute  : this.state.minute }
            </div>
            <div className="ViewStart__temp">
              <div>
                Temperatura<p className="temperature">{Math.floor(this.state.temperature)}&#176;C</p>
              </div>
              <div>
                Ciśnienie <p className="temperature">{this.state.pressure} hPa</p>
              </div>
              <div>
                Wiatr: <p className="temperature">{Math.floor(this.state.windSpeed)} km/s</p>
              </div>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: `repeat(${this.state.windSpeed > 50 ? 3 : 2},1fr)`
              }}
              className="ViewStart__img"
            >

              {this.check()}
              {this.temperature()}
              {this.weather()}
            </div>


          </div>
          <AirQuality/>
        </div>
       
       </div>
        
      </>
    );
  }
}


export default Global;