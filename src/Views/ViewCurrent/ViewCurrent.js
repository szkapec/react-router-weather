import React from 'react';
import Slide from './Slide/Slide';
import ViewsAll from './ViewsAll/ViewsAll';
import Chart from '../../components/Chart/Chart';
import Global from '../ViewStart/Global';
class ViewCurrent extends React.Component {
    state= {
        wartoscSuwaka: '',
        flaga: false,
        miasto: 'Lublin',
        temA: '',
        wilgotnoscA: '',
        opadyA: '',
        wiatrA: '',
        ktoraGodzinaA: '',
        cityA: '',
        zachmurzenieA: '',

        wilgotnoscB:'',
        temB: '',
        opadyB: '',
        wiatrB: '',
        ktoraGodzinaB: '',
        zachmurzenieB: '',

        temC: '',
        wilgotnoscC:'',
        opadyC: '',
        wiatrC: '',
        ktoraGodzinaC: '',
        zachmurzenieC: '',

        temD: '',
        godzinaD: '',
        wiatrD:'',
        opadyD: '',
        wilgotnoscD: '',

        valueD: [],
        ktoraGodzinaD: '',
    }
 
componentDidMount(){
    window.scrollTo(0, 0);
}

componentDidUpdate(prevProps,prevState) {
    if(this.state.miasto.length<3) return
    if(prevState.miasto!== this.state.miasto || prevState.wartoscSuwaka!==this.state.wartoscSuwaka){
       const apiCurrent = `https://api.openweathermap.org/data/2.5/forecast?q=${this.state.miasto}&appid=8c0ca88fe2b8fe6d6c954e8c13f95f86&units=metric`;
            fetch(apiCurrent)
            .then(item => {
                if(item.ok) {
                    return item
                }
                throw Error("Blad")
            })
            .then(item => item.json())
            .then(item => {
                let samaGodzinaA = item.list[0].dt_txt.substring(11,19)
                let samaGodzinaB = item.list[1].dt_txt.substring(11,19)
                let samaGodzinaC = item.list[2].dt_txt.substring(11,19)
                let samaGodzinaD = item.list[3].dt_txt.substring(11,19)
              //12
                for(var i=0; i<10;i++){
                    if(item.list[i]){
                        let godzina = item.list[i].dt_txt.substring(11,13);
                        
                        if(this.state.wartoscSuwaka==='1')
                        {
                            this.setState({
                                wartoscSuwaka: '0'
                            })
                        }
                        
                        else if(this.state.wartoscSuwaka==='2'||this.state.wartoscSuwaka==='4')
                        {
                            this.setState({
                                wartoscSuwaka: '3'
                            })
                        }
                        else if(this.state.wartoscSuwaka==='5'||this.state.wartoscSuwaka==='7') this.setState({wartoscSuwaka: '6'})
                        else if(this.state.wartoscSuwaka==='8'||this.state.wartoscSuwaka==='10') this.setState({wartoscSuwaka: '9'})
                        else if(this.state.wartoscSuwaka==='11'||this.state.wartoscSuwaka==='13') this.setState({wartoscSuwaka: '12'})
                        else if(this.state.wartoscSuwaka==='14'||this.state.wartoscSuwaka==='16') this.setState({wartoscSuwaka: '15'})
                        else if(this.state.wartoscSuwaka==='17'||this.state.wartoscSuwaka==='19') this.setState({wartoscSuwaka: '18'})
                        else if(this.state.wartoscSuwaka==='20'||this.state.wartoscSuwaka==='22') this.setState({wartoscSuwaka: '21'})
                        else if(this.state.wartoscSuwaka==='23'||this.state.wartoscSuwaka==='00') this.setState({wartoscSuwaka: '24'})
                        

                        if(godzina===this.state.wartoscSuwaka||godzina===0+this.state.wartoscSuwaka){
                            this.setState({
                                temD: item.list[i].main.temp,
                                godzinaD: item.list[i].dt_txt,
                                wilgotnoscD: item.list[i].main.humidity,
                                opadyD: item.list[i].clouds.all,
                                wiatrD: item.list[i].wind.speed,
                                
                            })
                        }
                    }

                }
                

                    this.setState({
                        flaga: false,
                        temA: item.list[0].main.temp,
                        wilgotnoscA: item.list[0].main.humidity,
                        opadyA: item.list[0].clouds.all,
                        wiatrA: item.list[0].wind.speed,
                        ktoraGodzinaA: samaGodzinaA,
                        cityA: item.city.name,
                        zachmurzenieA: item.list[0].clouds.all,
                        
                        temB: item.list[1].main.temp,
                        wilgotnoscB: item.list[1].main.humidity,
                        opadyB: item.list[1].clouds.all,
                        wiatrB: item.list[1].wind.speed,
                        ktoraGodzinaB: samaGodzinaB,
                        zachmurzenieB: item.list[1].clouds.all,

                        temC: item.list[2].main.temp,
                        wilgotnoscC: item.list[2].main.humidity,
                        opadyC: item.list[2].clouds.all,
                        wiatrC: item.list[2].wind.speed,
                        ktoraGodzinaC: samaGodzinaC,
                        zachmurzenieC: item.list[2].clouds.all,

                        valueD: item.list,
                        ktoraGodzinaD:  samaGodzinaD,
                    })
                
            })
            .catch(error => {
                this.setState({
                    flaga: true,
                    temA: '',
                    wilgotnoscA: '',
                    opadyA: '',
                    wiatrA: '',
                    ktoraGodzinaA: '',
                    cityA:'',
                    
                    temB:'',
                    wilgotnoscB:'',
                    opadyB: '',
                    wiatrB: '',
                    ktoraGodzinaB:'',

                    temC:'',
                    wilgotnoscC:'',
                    opadyC: '',
                    wiatrC: '',
                    ktoraGodzinaC:'',

                    valueC: [],
                })
            })
        }
        
    }

    changeInput = (e) => {
        this.setState({
            miasto: e.target.value,
        })
    }

    valueSlide = (text) => {
     
        this.setState({
            wartoscSuwaka: text,
        })
    }
    render() {
        return (
            <>
            <Global/>
            <div className="ViewCurrent__container">
                <div className="ViewCurrent__info">
                    <div className="description">Godzinna prognoza pogody</div>
                    <div className="ViewCurrent_input__miasto">
                        Podaj miasto: <input className="ViewCurrent_input__miasto_text" onChange={this.changeInput}  type="text" placeholder="wpisz miasto"></input>
                    </div>
                </div>
                    {this.state.opadyA? <ViewsAll props={this.state}/>: this.state.miasto.length>4 && this.state.miasto!=='Lublin' ? 
                    (<div className="ViewCurrent_wyswietlenieWarunkowe">Trwa Wyszukiwanie...</div>) : null}
                    {this.state.opadyA?<Slide onSubmit={this.valueSlide}/>:null}
                    
            </div>
            </>
        )}} 

export default ViewCurrent;