import React from 'react';
import LogRegi from "../LoginRegistration/LogRegi"
import NavReactRoutDom from "../Nav/NavReactRoutDom";
import Step1 from "./Step1";
import HomeContact from "../Home/HomeContact";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Summary from "./Summary";
import Thanks from "./Thanks";


class GiveThings extends React.Component{
    render(){
        return(
            <div className="give-things">
                <div className="position">
                    <div className="first-background"></div>
                    <div className="first-section">
                        <LogRegi className="log"/>
                        <NavReactRoutDom className="nav"/>
                        <div className="instruction">
                            <h4>Oddaj rzeczy, których juz nie chcesz</h4><h4>POTRZEBUJĄCYM</h4>
                            <div className="ornament"></div>
                            <h3>Wystarczą 4 proste kroki:</h3>
                            <ul className="squares">
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                            <ul>
                                <li><h6>1</h6><p>Wybierz</p><p>rzeczy</p></li>
                                <li><h6>2</h6><p>Spakuj je</p><p>w worki</p></li>
                                <li><h6>3</h6><p>Wybierz</p><p>fundację</p></li>
                                <li><h6>4</h6><p>Zamów</p><p>kuriera</p></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div>
                    <Step1/>
                    <Step2/>
                    <Step3/>
                    <Step4/>
                    <Summary/>
                    <Thanks/>
                    <HomeContact/>
                </div>
            </div>

        )
    }
}

export default GiveThings;