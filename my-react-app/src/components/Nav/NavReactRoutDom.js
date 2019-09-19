import React from 'react';
import {Link} from 'react-router-dom';


class NavReactRoutDom extends React.Component{
    render(){
        return(
            <ul className="nav nav-react-rout-dom">
                <li className="nav-item"><Link to='/' className="link-start"><p>Start</p></Link></li>
                <li className="nav-item">O co chodzi?</li>
                <li className="nav-item">O nas</li>
                <li className="nav-item">Fundacja i organizacje</li>
                <li className="nav-item">Kontakt</li>
            </ul>
        )
    }
}

export default NavReactRoutDom;