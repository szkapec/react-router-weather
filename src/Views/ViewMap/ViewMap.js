import React from 'react';
import './ViewMap.scss';

const ViewMap = () => (
    <div className="ViewMap__contener">
    

        <div className="ViewMap__grid">
            <div className="ViewMap__grid-calosc">
                <div className="ViewMap__chmury">Chmury</div>
                    <ul className="ViewMap__grid-ul">
                        <li><span>Nazwa warstwy: nowe chmury</span></li>
                        <li><span>Obszar na całym świecie</span></li>
                    </ul>
                <button  className="ViewMap__grid-button"><a href="https://openweathermap.org/weathermap?basemap=map&cities=false&layer=clouds&lat=30&lon=-20&zoom=3">Podgląd mapy pogody</a></button>
            </div>
        <div className="ViewMap__grid-img"><img src="https://tile.openweathermap.org/map/precipitation/1/1/1.png?appid=8c0ca88fe2b8fe6d6c954e8c13f95f86" alt="Pierwsza mapa"></img></div>


        
            <div className="ViewMap__grid-calosc">
            <div className="ViewMap__chmury">Opady atmosferyczne</div>
                    <ul className="ViewMap__grid-ul">
                        <li><span>Nazwa warstwy: nowe opady</span></li>
                        <li><span>Obszar na całym świecie</span></li>
                   </ul>
             <button className="ViewMap__grid-button"><a href="https://openweathermap.org/weathermap?basemap=map&cities=false&layer=precipitation&lat=30&lon=-20&zoom=3">Podgląd mapy pogody</a></button>
        </div>
        <div className="ViewMap__grid-img"><img src="https://tile.openweathermap.org/map/precipitation/1/1/0.png?appid=8c0ca88fe2b8fe6d6c954e8c13f95f86" alt="Druga mapa"></img></div>

        

            <div className="ViewMap__grid-calosc">
                <div className="ViewMap__chmury">Ciśnienie na poziomie morza</div>
                    <ul className="ViewMap__grid-ul">
                        <li><span>Nazwa warstwy: nowe ciśnienie na morzu</span></li>
                        <li><span>Obszar na całym świecie</span></li>
                    </ul>
                <button className="ViewMap__grid-button"><a href="https://openweathermap.org/weathermap?basemap=map&cities=false&layer=pressure&lat=30&lon=-20&zoom=3">Podgląd mapy pogody</a></button>
        </div>
        <div className="ViewMap__grid-img"><img src="https://tile.openweathermap.org/map/precipitation/1/0/0.png?appid=8c0ca88fe2b8fe6d6c954e8c13f95f86" alt="Trzecia mapa"></img></div>


            <div className="ViewMap__grid-calosc">
                <div className="ViewMap__chmury">Prędkość wiatru</div>
                <ul className="ViewMap__grid-ul">
                    <li><span>Nazwa warstwy: nowe wiatry</span></li>
                    <li><span>Obszar na całym świecie</span></li>
                </ul>
            <button className="ViewMap__grid-button"><a href="https://openweathermap.org/weathermap?basemap=map&cities=false&layer=windspeed&lat=30&lon=-20&zoom=3">Podgląd mapy pogody</a></button>
        </div>
        <div className="ViewMap__grid-img"><img src="https://tile.openweathermap.org/map/precipitation/0/0/0.png?appid=8c0ca88fe2b8fe6d6c954e8c13f95f86" alt="Czwarta mapa"></img></div>
    </div>
</div>
)

export default ViewMap;