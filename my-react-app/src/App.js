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


class App extends React.Component{
  render(){
    return(
        <section className='container' >
          <HashRouter>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/logowanie' component={LogIn} />
                <Route exact path='/rejestracja' component={Register} />
            </Switch>
          </HashRouter>
        </section>
    )
  }
}
export default App;
