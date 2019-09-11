import React from 'react';
import {Link} from 'react-router-dom';

class LogRegi extends React.Component{
    render(){
        return(
            <div>
                <Link to='/logowanie'>Zaloguj</Link>
                <Link to='/rejestracja'>Załóż konto</Link>
            </div>
        )
    }
}

export default LogRegi;