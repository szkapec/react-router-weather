import React, { Component } from 'react'
import './css/Footer.scss';
export default class Footer extends Component {
    render() {
        return (
            <footer>
                <div onClick={() => window.scrollTo(0, 0)} className="down"><i className="fa fa-angle-down"></i></div>

                   <div className="contact">
                        <a href="https://www.facebook.com/mateusz.kapron.50/"><i className="fab fa-facebook"></i></a>
                        <a href="https://www.linkedin.com/in/mateusz-kapro%C5%84-664b92197/"><i className="fab fa-linkedin"></i></a>  
                        <a href="https://www.youtube.com/channel/UCfDIy_8Ig3F_B1-CsNi2lQw?view_as=subscriber"><i className="fab fa-youtube"></i></a>
                        <a href="https://github.com/szkapec"><i className="fab fa-github"></i></a>
                        <a href="tel:+48661360889"><i className="fas fa-phone-alt"></i></a>
                        <a href="mailto:mateusz.kapron24@gmail.com"><i class="fas fa-envelope-open"></i></a>
                   </div>
                <div className="copy">© Copyright 2019 Mateusz Kaproń</div>
            </footer>
        )
    }
}
