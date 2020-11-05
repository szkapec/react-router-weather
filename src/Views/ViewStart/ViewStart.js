import React from "react";
import LocalWeather from "./LocalWeather/LocalWeather";
import "./scss/viewStart.scss";
import Global from './Global';
import AirQuality from './AirQuality/AirQuality';


class ViewStart extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0);
    this.geolocation(); 
  }

 
  geolocation = () => {
    fetch('https://api.ipify.org?format=json')
    .then(res=> console.log(res))
}


  render() {
    return ( 
      <div className="ViewStart__contener">
        <Global/>
        <AirQuality/>
        <LocalWeather/>

      </div>
    );
  }
}

export default ViewStart;
