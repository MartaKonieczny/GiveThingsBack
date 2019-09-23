import React from 'react';
import Home from './components/Home/Home.js'
import './scss/main.scss';

import {
  HashRouter,
  Route,
  Switch,
} from 'react-router-dom';
import Register from "./components/LoginRegistration/Register";
import LogIn from "./components/LoginRegistration/LogIn";
import LoggedOut from "./components/LoginRegistration/LoggedOut";
import GiveThings from "./components/GiveThings/GiveThings";


class App extends React.Component{
  render(){
    return(
        <section className='container' >
          <HashRouter>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/logowanie' component={LogIn} />
                <Route exact path='/rejestracja' component={Register} />
                <Route exact path='/wyloguj' component={LoggedOut} />
                <Route exact path='/oddaj-rzeczy' component={GiveThings} />
            </Switch>
          </HashRouter>
        </section>
    )
  }
}
export default App;
