import React from 'react';
import {Link} from 'react-router-dom';

class LogRegi extends React.Component{
    render(){
        return(
            <div className="log-regi">
                <Link to='/logowanie' className="log nav-item"><p>Zaloguj</p></Link>
                <Link to='/rejestracja' className="regi nav-item"><p>Załóż konto</p></Link>
                <p>Cześć mail</p>
                <Link to='/oddaj-rzeczy' className="logout nav-item"><p>Oddaj rzeczy</p></Link>
                <Link to='/wyloguj' className="logout nav-item"><p>Wyloguj</p></Link>
            </div>
        )
    }
}

export default LogRegi;