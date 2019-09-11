import React from 'react';
import {Link} from "react-router-dom";

class HomeWhatIsGoingOn extends React.Component{
    render(){
        return(
            <>
                <div>
                    <p>Wystarczą 4 proste kroki</p>
                    <div>ozdobnik</div>
                </div>
                <div>
                    <div>
                        <div>ikonka</div>
                        <p>Wybierz rzeczy</p>
                        <div>border</div>
                        <p>ubrania, zabawki, sprzęt i inne</p>
                    </div>
                    <div>
                        <div>ikonka</div>
                        <p>Spakuj je</p>
                        <div>border</div>
                        <p>skorzystaj z worków na śmieci</p>
                    </div>
                    <div>
                        <div>ikonka</div>
                        <p>Zdecyduj komu chcesz pomóc</p>
                        <div>border</div>
                        <p>wybierz zaufane miejsce</p>
                    </div>
                    <div>
                        <div>ikonka</div>
                        <p>Zamów kuriera</p>
                        <div>border</div>
                        <p>kurier przyjedzie w dogodnym terminie</p>
                    </div>
                </div>
                <div><Link to='/logowanie'><p>Oddaj rzeczy</p></Link></div>
            </>
        )
    }
}

export default HomeWhatIsGoingOn;