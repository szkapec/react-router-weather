import React from 'react';

class ViewZanieczyszczenie extends React.Component {

    state = {
        wartosc: 'lublin',
    }


componentDidUpdate() {
    // const apiZ = 'http://api.airvisual.com/v2/countries?key=304de6ec-4d43-445f-8ef3-2be4ce02f610' //wszystkie panstwa
    // const apiZ = `http://api.airvisual.com/v2/cities?state=lublin&country=poland&key=304de6ec-4d43-445f-8ef3-2be4ce02f610`
    const apiZ = `http://api.gios.gov.pl/pjp-api/rest/station/findAll`
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
        console.log(pojedynczy)
    })
}
    changeOption = (e) => {
        console.log(e.target.value)
        this.setState({
            wartosc: e.target.value,
        })
    }
    render() {

      
        
       
        return (
            <>
                
                <div>Sprawdz zanieczyszczenia dla danego wojewodztwa</div>
                <select onChange={this.changeOption} style={{margin: '15px', border:'1px solid black'}} name="nazwa">
                    <option value="Lublin">Lubelskie</option>
                    <option value="Mazovia">mazowieckie</option>
                    <option value="Kujawsko-Pomorskie">Kujawsko-pomorskie</option>
                </select>
                {}
            </>
        )
    }
} 

export default ViewZanieczyszczenie;