import React from 'react';
import './Suwak.scss';
class Suwak extends React.Component {

    state = {
        wartosc: 0,
    }

licz = () => {
    var currentValue = document.querySelector('#currentValue');
    var defaultSlider = document.querySelector('#defaultSlider')
    
    defaultSlider.addEventListener('change', ()=> {
     currentValue.innerHTML=defaultSlider.value
     this.props.onSubmit(defaultSlider.value)
        this.setState({
            wartosc: defaultSlider.value,
        })}
    )}
    componentDidMount() {
        this.licz()
    }

    render() {
        return (
            <>
    <section id="main">
        <input id="defaultSlider" type="range" min="0" max="24" />
        <div className='suwak__div'><div className="suwak_zegar">0:00</div></div>
        <div className='suwak__div3'><div className="suwak_zegar">3:00</div></div>
        <div className='suwak__div6'><div className="suwak_zegar">6:00</div></div>
        <div className='suwak__div9'><div className="suwak_zegar">9:00</div></div>
        <div className='suwak__div12'><div className="suwak_zegar">12:00</div></div>
        <div className='suwak__div15'><div className="suwak_zegar">15:00</div></div>
        <div className='suwak__div18'><div className="suwak_zegar">18:00</div></div>
        <div className='suwak__div21'><div className="suwak_zegar">21:00</div></div>
        <div className='suwak__div0'><div className="suwak_zegar">24:00</div></div>
        <span id="currentValue"></span> <u className="currentValue">:00</u> 
    </section>
    </>
        )
    }
}

    
export default Suwak;