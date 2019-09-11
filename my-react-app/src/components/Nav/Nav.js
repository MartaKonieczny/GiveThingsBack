import React from 'react';
import { Link } from 'react-scroll'

class Nav extends React.Component{
    render(){
        return(
            <ul>
                <li><Link to='home'>Start</Link></li>
                <li><Link to='o-co-chodzi'>O co chodzi?</Link></li>
                <li><Link to='o-nas'>O nas</Link></li>
                <li><Link to='fundacja-organizacje'>Fundacja i organizacje</Link></li>
                <li><Link to='kontakt'>Kontakt1</Link></li>
            </ul>
        )
    }
}

export default Nav;