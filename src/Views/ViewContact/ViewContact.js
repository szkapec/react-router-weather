import React from 'react';
import './viewContact.css'
const ViewContact = () => (
    <div className="ViewContact__contener">

        <h1 className="ViewContact__h2">Zapraszam do kontaktu</h1>

        <ul>
            <div className="ViewContact__ul">
                <li>Tel:</li><span>661-360-889</span>
                <li>Mail:</li> <span>mateusz.kapron24@gmail.com</span>
                <li>Github:</li> <span><a href="https://github.com/szkapec">Link</a></span>
                <li>Portfolio:</li> <span><a href="https://szkapec.github.io/portfolio/">Link</a></span>
                <li>Linkedin: </li> <span><a href="https://www.linkedin.com/in/mateusz-kapro%C5%84-664b92197/">Link</a></span>
            </div>

        </ul>
    </div>
)

export default ViewContact;