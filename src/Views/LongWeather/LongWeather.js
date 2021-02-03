import React from 'react';
import Days from './Days';
import Chatr from '../../components/Chart/Chart'
import '../../scss/LongWeather/LongWeather.scss';
import Global from '../Start/Global';

class LongWeather extends React.Component {
    state = {
        flaga: false,
        value5dni: '',
        temA: '',
        cisA: '',
        wiatryA: '',
        chA: '',
        wilgA: '',

        temB: '',
        cisB: '',
        wiatryB: '',
        chB: '',
        wilgB: '',

        temC: '',
        cisC: '',
        wiatryC: '',
        chC: '',
        wilgC: '',
        dataC: '',

        temD: '',
        cisD: '',
        wiatryD: '',
        chD: '',
        wilgD: '',
        dataD: '',

        temE: '',
        cisE: '',
        wiatryE: '',
        chE: '',
        wilgE: '',
        dataE: '',
    }

    index = 0;
    componentDidUpdate(prevProps, prevState) {
        if (this.state.value5dni !== prevState.value5dni) {
            if (this.state.value5dni.length < 3) return
            this.index = 0;
            const apiCurrent = `https://api.openweathermap.org/data/2.5/forecast?q=${this.state.value5dni}&appid=8c0ca88fe2b8fe6d6c954e8c13f95f86&units=metric`;
            fetch(apiCurrent)
                .then(item => {
                    if (item.ok) {
                        return item
                    }
                    throw Error("Niepoprawna miejscowosc")
                })
                .then(item => item.json())
                .then(item => {
                    for (var i = 0; i < 40; i++) {
                        let hour12 = item.list[i].dt_txt.substring(11, 19)
                        if (hour12 === "12:00:00") {
                            this.index++;
                            if (this.index === 1) {
                                this.setState({
                                    temA: item.list[0].main.temp,
                                    cisA: item.list[0].main.pressure,
                                    wiatryA: item.list[0].wind.speed,
                                    chA: item.list[0].clouds.all,
                                    wilgA: item.list[0].main.humidity,
                                })
                            }
                            if (this.index === 2) {
                                this.setState({
                                    temB: item.list[8].main.temp,
                                    cisB: item.list[8].main.pressure,
                                    wiatryB: item.list[8].wind.speed,
                                    chB: item.list[8].clouds.all,
                                    wilgB: item.list[8].main.humidity
                                })
                            }
                            if (this.index === 3) {
                                this.setState({
                                    temC: item.list[16].main.temp,
                                    cisC: item.list[16].main.pressure,
                                    wiatryC: item.list[16].wind.speed,
                                    chC: item.list[16].clouds.all,
                                    wilgC: item.list[16].main.humidity,
                                    dataC: item.list[16].dt_txt,

                                })
                            }
                            if (this.index === 4) {
                                this.setState({
                                    temD: item.list[24].main.temp,
                                    cisD: item.list[24].main.pressure,
                                    wiatryD: item.list[24].wind.speed,
                                    chD: item.list[24].clouds.all,
                                    wilgD: item.list[24].main.humidity,
                                    dataD: item.list[24].dt_txt,
                                })
                            }
                            if (this.index === 5) {
                                this.setState({
                                    temE: item.list[32].main.temp,
                                    cisE: item.list[32].main.pressure,
                                    wiatryE: item.list[32].wind.speed,
                                    chE: item.list[32].clouds.all,
                                    wilgE: item.list[32].main.humidity,
                                    dataE: item.list[32].dt_txt,
                                })
                            }

                        }
                    }

                })

                .catch(error => {
                    this.setState({
                        temA: '',
                        cisA: '',
                        wiatryA: '',
                        chA: '',
                        wilgA: '',
                        temB: '',
                        cisB: '',
                        wiatryB: '',
                        chB: '',
                        wilgB: '',
                        temC: '',
                        cisC: '',
                        wiatryC: '',
                        chC: '',
                        wilgC: '',
                        dataC: '',
                        temD: '',
                        cisD: '',
                        wiatryD: '',
                        chD: '',
                        wilgD: '',
                        dataD: '',
                        temE: '',
                        cisE: '',
                        wiatryE: '',
                        chE: '',
                        wilgE: '',
                        dataE: '',
                    })
                })
        }
    }



    changeInput = (e) => {
        this.setState({
            value5dni: e.target.value,
        })
    }
    render() {
        return (
            <>
                <Global />
                <div className="ViewCurrent__container">
                    <div className="description">Prognoza pogody na pięć dni</div>
                    <div className="ViewCurrent_input__miasto">
                        Podaj miasto: <input className="ViewCurrent_input__miasto_text" onChange={this.changeInput} type="text" placeholder="wpisz miasto"></input>
                    </div>
                    {this.state.wilgE && <div className="View5day__pogodaDla">Pogoda dla:  <div className="View5Day__znacznik">{this.state.value5dni}</div></div>}
                    <div className="piecDni__grid">{this.state.wilgE !== '' ? <Days all={this.state} /> : this.state.value5dni.length >= 4 ?
                        (<div className="ViewCurrent_wyswietlenieWarunkowe">Trwa Wyszukiwanie...</div>) : null}</div>

                    <div className="View5day__container_Chatr">
                        {this.state.wilgE && <Chatr all={this.state} legendPosition="top" titleText="Wykres temperatury dla 5 dni" displayTitle />}
                    </div>
                </div>
            </>
        )
    }
}

export default LongWeather;