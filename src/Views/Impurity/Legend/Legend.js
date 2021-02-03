import React from 'react';
import '../../../scss/Impurity/Table.scss';
const Legend = () => {

    return (
        <>
            <div className="container__table-h3">Informacje o jakości powietrza</div>
            <table className="container__table">
                <thead>
                    <tr>
                        <th >AQI</th>
                        <th>Poziom zanieczyszczenia</th>
                        <th>Implikacje zdrowotne</th>
                        <th>Ostrzeżenie dla MP2.5</th>
                    </tr>
                </thead >
                <tr style={{ backgroundColor: '#009966' }} className="container__table">
                    <th>0-50</th>
                    <th>Dobry</th>
                    <th>Jakość powietrza jest uważana za zadowalającą, a zanieczyszczenie powietrza stanowi niewielkie lub żadne ryzyko</th>
                    <th>Żaden</th>
                </tr>
                <tbody>
                    <tr style={{ backgroundColor: '#ffde33', border: '4px solid red' }}>
                        <th>51-100</th>
                        <th>Umiarkowany</th>
                        <th>	Jakość powietrza jest akceptowalna; jednak w przypadku niektórych substancji zanieczyszczających może wystąpić umiarkowane zagrożenie dla zdrowia bardzo małej liczby osób niezwykle wrażliwych na zanieczyszczenie powietrza.</th>
                        <th>Aktywne dzieci i dorośli oraz osoby z chorobami układu oddechowego</th>
                    </tr>
                    <tr style={{ backgroundColor: '#ff9933' }}>
                        <th>101–150</th>
                        <th>Niezdrowy dla wrażliwych grup</th>
                        <th>Członkowie wrażliwych grup mogą odczuwać skutki zdrowotne. Prawdopodobnie nie wpłynie to na ogół społeczeństwa.</th>
                        <th>Aktywne dzieci i dorośli oraz osoby z chorobami układu oddechowego</th>
                    </tr>
                    <tr style={{ backgroundColor: '#cc0033' }}>
                        <th>151–200</th>
                        <th>Niezdrowy</th>
                        <th>Każdy może zacząć odczuwać skutki zdrowotne; członkowie wrażliwych grup mogą doświadczyć poważniejszych skutków zdrowotnych</th>
                        <th>Aktywne dzieci i dorośli oraz osoby z chorobami układu oddechowego, takimi jak astma, powinny unikać przedłużonego wysiłku na świeżym powietrzu</th>
                    </tr>
                    <tr style={{ backgroundColor: '#660099' }}>
                        <th>201–300</th>
                        <th>Bardzo niezdrowe</th>
                        <th>Ostrzeżenia zdrowotne dotyczące stanów awaryjnych. Prawdopodobnie dotyczy to całej populacji.</th>
                        <th>Aktywne dzieci i dorośli oraz osoby z chorobami układu oddechowego, takimi jak astma, powinny unikać wszelkiego wysiłku na świeżym powietrzu</th>
                    </tr>
                </tbody>
                <tfoot>
                    <tr style={{ backgroundColor: '#7e0023' }}>
                        <th>300+</th>
                        <th>Niebezpieczny</th>
                        <th>Ostrzeżenie zdrowotne: każdy może doświadczyć poważniejszych skutków zdrowotnych</th>
                        <th>Każdy powinien unikać wszelkiego wysiłku na świeżym powietrzu</th>
                    </tr>
                </tfoot>
            </table>
        </>
    )
}

export default Legend;