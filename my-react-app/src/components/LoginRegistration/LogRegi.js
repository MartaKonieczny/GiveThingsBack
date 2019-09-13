import React from 'react';
import {Link} from 'react-router-dom';

class LogRegi extends React.Component{
    render(){
        return(
            <div className="log-regi">
                <Link to='/logowanie' className="log nav-item"><p>Zaloguj</p></Link>
                <Link to='/rejestracja' className="regi nav-item"><p>Załóż konto</p></Link>
            </div>
        )
    }
}

export default LogRegi;