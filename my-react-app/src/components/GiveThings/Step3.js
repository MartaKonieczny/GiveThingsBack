import React from 'react';

class Step2 extends React.Component{
    render(){
        return(
            <div>
                <div className="important">
                    <h3>Ważne!</h3>
                    <div><p>Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w wyszukiwarce. Możesz też filtrować organizacje</p><p>po ich lokalizacji bądź celu ich pomocy</p></div>
                </div>
                <div className="step3">
                    <p>Krok3/4</p>
                    <h5>Lokalizacja:</h5>
                    <form>
                        <select name="nazwa">
                            <option>--wybierz--</option>
                            <option value="poznan">Pznań</option>
                            <option value="warszawa">Warszawa</option>
                            <option value="krakow">Kraków</option>
                            <option value="wroclaw">Wrocław</option>
                            <option value="katowice">Katowice</option>
                        </select>
                    </form>
                    <form className="who">
                        <h4>Komu chcesz pomóc?</h4>
                        <ul>
                            <li value="dzieci"><button className="btns">dzieciom</button></li>
                            <li value="matki"><button className="btns">samotnym matkom</button></li>
                            <li value="bezdomni"><button className="btns">bezdomnym</button></li>
                            <li value="niepełnosprawni"><button className="btns">niepełnosprawnym</button></li>
                            <li value="starsi"><button className="btns">osobom starszym</button></li>
                        </ul>
                    </form>
                    <form>
                        <h4>Wpisz nazwę konkretnej organizacji (opcjonalnie)</h4>
                        <input type="text"/>
                    </form>
                    <div>
                        <button>Wstecz</button>
                        <button>Dalej</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Step2;