import React from 'react';
import { Route, Switch, HashRouter} from 'react-router-dom';

import ViewCurrent from './Views/ViewCurrent/ViewCurrent';
import ViewStart from './Views/ViewStart/ViewStart';
import NavBar from './components/NavBar/NavBar';
import View5day from './Views/View5day/View5day';
import ViewImpurity from './Views/ViewImpurity/ViewImpurity';
import ViewMap from './Views/ViewMap/ViewMap';
import Footer from './components/Footer/Footer';
import './index.css';
class Root extends React.Component {
  state = {}

  render() {

    return(
      <>
      <HashRouter basename='/'>
          <NavBar/>
          <Switch>
            <Route exact path="/" component={ViewStart} /> 
            <Route path="/pogoda" component={ViewCurrent} /> 
            <Route path="/pogoda-5-dni" component={View5day} /> 
            <Route path="/zanieczyszczenia" component={ViewImpurity} /> 
            <Route path="/mapa-pogody" component={ViewMap} /> 
          </Switch>
          <Footer/>
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
