import React from 'react';

class Step4 extends React.Component{
    render(){
        return(
            <div>
                <div className="important">
                    <h3>Ważne!</h3>
                    <p>Podaj adres oraz termin odbioru rzeczy</p>
                </div>
                <div className="step4">
                    <p>Krok4/4</p>
                    <h5>Podaj adres oraz termin odbioru rzeczy przez kuriera</h5>
                    <form>
                        <table>
                            <tbody>
                            <tr>
                                <td><label htmlFor="adres"><h4>Adres odbioru:</h4></label></td>
                                <td><label htmlFor="termin"><h4>Termin odbioru:</h4></label></td>
                            </tr>
                            <tr>
                                <td>
                                    <tr>
                                        <td><span>Ulica</span></td>
                                        <td><input id="adres" type='text' name='adres'/></td>
                                    </tr>
                                    <tr>
                                        <td><span>Miasto</span></td>
                                        <td><input id="adres" type='text' name='adres'/></td>
                                    </tr>
                                    <tr>
                                        <td><span><h2>Kod</h2><h2>pocztowy</h2></span></td>
                                        <td><input id="adres" type='text' name='adres'/></td>
                                    </tr>
                                    <tr>
                                        <td><span><h2>Numer</h2><h2>telefonu</h2></span></td>
                                        <td><input id="adres" type='text' name='adres'/></td>
                                    </tr>
                                </td>
                                <td>
                                    <tr>
                                        <td><span>Data</span></td>
                                        <td><input id="termin" type='text' name='termin'/></td>
                                    </tr>
                                    <tr>
                                        <td><span>Godzina</span></td>
                                        <td><input id="termin" type='text' name='termin'/></td>
                                    </tr>
                                    <tr>
                                        <td><span><h2>Uwagi</h2><h2>dla kuriera</h2></span></td>
                                        <td><textarea id="termin" type='text' name='termin'/></td>
                                    </tr>
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

            </div>
        )
    }
}

export default Step4;