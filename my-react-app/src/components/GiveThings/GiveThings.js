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
            <>
                <div>obrazek</div>
                <div>
                    <LogRegi/>
                    <NavReactRoutDom/>
                    <div>
                        <p>Oddaj rzeczy, których juz nie chcesz</p><p>POTRZEBUJĄCYM</p>
                        <div>ornament</div>
                        <p>Wystarczą 4 proste kroki:</p>
                        <ul>
                            <li><p>1</p><p>Wybierz</p><p>rzeczy</p></li>
                            <li><p>2</p><p>Spakuj je</p><p>w worki</p></li>
                            <li><p>3</p><p>Wybierz</p><p>fundację</p></li>
                            <li><p>4</p><p>Zamów</p><p>kuriera</p></li>
                        </ul>
                    </div>
                    <div>
                        <p>Ważne!</p>
                        <p>Uzupełnij szczegóły dotyczące Twoicg rzeczy. Dzięki temu będziemy wiedzień komu najlepiej je przekazać.</p>
                    </div>
                    <Step1/>
                    <Step2/>
                    <Step3/>
                    <Step4/>
                    <Summary/>
                    <Thanks/>
                    <HomeContact/>
                </div>
            </>

        )
    }
}

export default GiveThings;