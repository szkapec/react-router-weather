import React from 'react';
import './ViewZanieczyszczenia.scss';
import Legenda from './Legenda/Legenda'

class ViewZanieczyszczenie extends React.Component {

    state = {
        wartosc: 'lublin',
        wynikZanieczyszczenia: '',
        miasto: '',
        co: '',
        no2: '',
        h: '',
        pm10: '',
        p: '',
    }


    wykonaj = (e) => {
    const apiZ = `https://api.waqi.info/feed/${e.target.value}/?token=604bf88ac675ce950ecc2b3ec3e958b809e4992c`
    // const apiZ = 'http://api.airvisual.com/v2/states?country=poland&key=304de6ec-4d43-445f-8ef3-2be4ce02f610'
    // api.airvisual.com/v2/cities?state=lublin&country=poland&key=304de6ec-4d43-445f-8ef3-2be4ce02f610
    // http://api.airvisual.com/v2/nearest_city?key=304de6ec-4d43-445f-8ef3-2be4ce02f610
    //http://api.airvisual.com/v2/states?country=poland&key=304de6ec-4d43-445f-8ef3-2be4ce02f610
    fetch(apiZ)
    .then(pojedynczy=> {
        if(pojedynczy.ok){
            return pojedynczy
        }
        throw Error("blad zanieczyszczenie")
    })
    .then(pojedynczy => pojedynczy.json())
    .then(pojedynczy => {
        console.log(pojedynczy.data)
        this.setState({
            wynikZanieczyszczenia: pojedynczy.data.aqi,
            miasto: pojedynczy.data.city.name,
            co: pojedynczy.data.iaqi.co.v,
            no2: pojedynczy.data.iaqi.no2.v,
            h: pojedynczy.data.iaqi.h.v,
            p: pojedynczy.data.iaqi.p.v,
        })
    })
}



fuk = () => {
    const {wynikZanieczyszczenia} = this.state; 
    if(wynikZanieczyszczenia>0&&wynikZanieczyszczenia<=50) return '#009966';
    else if(wynikZanieczyszczenia>=51&&wynikZanieczyszczenia<=100) return '#ffde33';
    else if(wynikZanieczyszczenia>=101&&wynikZanieczyszczenia<=150) return '#ff9933';
    else if(wynikZanieczyszczenia>=151&&wynikZanieczyszczenia<=200) return '#cc0033';
    else if(wynikZanieczyszczenia>=201&&wynikZanieczyszczenia<300) return '#660099'
    else if(wynikZanieczyszczenia>=300) return '#7e0023'
    else return '#a6c2e2'
}

    render() {

      const {wynikZanieczyszczenia,miasto,co, no2,h,pm10,p} = this.state;

       
        return (
            <>
            <div className="ViewZanieczyszczenia__contener">
        
                <div className="ViewZanieczyszczenia__tytul">Sprawdz zanieczyszczenia dla danego miasta</div>
                <div className="ViewZanieczyszczenia__ustawieniaSelecta">
                    <select className="ViewZanieczyszczenia__select-css" onChange={this.wykonaj} style={{margin: '15px', border:'1px solid black'}} name="nazwa">
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

                <div className="ViewZanieczyszczenia__renderowanie" style={{boxShadow: co&&'0px 0px 53px 7px #7ca2ce', backgroundColor: co&&'#7ca2ce'}} className="ViewZanieczyszczenia__wynik">
                    <div className="ViewZanieczyszczenia__wynik-miasto">{miasto&&miasto}</div>
                    <div style={{backgroundColor: this.fuk(),fontWeight: '700'}} className="ViewZanieczyszczenia__wynik-zanieczyszczenie">
                        {wynikZanieczyszczenia?wynikZanieczyszczenia:null}
                        <div>{wynikZanieczyszczenia>=300?' Niebezpieczny!': wynikZanieczyszczenia>=201? 'Bardzo niezdrowe' : wynikZanieczyszczenia>=151?'Niezdrowy': wynikZanieczyszczenia>=101?'Niezdrowy dla wrażliwych' : wynikZanieczyszczenia>=51?'Umiarkowany': wynikZanieczyszczenia>0&&wynikZanieczyszczenia<51 ? 'Dobry' : null}</div>
                    </div>
                    <div className="ViewZanieczyszczenia__wynik-CO">
                        <div> <b>{co&&`CO: ${co}`}</b></div>
                        <div><b>{no2&&`NO2: ${no2}`}</b></div>
                        <div> <b>{h&&`H: ${h}`}</b></div>
                        <div><b> {p&&`P: ${p}`}</b></div>
                        <div> <b>{pm10&&`PM10: ${pm10}`}</b></div>
                    </div>
                
                </div>
            {co&&<Legenda/>}

            </div>

            </>
            
        )
    }
} 

export default ViewZanieczyszczenie;