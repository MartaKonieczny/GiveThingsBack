import React from 'react';

class Step4 extends React.Component{
    render(){
        return(
            <div>
                <p>Krok4/4</p>
                <h5>Podaj adres oraz termin odbioru rzeczy przez kuriera</h5>
                <form>
                    <table>
                        <tbody>
                        <tr>
                            <td><label htmlFor="adres"><h6>Adres odbioru:</h6></label></td>
                            <td><label htmlFor="termin"><h6>Termin odbioru:</h6></label></td>
                        </tr>
                        <tr>
                            <td>
                                <span>Ulica</span>
                                <input id="adres" type='text' name='adres'/><br/>
                                <span>Miasto</span>
                                <input id="adres" type='text' name='adres'/><br/>
                                <span><p>Kod</p><p>pocztowy</p></span>
                                <input id="adres" type='text' name='adres'/><br/>
                                <span><p>Numer</p><p>telefonu</p></span>
                                <input id="adres" type='text' name='adres'/><br/>
                            </td>
                            <td>
                                <span>Data</span>
                                <input id="termin" type='text' name='termin'/><br/>
                                <span>Godzina</span>
                                <input id="termin" type='text' name='termin'/><br/>
                                <span><p>Uwagi</p><p>dla kuriera</p></span>
                                <textarea id="termin" type='text' name='termin'/><br/>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </form>
                <div>
                    <button>Wstecz</button>
                    <button>Dalej</button>
                </div>
            </div>

        )
    }
}

export default Step4;