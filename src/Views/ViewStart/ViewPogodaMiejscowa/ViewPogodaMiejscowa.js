import React from 'react';

const api = [
    `https://api.openweathermap.org/data/2.5/weather?q=wroclaw&APPID=8c0ca88fe2b8fe6d6c954e8c13f95f86&units=metric`,
    'https://api.openweathermap.org/data/2.5/weather?q=gdansk&APPID=8c0ca88fe2b8fe6d6c954e8c13f95f86&units=metric',
    'https://api.openweathermap.org/data/2.5/weather?q=zakopane&APPID=8c0ca88fe2b8fe6d6c954e8c13f95f86&units=metric',
]



class ViewPogodaMiejscowa extends React.Component {

    state = {
        miasto: '',
        temperatura: '',
        wilgotnosc: '',
        fetchG: [],
        fetchZ: [],
        fetchW: [],
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
                    else console.log("blad")
                })
        })}

    }

    render() {

        
        return (

            <> 
            <div style={{display:'grid', gridTemplateRows:'repeat(4,50px)', gridTemplateColumns: '1fr 100px 100px',
                border:'1px solid black'
            }}>
                <div>Miasto</div>
                <div>Max &#176;C</div>
                <div>Min &#176;C</div>    
                
                <div style={{borderTop: '1px solid black'}}>
                    <div className="viewPogoda__div" >{this.state.fetchW.name}
                    </div>
                </div>

                <div style={{borderTop: '1px solid black'}}>
                    <div>{this.state.fetchW.name ? this.state.fetchW.main.temp_max : null}&#176;C
                    </div>
                </div>

                <div style={{borderTop: '1px solid black'}}><div>{this.state.fetchW.name ? this.state.fetchW.main.temp_min : null}&#176;C </div></div>
        
                <div style={{borderTop: '1px solid black'}}><div  className="viewPogoda__div">{this.state.fetchZ.name}</div></div>
                <div style={{borderTop: '1px solid black'}}><div>{this.state.fetchZ.name ? this.state.fetchZ.main.temp_max : null}&#176;C</div> </div>
                <div style={{borderTop: '1px solid black'}}><div>{this.state.fetchZ.name ? this.state.fetchZ.main.temp_min : null}&#176;C</div> </div>
        
                <div style={{borderTop: '1px solid black'}}><div className="viewPogoda__div">{this.state.fetchG.name}</div></div>
                <div style={{borderTop: '1px solid black'}}><div>{this.state.fetchG.name ? this.state.fetchG.main.temp_max : null}&#176;C</div> </div>
                <div style={{borderTop: '1px solid black'}}><div>{this.state.fetchG.name ? this.state.fetchG.main.temp_min : null}&#176;C</div> </div>
        
            
            </div>

            </>
        )
    }
}


export default ViewPogodaMiejscowa;