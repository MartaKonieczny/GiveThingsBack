import React from 'react';
import LogRegi from "../LoginRegistration/LogRegi";
import Nav from "../Nav/Nav";
import {Link} from 'react-router-dom';

class LoggedOut extends React.Component{
    render(){
        return(
            <>
                <LogRegi/>
                <Nav/>
                <div className="logged-out">
                    <p>Wylogowanie nastąpiło <p>pomyślnie!</p></p>
                    <div className="ornament"></div>
                    <Link to="/"><button>Strona główna</button></Link>
                </div>
            </>

        )
    }
}

export default LoggedOut;