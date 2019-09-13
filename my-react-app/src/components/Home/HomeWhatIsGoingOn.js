import React from 'react';
import {Link} from "react-router-dom";

class HomeWhatIsGoingOn extends React.Component{
    render(){
        return(
            <div id="o-co-chodzi" className="what-is-going-on">
                <div className="four-steps">
                    <p>Wystarczą 4 proste kroki</p>
                    <div className="ornament"></div>
                </div>
                <div className="description-steps">
                    <div>
                        <div className="first-icon"></div>
                        <p>Wybierz rzeczy</p>
                        <p className="border">border</p>
                        <p>ubrania, zabawki,</p><p>sprzęt i inne</p>
                    </div>
                    <div>
                        <div className="second-icon"></div>
                        <p>Spakuj je</p>
                        <p className="border">border</p>
                        <p>skorzystaj z</p><p>worków na śmieci</p>
                    </div>
                    <div>
                        <div className="third-icon"></div>
                        <p>Zdecyduj komu</p><p>chcesz pomóc</p>
                        <p className="border">border</p>
                        <p>wybierz zaufane</p><p>miejsce</p>
                    </div>
                    <div>
                        <div className="fourth-icon"></div>
                        <p>Zamów kuriera</p>
                        <p className="border">border</p>
                        <p>kurier przyjedzie</p><p>w dogodnym terminie</p>
                    </div>
                </div>
                <div className="steps-button"><Link className="text-dec" to='/logowanie'><p>Oddaj</p><p>rzeczy</p></Link></div>
            </div>
        )
    }
}

export default HomeWhatIsGoingOn;