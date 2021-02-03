import React from 'react';
import rain from '../../../assets/new/rain.svg';
import shadows from '../../../assets/new/shadow.svg'
import frost from '../../../assets/weather/017-thermometer-7.svg';
import tempPositive from '../../../assets/weather/024-thermometer-5.svg';
import sun from '../../../assets/new/sun.svg';
import '../../../scss/Start/LocalWeather.scss';
import '../../../scss/Start/Start.scss';
const api = [
    `https://api.openweathermap.org/data/2.5/weather?q=wroclaw&APPID=8c0ca88fe2b8fe6d6c954e8c13f95f86&units=metric`,
    'https://api.openweathermap.org/data/2.5/weather?q=gdansk&APPID=8c0ca88fe2b8fe6d6c954e8c13f95f86&units=metric',
    'https://api.openweathermap.org/data/2.5/weather?q=zakopane&APPID=8c0ca88fe2b8fe6d6c954e8c13f95f86&units=metric',
    'https://api.openweathermap.org/data/2.5/weather?q=Poznan&APPID=8c0ca88fe2b8fe6d6c954e8c13f95f86&units=metric',
    'https://api.openweathermap.org/data/2.5/weather?q=Zamość&APPID=8c0ca88fe2b8fe6d6c954e8c13f95f86&units=metric',
    'https://api.openweathermap.org/data/2.5/weather?q=Gdynia&APPID=8c0ca88fe2b8fe6d6c954e8c13f95f86&units=metric',
]

class LocalWeather extends React.Component {

    state = {
        fetchG: [],
        fetchZ: [],
        fetchW: [],
        fetchL: [],
        fetchZa: [],
        fetchGd: [],
    }

    componentWillMount() {
        this.fetchApi();
    }
    fetchApi = () => {
        {
            api.map(item => {
                fetch(item)
                    .then(item => {
                        if (item.ok) {
                            return item;
                        }
                        throw Error("Bład")
                    })
                    .then(item => item.json())
                    .then(item => {
                        if (item.name === "Wrocław") {
                            this.setState({
                                fetchW: item,
                            })
                        }
                        if (item.name === "Gdańsk") {
                            this.setState({
                                fetchG: item,
                            })
                        }
                        if (item.name === 'Zakopane') {
                            this.setState({
                                fetchZ: item,
                            })
                        }
                        if (item.name === "Poznań") {
                            this.setState({
                                fetchL: item,
                            })
                        }
                        if (item.name === "Zamość") {
                            this.setState({
                                fetchZa: item,
                            })
                        }
                        if (item.name === "Gdynia") {
                            this.setState({
                                fetchGd: item,
                            })
                        }
                        else console.log("Niepoprawna miejscowość")
                    })
            })
        }
    }

    render() {
        return (
            <>
                <h3 className="today-weather">POGODA NA DZIŚ</h3>
                <div className="viewPogodaMiejscowa" >
                    <div className="view-container-weather"><div className="viewPogoda__div"><b>Miasto</b></div></div>
                    <div className="border"><b>Prognoza</b></div>
                    <div className="weather-none"><b>Ciśnienie</b></div>
                    <div className="weather-none"><b>Siła wiatru</b></div>
                    <div className="border"><b>Max &#176;C</b></div> 
                    <div className="border" style={{ borderRight: "2px solid #f8f8f8" }}><b>+/-</b></div>
                    <div className="view-container-weather"><div className="viewPogoda__div" >{this.state.fetchW.name}</div></div>
                    <div className="ViewPogodaImagesDiv">
                        {this.state.fetchW.name ? this.state.fetchW.main.humidity < 70 ?
                            <img className="viewPogodaImages" alt="shadows" src={shadows} /> :
                            this.state.fetchW.main.humidity > 70 && this.state.fetchW.clouds.all > 70 ?
                                <img className="viewPogodaImages" alt="rain" src={rain} /> :
                                this.state.fetchW.clouds.all < 40 ?
                                    <img className="viewPogodaImages" alt="rain" src={sun} /> :
                                    <img className="viewPogodaImages" alt="przejsanienia" src={shadows} /> : null}
                    </div>
                    <div className="weather-none">{this.state.fetchGd.name && this.state.fetchGd.main.pressure}hPa</div>
                    <div className="weather-none">{this.state.fetchGd.name && this.state.fetchGd.wind.speed}km/h</div>
                    <div className="border">
                        <div>  {this.state.fetchW.name && this.state.fetchW.main.temp_max}&#176;C</div>
                    </div>
                    <div className="ViewPogodaImagesDiv end">{this.state.fetchW.name ? this.state.fetchW.main.temp_min < 0 ? <img className="viewPogodaImages" alt="frost" src={frost} /> : <img className="viewPogodaImages" alt="dodatnia" src={tempPositive} /> : null}</div>


                    <div className="view-container-weather"><div className="viewPogoda__div">{this.state.fetchZ.name}</div></div>
                    <div className="ViewPogodaImagesDiv">
                        {this.state.fetchZ.name ? this.state.fetchZ.main.humidity < 70 ? <img alt="shadows" className="viewPogodaImages" src={shadows} /> : this.state.fetchZ.main.humidity > 70 && this.state.fetchZ.clouds.all > 70 ?
                            <img className="viewPogodaImages" alt="rain" src={rain} /> : this.state.fetchZ.clouds.all < 40 ? <img className="viewPogodaImages" alt="sun" src={sun} /> : <img alt="shadows" className="viewPogodaImages" src={shadows} /> : null}
                    </div>
                    <div className="weather-none">{this.state.fetchGd.name && this.state.fetchGd.main.pressure}hPa</div>
                    <div className="weather-none">{this.state.fetchGd.name && this.state.fetchGd.wind.speed}km/h</div>
                    <div className="border"><div>{this.state.fetchZ.name ? this.state.fetchZ.main.temp_max : null}&#176;C</div> </div>
                    <div className="ViewPogodaImagesDiv end">{this.state.fetchZ.name ? this.state.fetchZ.main.temp_min < 0 ? <img alt="frost" className="viewPogodaImages" src={frost} /> : <img className="viewPogodaImages" alt="dodatnia" src={tempPositive} /> : null}</div>



                    <div className="view-container-weather"><div className="viewPogoda__div">{this.state.fetchG.name}</div></div>
                    <div className="ViewPogodaImagesDiv">
                        {this.state.fetchG.name ? this.state.fetchG.main.humidity < 70 ? <img alt="shadows" className="viewPogodaImages" src={shadows} /> : this.state.fetchG.main.humidity > 70 && this.state.fetchG.clouds.all > 70 ?
                            <img className="viewPogodaImages" alt="rain" src={rain} /> : this.state.fetchG.clouds.all < 40 ? <img className="viewPogodaImages" alt="sun" src={sun} /> : <img className="viewPogodaImages" alt="tezchyba" className="viewPogodaImages" src={shadows} /> : null}
                    </div>
                    <div className="weather-none">{this.state.fetchGd.name && this.state.fetchGd.main.pressure}hPa</div>
                    <div className="weather-none">{this.state.fetchGd.name && this.state.fetchGd.wind.speed}km/h</div>
                    <div className="border"><div>{this.state.fetchG.name ? this.state.fetchG.main.temp_max : null}&#176;C</div> </div>
                    <div className="ViewPogodaImagesDiv end">{this.state.fetchG.name ? this.state.fetchG.main.temp_min < 0 ? <img alt="frost" className="viewPogodaImages" src={frost} /> : <img alt="dodatnia" className="viewPogodaImages" src={tempPositive} /> : null}</div>


                    <div className="view-container-weather"><div className="viewPogoda__div">{this.state.fetchL.name}</div></div>
                    <div className="ViewPogodaImagesDiv">
                        {this.state.fetchL.name ? this.state.fetchL.main.humidity < 70 ? <img alt="shadows" className="viewPogodaImages" src={shadows} /> : this.state.fetchL.main.humidity > 70 && this.state.fetchL.clouds.all > 70 ?
                            <img className="viewPogodaImages" alt="rain" src={rain} /> : this.state.fetchL.clouds.all < 40 ? <img alt="sun" className="viewPogodaImages" src={sun} /> : <img alt="shadows" className="viewPogodaImages" src={shadows} /> : null}
                    </div>
                    <div className="weather-none">{this.state.fetchGd.name && this.state.fetchGd.main.pressure}hPa</div>
                    <div className="weather-none"> {this.state.fetchGd.name && this.state.fetchGd.wind.speed}km/h</div>
                    <div className="border"><div>{this.state.fetchL.name ? this.state.fetchL.main.temp_max : null}&#176;C</div> </div>
                    <div className="ViewPogodaImagesDiv end">{this.state.fetchL.name ? this.state.fetchL.main.temp_min < 0 ? <img alt="frost" className="viewPogodaImages" src={frost} /> : <img alt="tempPositive" className="viewPogodaImages" src={tempPositive} /> : null}</div>


                    <div className="view-container-weather"><div className="viewPogoda__div">{this.state.fetchZa.name}</div></div>
                    <div className="ViewPogodaImagesDiv">
                        {this.state.fetchZa.name ? this.state.fetchZa.main.humidity < 70 ? <img alt="shadows" className="viewPogodaImages" src={shadows} /> : this.state.fetchZa.main.humidity > 70 && this.state.fetchZa.clouds.all > 70 ?
                            <img className="viewPogodaImages" alt="rain" src={rain} /> : this.state.fetchZa.clouds.all < 40 ? <img alt="sun" className="viewPogodaImages" src={sun} /> : <img alt="shadows" className="viewPogodaImages" src={shadows} /> : null}
                    </div>
                    <div className="weather-none">{this.state.fetchGd.name && this.state.fetchGd.main.pressure}hPa</div>
                    <div className="weather-none">{this.state.fetchGd.name && this.state.fetchGd.wind.speed}km/h</div>
                    <div className="border"><div>{this.state.fetchZa.name ? this.state.fetchZa.main.temp_max : null}&#176;C</div> </div>
                    <div className="ViewPogodaImagesDiv end">{this.state.fetchZa.name ? this.state.fetchZa.main.temp_min < 0 ? <img alt="frost" className="viewPogodaImages" src={frost} /> : <img alt="tempPositive" className="viewPogodaImages" src={tempPositive} /> : null}</div>


                    <div className="view-container-weather"><div className="viewPogoda__div">{this.state.fetchGd.name}</div></div>
                    <div className="ViewPogodaImagesDiv">
                        {this.state.fetchGd.name ? this.state.fetchGd.main.humidity < 70 ? <img alt="shadows" className="viewPogodaImages" src={shadows} /> : this.state.fetchGd.main.humidity > 70 && this.state.fetchGd.clouds.all > 70 ?
                            <img className="viewPogodaImages" alt="rain" src={rain} /> : this.state.fetchGd.clouds.all < 40 ? <img alt="sun" className="viewPogodaImages" src={sun} /> : <img alt="shadows" className="viewPogodaImages" src={shadows} /> : null}
                    </div>
                    <div className="weather-none">{this.state.fetchGd.name && this.state.fetchGd.main.pressure}hPa</div>
                    <div className="weather-none">{this.state.fetchGd.name && this.state.fetchGd.wind.speed}km/h</div>
                    <div className="border"><div>{this.state.fetchGd.name ? this.state.fetchGd.main.temp_max : null}&#176;C</div> </div>
                    <div className="ViewPogodaImagesDiv end">{this.state.fetchGd.name ? this.state.fetchGd.main.temp_min < 0 ? <img alt="frost" className="viewPogodaImages" src={frost} /> : <img alt="tempPositive" className="viewPogodaImages" src={tempPositive} /> : null}</div>

                </div>

            </>
        )
    }
}


export default LocalWeather;