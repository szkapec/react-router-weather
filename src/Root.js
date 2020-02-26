import React from 'react';
import { Route, Switch, HashRouter} from 'react-router-dom';

import ViewCurrent from './Views/ViewCurrent/ViewCurrent';
import ViewStart from './Views/ViewStart/ViewStart';
import Header from './components/Header/Header';
import View5day from './Views/View5day/View5day';
import ViewZanieczyszczenie from './Views/ViewZanieczyszczenie/ViewZanieczyszczenie';
import ViewContact from './Views/ViewContact/ViewContact';
import ViewMap from './Views/ViewMap/ViewMap';
import './index.css';
class Root extends React.Component {
  state = {}

  render() {

    return(
      <>
      <HashRouter basename='/'>
          <Header/>
          <Switch>
            <Route exact path="/" component={ViewStart} /> 
            <Route path="/pogoda" component={ViewCurrent} /> 
            <Route path="/pogoda-5-dni" component={View5day} /> 
            <Route path="/zanieczyszczenia" component={ViewZanieczyszczenie} /> 
            <Route path="/mapa-pogody" component={ViewMap} /> 
            <Route path="/contact" component={ViewContact} /> 
            
          </Switch>
          {this.state.isModalOpen && (
            <>
            
            
            </>
          ) }
      </HashRouter>
      </>
    )
  }
}


export default Root;
