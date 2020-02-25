import React from 'react';
import './Suwak.css';
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
        <p className="note">Obecna wartość: <span id="currentValue"></span></p>
    </section>
    </>
        )
    }
}

    
export default Suwak;