import React from "react";
import LocalWeather from "./LocalWeather/LocalWeather";
import '../../scss/Start/Start.scss';
import Global from './Global';

class Start extends React.Component {
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
        <LocalWeather/>
      </div>
    );
  }
}

export default Start;
