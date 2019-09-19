import React from 'react';

class Step2 extends React.Component{
    render(){
        return(
            <div>
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
                <form>
                    <ul>
                        <li value="dzieci">dzieciom</li>
                        <li value="matki">samotnym matkom</li>
                        <li value="bezdomni">bezdomnym</li>
                        <li value="niepełnosprawni">niepełnosprawnym</li>
                        <li value="starsi">osobom starszym</li>
                    </ul>
                </form>
                <form>
                    <h6>Wpisz nazwę konkretnej organizacji (opcjonalnie)</h6>
                    <input type="text"/>
                </form>
                <div>
                    <button>Wstecz</button>
                    <button>Dalej</button>
                </div>
            </div>

        )
    }
}

export default Step2;