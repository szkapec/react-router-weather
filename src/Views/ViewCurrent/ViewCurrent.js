import React from 'react';
import Suwak from './Suwak/Suwak';
import WyswietlAll from './WyswietlAll/WyswietlAll'

class ViewCurrent extends React.Component {
    state= {
        wartoscSuwaka: '',
        flaga: false,
        miasto: 'Lublin',
        tempA: '',
        wilgotnoscA: '',
        opadyA: '',
        wiatrA: '',
        ktoraGodzinaA: '',
        cityA: '',
        zachmurzenieA: '',

        wilgotnoscB:'',
        opadyB: '',
        wiatrB: '',
        ktoraGodzinaB: '',
        zachmurzenieB: '',

        wilgotnoscC:'',
        opadyC: '',
        wiatrC: '',
        ktoraGodzinaC: '',
        zachmurzenieC: '',

        tempD: '',
        godzinaD: '',
        wiatrD:'',
        opadyD: '',
        wilgotnoscD: '',
    }
 

componentDidUpdate(prevProps,prevState) {
    if(this.state.miasto.length<3) return
    if(prevState.miasto!== this.state.miasto || prevState.wartoscSuwaka!==this.state.wartoscSuwaka){
       const apiCurrent = `https://api.openweathermap.org/data/2.5/forecast?q=${this.state.miasto}&appid=8c0ca88fe2b8fe6d6c954e8c13f95f86&units=metric`;
            fetch(apiCurrent)
            .then(pojedynczy => {
                if(pojedynczy.ok) {
                    return pojedynczy
                }
                throw Error("Blad")
            })
            .then(pojedynczy => pojedynczy.json())
            .then(pojedynczy => {
                let samaGodzinaA = pojedynczy.list[0].dt_txt.substring(11,19)
                let samaGodzinaB = pojedynczy.list[1].dt_txt.substring(11,19)
                let samaGodzinaC = pojedynczy.list[2].dt_txt.substring(11,19)


                for(var i=0; i<15;i++){
                    if(pojedynczy.list[i]){
                        let godzina = pojedynczy.list[i].dt_txt.substring(11,13);
                        if(this.state.wartoscSuwaka==24){
                            this.setState({
                                wartoscSuwaka: '00'
                            })
                        }
                        if(godzina===this.state.wartoscSuwaka||godzina===0+this.state.wartoscSuwaka){
                            this.setState({
                                tempD: pojedynczy.list[i].main.temp,
                                godzinaD: pojedynczy.list[i].dt_txt,
                                wilgotnoscD: pojedynczy.list[i].main.humidity,
                                opadyD: pojedynczy.list[i].clouds.all,
                                wiatrD: pojedynczy.list[i].wind.speed,
                                
                            })
                        }
                    }

                }
                

                    this.setState({
                        flaga: false,
                        tempA: pojedynczy.list[0].main.temp,
                        wilgotnoscA: pojedynczy.list[0].main.humidity,
                        opadyA: pojedynczy.list[0].clouds.all,
                        wiatrA: pojedynczy.list[0].wind.speed,
                        ktoraGodzinaA: samaGodzinaA,
                        cityA: pojedynczy.city.name,
                        zachmurzenieA: pojedynczy.list[0].clouds.all,
                        
                        tempB: pojedynczy.list[1].main.temp,
                        wilgotnoscB: pojedynczy.list[1].main.humidity,
                        opadyB: pojedynczy.list[1].clouds.all,
                        wiatrB: pojedynczy.list[1].wind.speed,
                        ktoraGodzinaB: samaGodzinaB,
                        zachmurzenieB: pojedynczy.list[1].clouds.all,

                        tempC: pojedynczy.list[2].main.temp,
                        wilgotnoscC: pojedynczy.list[2].main.humidity,
                        opadyC: pojedynczy.list[2].clouds.all,
                        wiatrC: pojedynczy.list[2].wind.speed,
                        ktoraGodzinaC: samaGodzinaC,
                        zachmurzenieC: pojedynczy.list[2].clouds.all,


                    })
                
            })
            .catch(error => {
                console.log(error+ 'error')
                this.setState({
                    flaga: true,
                    tempA: '',
                    wilgotnoscA: '',
                    opadyA: '',
                    wiatrA: '',
                    ktoraGodzinaA: '',
                    cityA:'',
                    
                    tempB:'',
                    wilgotnoscB:'',
                    opadyB: '',
                    wiatrB: '',
                    ktoraGodzinaB:'',

                    tempC:'',
                    wilgotnoscC:'',
                    opadyC: '',
                    wiatrC: '',
                    ktoraGodzinaC:'',
                })
            })
        }
        
    }

    changeInput = (e) => {
        this.setState({
            miasto: e.target.value,
        })
    }

    sprawdzWartoscSuwaka = (text) => {
        this.setState({
            wartoscSuwaka: text,
        })
    }
    render() {
        return (
            <>
            <div className="ViewCurrent__container">
                <div className="ViewCurrent_input__miasto">
                    Podaj miasto: <input className="ViewCurrent_input__miasto_text" onChange={this.changeInput} type="text" placeholder="wpisz miasto"></input>
                </div>
                <div>
                    {this.state.opadyA? <WyswietlAll props={this.state}/>: this.state.miasto.length>4 && this.state.miasto!='Lublin' ? 
                    (<div className="ViewCurrent_wyswietlenieWarunkowe">Trwa Wyszukiwanie...</div>) : null}
                    {this.state.opadyA?<Suwak onSubmit={this.sprawdzWartoscSuwaka}/>:null}
                </div>
            </div>
            </>
        )}} 

export default ViewCurrent;