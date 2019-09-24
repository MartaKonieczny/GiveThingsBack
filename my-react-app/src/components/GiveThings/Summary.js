import React from 'react';

class Summary extends React.Component{
    render(){
        return(
            <div className="summary">
                <h5>Podsumowanie Twojej darowizny</h5>
                <h4>Oddajesz:</h4>
                <table>
                    <tbody>
                    <tr className="icons">
                        <td className="icon1"><div></div></td>
                        <td><p>4 worki, ubrania w dobrym stanie dzieciom</p></td>
                    </tr>
                    <tr className="icons">
                        <td className="icon2"><div></div></td>
                        <td><p>Dla lokalizacji: Warszawa</p></td>
                    </tr>
                    </tbody>
                </table>
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
                                    <td><span>Prosta 51</span></td>
                                </tr>
                                <tr>
                                    <td><span>Miasto</span></td>
                                    <td><span>Warszawa</span></td>
                                </tr>
                                <tr>
                                    <td><span><h2>Kod</h2><h2>pocztowy</h2></span></td>
                                    <td><span>90-209</span></td>
                                </tr>
                                <tr>
                                    <td><span><h2>Numer</h2><h2>telefonu</h2></span></td>
                                    <td><span>473 839 483</span></td>
                                </tr>
                            </td>
                            <td>
                                <tr>
                                    <td><span>Data</span></td>
                                    <td><span>17.10.2019</span></td>
                                </tr>
                                <tr>
                                    <td><span>Godzina</span></td>
                                    <td><span>17:30</span></td>
                                </tr>
                                <tr>
                                    <td><span><h2>Uwagi</h2><h2>dla kuriera</h2></span></td>
                                    <td><span></span></td>
                                </tr>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </form>
                <div>
                    <button>Wstecz</button>
                    <button>Potwierdzam</button>
                </div>
            </div>

        )
    }
}

export default Summary;