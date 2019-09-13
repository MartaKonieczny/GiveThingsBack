import React from 'react';
import { Link } from 'react-scroll'

class Nav extends React.Component{
    render(){
        return(
            <ul className="nav">
                <li className="nav-item"><Link to='home'>Start</Link></li>
                <li className="nav-item"><Link to='o-co-chodzi'>O co chodzi?</Link></li>
                <li className="nav-item"><Link to='o-nas'>O nas</Link></li>
                <li className="nav-item"><Link to='fundacja-organizacje'>Fundacja i organizacje</Link></li>
                <li className="nav-item"><Link to='kontakt'>Kontakt</Link></li>
            </ul>
        )
    }
}

export default Nav;