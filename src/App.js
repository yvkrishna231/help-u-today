import React, { Component, Fragment } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SecondPage from './projectcomponents/SecondPage';
import ThirdPage from './projectcomponents/ThirdPage';
import FirstPage from './projectcomponents/FirstPage';
import NavBar from './projectcomponents/NavBar';
import About from './projectcomponents/About';
import HelpCenter from './projectcomponents/HelpCenter';


class App extends Component {
  render() {
    return (
      <Fragment>
        <BrowserRouter>
          <NavBar />
          <Switch>
            <Route exact path='/' component={FirstPage} />
            <Route exact path='/SecondPage' component={SecondPage} />
            <Route exact path='/ThirdPage' component={ThirdPage} />
            <Route path='/about' component={About} />
            <Route path='/helpcenter' component={HelpCenter} />
          </Switch>
        </BrowserRouter>
      </Fragment>
    )
  }
}

export default App;