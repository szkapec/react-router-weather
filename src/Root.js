import React from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom';
import Current from './Views/Current/Current';
import Start from './Views/Start/ViewStart';
import NavBar from './components/NavBar/NavBar';
import LongWeather from './Views/LongWeather/LongWeather';
import ViewImpurity from './Views/Impurity/Impurity';
import ViewMap from './Views/Maps/Maps';
import Footer from './components/Footer/Footer';
import './scss/index.scss';
import Default from './components/NavBar/Default';

const Root = () => {
  return (
    <HashRouter basename='/'>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Start} />
        <Route path="/pogoda" component={Current} />
        <Route path="/pogoda-5-dni" component={LongWeather} />
        <Route path="/zanieczyszczenia" component={ViewImpurity} />
        <Route path="/mapa-pogody" component={ViewMap} />
        <Route component={Default} />
      </Switch>
      <Footer />
    </HashRouter>
  )
}

export default Root;
