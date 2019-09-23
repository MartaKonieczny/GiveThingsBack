import React from 'react';
import { Link } from 'react-scroll'

const options = {
    activeClass: "active",
    spy: true,
    smooth: true,
    offset: 50,
    duration: 500
};

class Nav extends React.Component{
    render(){
        return(
            <ul className="nav">
                <li className="nav-item"><Link to='home'{...options}>Start</Link></li>
                <li className="nav-item"><Link to='o-co-chodzi'{...options}>O co chodzi?</Link></li>
                <li className="nav-item"><Link to='o-nas'{...options}>O nas</Link></li>
                <li className="nav-item"><Link to='fundacja-organizacje'{...options}>Fundacja i organizacje</Link></li>
                <li className="nav-item"><Link to='kontakt'{...options}>Kontakt</Link></li>
            </ul>
        )
    }
}

export default Nav;