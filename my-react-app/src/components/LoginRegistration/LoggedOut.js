import React from 'react';
import LogRegi from "../LoginRegistration/LogRegi";

import {Link} from 'react-router-dom';
import NavReactRoutDom from "../Nav/NavReactRoutDom";

class LoggedOut extends React.Component{
    render(){
        return(
            <>
                <LogRegi/>
                <NavReactRoutDom/>
                <div className="logged-out">
                    <div><p>Wylogowanie nastąpiło</p><p>pomyślnie!</p></div>
                    <div className="ornament"></div>
                    <Link to="/"><button>Strona główna</button></Link>
                </div>
            </>

        )
    }
}

export default LoggedOut;