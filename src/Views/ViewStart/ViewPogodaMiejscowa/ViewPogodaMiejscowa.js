import React from 'react';
import deszcz from '../../../assets/weather/009-rain-26.svg';
import zachmurzone from '../../../assets/weather/014-cloud-8.svg';
import przejasnienia from '../../../assets/weather/002-cloudy-13.svg';
import mroz from '../../../assets/weather/017-thermometer-7.svg';
import dodatniaTemp from '../../../assets/weather/024-thermometer-5.svg';
import slonce from '../../../assets/weather/013-sun-8.svg';
import './ViewPogodaMiejscowa.css';


const api = [
    `https://api.openweathermap.org/data/2.5/weather?q=wroclaw&APPID=8c0ca88fe2b8fe6d6c954e8c13f95f86&units=metric`,
    'https://api.openweathermap.org/data/2.5/weather?q=gdansk&APPID=8c0ca88fe2b8fe6d6c954e8c13f95f86&units=metric',
    'https://api.openweathermap.org/data/2.5/weather?q=zakopane&APPID=8c0ca88fe2b8fe6d6c954e8c13f95f86&units=metric',
    'https://api.openweathermap.org/data/2.5/weather?q=Poznan&APPID=8c0ca88fe2b8fe6d6c954e8c13f95f86&units=metric',
]



class ViewPogodaMiejscowa extends React.Component {

    state = {
        miasto: '',
        temperatura: '',
        wilgotnosc: '',
        fetchG: [],
        fetchZ: [],
        fetchW: [],
        fetchL: [],
    }


    componentWillMount() {
        this.wykonajA();
    }

  


    wykonajA = () => {
        {api.map(pojedynczy => {
            fetch(pojedynczy)
                .then(poj => {
                    if(poj.ok){
                        return poj;
                    }
                    throw Error("Bład")
                })
                .then(poj => poj.json())
                .then(poj => {
                    if(poj.name==="Wrocław")
                    {
                        this.setState({
                            fetchW: poj,
                        })
                    }
                    if(poj.name==="Gdańsk") {
                        this.setState({
                            fetchG: poj,
                        })
                    }
                    if(poj.name==='Zakopane'){
                        this.setState({
                            fetchZ: poj,
                        })
                    }
                    if(poj.name==="Poznań"){
                        this.setState({
                            fetchL: poj,
                        })
                    }
                    else console.log("blad")
                })
        })}}


    render() {

        
        return (

            <> 
            <div className="viewPogodaMiejscowa" style={{display:'grid', gridTemplateRows:'repeat(5,60px)',  gridTemplateColumns: '1fr 100px 100px 100px 100px',
                border:'1px solid black', backgroundColor:'rgb(166, 194, 226)'
            }}>
                <div className="viewPogoda__div opis">Miasto</div>
                <div className="opis">Max &#176;C</div>
                <div></div>
                <div className="opis">Min &#176;C</div>    
                <div></div>

                <div style={{borderTop: '1px solid black'}}><div className="viewPogoda__div" >{this.state.fetchW.name}</div></div>
                <div style={{borderTop: '1px solid black'}}><div>{this.state.fetchW.name ? this.state.fetchW.main.temp_max : null}&#176;C</div></div>
                <div className="ViewPogodaImagesDiv">
                {this.state.fetchW.name ? this.state.fetchW.main.humidity<70?<img className="viewPogodaImages" src={przejasnienia}/>:this.state.fetchW.main.humidity>70&&this.state.fetchW.clouds.all>70?
                <img className="viewPogodaImages" src={deszcz}/>: this.state.fetchW.clouds.all<40 ? <img src={slonce}/> : <img src={przejasnienia}/> :null} 
                </div>
                
                <div style={{borderTop: '1px solid black'}}><div>{this.state.fetchW.name ? this.state.fetchW.main.temp_min : null}&#176;C </div></div>
                <div className="ViewPogodaImagesDiv">{this.state.fetchW.name? this.state.fetchW.main.temp_min<0?<img className="viewPogodaImages" src={mroz}/> : <img className="viewPogodaImages" src={dodatniaTemp}/> : null}</div>



                <div style={{borderTop: '1px solid black'}}><div  className="viewPogoda__div">{this.state.fetchZ.name}</div></div>
                <div style={{borderTop: '1px solid black'}}><div>{this.state.fetchZ.name ? this.state.fetchZ.main.temp_max : null}&#176;C</div> </div>
                <div className="ViewPogodaImagesDiv">
                {this.state.fetchZ.name ? this.state.fetchZ.main.humidity<70?<img className="viewPogodaImages" src={przejasnienia}/>:this.state.fetchZ.main.humidity>70&&this.state.fetchZ.clouds.all>70?
                <img className="viewPogodaImages" src={deszcz}/>: this.state.fetchZ.clouds.all<40 ? <img src={slonce}/> : <img src={przejasnienia}/> :null} 
                </div>
                <div style={{borderTop: '1px solid black'}}><div>{this.state.fetchZ.name ? this.state.fetchZ.main.temp_min : null}&#176;C</div> </div>
                <div className="ViewPogodaImagesDiv">{this.state.fetchZ.name? this.state.fetchZ.main.temp_min<0?<img className="viewPogodaImages" src={mroz}/> : <img className="viewPogodaImages" src={dodatniaTemp}/> : null}</div>



                <div style={{borderTop: '1px solid black'}}><div className="viewPogoda__div">{this.state.fetchG.name}</div></div>
                <div style={{borderTop: '1px solid black'}}><div>{this.state.fetchG.name ? this.state.fetchG.main.temp_max : null}&#176;C</div> </div>
                <div className="ViewPogodaImagesDiv">
                {this.state.fetchG.name ? this.state.fetchG.main.humidity<70?<img className="viewPogodaImages" src={przejasnienia}/>:this.state.fetchG.main.humidity>70&&this.state.fetchG.clouds.all>70?
                <img className="viewPogodaImages" src={deszcz}/>: this.state.fetchG.clouds.all<40 ? <img src={slonce}/> : <img src={przejasnienia}/> :null} 
                </div>
                <div style={{borderTop: '1px solid black'}}><div>{this.state.fetchG.name ? this.state.fetchG.main.temp_min : null}&#176;C</div> </div>
                <div className="ViewPogodaImagesDiv">{this.state.fetchG.name? this.state.fetchG.main.temp_min<0?<img className="viewPogodaImages" src={mroz}/> : <img className="viewPogodaImages" src={dodatniaTemp}/> : null}</div>

                
                <div style={{borderTop: '1px solid black'}}><div className="viewPogoda__div">{this.state.fetchL.name}</div></div>
                <div style={{borderTop: '1px solid black'}}><div>{this.state.fetchL.name ? this.state.fetchL.main.temp_max : null}&#176;C</div> </div>
                <div className="ViewPogodaImagesDiv">
                {this.state.fetchL.name ? this.state.fetchL.main.humidity<70?<img className="viewPogodaImages" src={przejasnienia}/>:this.state.fetchL.main.humidity>70&&this.state.fetchL.clouds.all>70?
                <img className="viewPogodaImages" src={deszcz}/>: this.state.fetchL.clouds.all<40 ? <img src={slonce}/> : <img src={przejasnienia}/> :null} 
                </div>
                <div style={{borderTop: '1px solid black'}}><div>{this.state.fetchL.name ? this.state.fetchL.main.temp_min : null}&#176;C</div> </div>
                <div className="ViewPogodaImagesDiv">{this.state.fetchL.name? this.state.fetchL.main.temp_min<0?<img className="viewPogodaImages" src={mroz}/> : <img className="viewPogodaImages" src={dodatniaTemp}/> : null}</div>
               
            
            </div>

            </>
        )
    }
}


export default ViewPogodaMiejscowa;