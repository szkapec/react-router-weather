import React from 'react';
import '../../scss/Impurity/Impurity.scss';
import Legenda from './Legend/Legend'
import Global from '../Start/Global';

class Impurity extends React.Component {

    state = {
        scopeImpurity: '',
        city: '',
        co: '',
        no2: '',
        h: '',
        pm10: '',
        p: '',
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    dataFromAPi = (e) => {
        const apiZ = `https://api.waqi.info/feed/${e.target.value}/?token=604bf88ac675ce950ecc2b3ec3e958b809e4992c`
        fetch(apiZ)
            .then(item => {
                if (item.ok) {
                    return item
                }
                throw Error("blad przesyłu danych")
            })
            .then(item => item.json())
            .then(item => {
                this.setState({
                    scopeImpurity: item.data.aqi,
                    city: item.data.city.name,
                    co: item.data.iaqi.co.v,
                    no2: item.data.iaqi.no2.v,
                    h: item.data.iaqi.h.v,
                    p: item.data.iaqi.p.v,
                })
            })
    }

    impurity = () => {
        const { scopeImpurity } = this.state;
        if (!scopeImpurity) return 'white';
        if (scopeImpurity > 0 && scopeImpurity <= 50) return '#009966';
        else if (scopeImpurity >= 51 && scopeImpurity <= 100) return '#ffde33';
        else if (scopeImpurity >= 101 && scopeImpurity <= 150) return '#ff9933';
        else if (scopeImpurity >= 151 && scopeImpurity <= 200) return '#cc0033';
        else if (scopeImpurity >= 201 && scopeImpurity < 300) return '#660099'
        else if (scopeImpurity >= 300) return '#7e0023'
        else return '#a6c2e2'
    }

    render() {

        const { scopeImpurity, city, co, no2, h, pm10, p } = this.state;


        return (
            <>
                <Global />
                <div className="ViewImpurity__container">

                    <div className="ViewImpurity__title">Sprawdz jakość powietrza dla danego miasta</div>
                    <div className="ViewImpurity__select">
                        <select className="ViewImpurity__select-css" onChange={this.dataFromAPi} style={{ margin: '15px', border: '1px solid black' }} name="nazwa">
                            <option value="">Wybierz miasto</option>
                            <option value="Lublin">Lublin</option>
                            <option value="Warszawa">Warszawa</option>
                            <option value="gdansk">Gdańsk</option>
                            <option value="wroclaw">Wrocław</option>
                            <option value="Gdynia">Gdynia</option>
                            <option value="krakow">Kraków</option>
                            <option value="poznan">Poznań</option>
                            <option value="zakopane">Zakopane</option>
                            <option value="Bangalore">Bangalore</option>
                        </select>
                    </div>

                    <div className="ViewImpurity__rendering" style={{ boxShadow: co && '0 1px 1px 0 rgba(0,0,0,.06),0 2px 5px 0 rgba(0,0,0,.2)' }} className="ViewImpurity__scope">
                        <div className="ViewImpurity__scope-city">{city && city}</div>
                        <div style={{ backgroundColor: this.impurity(), fontWeight: '700' }} className="ViewImpurity__scope-impurity">
                            {scopeImpurity ? scopeImpurity : null}
                            <div>{scopeImpurity >= 300 ? ' Niebezpieczny!' : scopeImpurity >= 201 ? 'Bardzo niezdrowe' : scopeImpurity >= 151 ? 'Niezdrowy' : scopeImpurity >= 101 ? 'Niezdrowy dla wrażliwych' : scopeImpurity >= 51 ? 'Umiarkowany' : scopeImpurity > 0 && scopeImpurity < 51 ? 'Dobry' : null}</div>
                        </div>
                        <div className="ViewImpurity__scope-CO">
                            {co && <><div> <b>{co && `CO: ${co}`}</b></div>
                                <div><b>{no2 && `NO2: ${no2}`}</b></div>
                                <div> <b>{h && `H: ${h}`}</b></div>
                                <div><b> {p && `P: ${p}`}</b></div></>}

                        </div>

                    </div>
                    {co && <Legenda />}

                </div>

            </>

        )
    }
}

export default Impurity;