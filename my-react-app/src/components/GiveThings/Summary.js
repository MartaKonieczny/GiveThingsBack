import React from 'react';

class Summary extends React.Component{
    render(){
        return(
            <div>
                <h5>Podsumowanie Twojej darowizny</h5>
                <h6>Oddajesz:</h6>
                <div>
                    <div>ikona koszulki</div>
                    <p><span>4 worki,</span><span>ubrania w dobrym stanie</span><span>dzieciom</span></p>
                </div>
                <div>
                    <div>ikona ładowania</div>
                    <p><span>Dla lokalizacji:</span><span>Warszawa</span></p>
                </div>
                <form>
                    <table>
                        <tr>
                            <td><label htmlFor="adres"><h6>Adres odbioru:</h6></label></td>
                            <td><label htmlFor="termin"><h6>Termin odbioru:</h6></label></td>
                        </tr>
                        <tr>
                            <td>
                                <div>
                                    <span>Ulica</span><span>Prosta 51</span>
                                </div>
                                <div>
                                    <span>Miasto</span><span>Warszawa</span>
                                </div>
                                <div>
                                    <span><p>Kod</p><p>pocztowy</p></span><span>90-209</span>
                                </div>
                                <div>
                                    <span><p>Numer</p><p>telefonu</p></span><span>473 839 483</span>
                                </div>
                            </td>
                            <td>
                                <div>
                                    <span>Data</span><span>17.10.2019</span>
                                </div>
                                <div>
                                    <span>Godzina</span><span>17:30</span>
                                </div>
                                <div>
                                    <span>Ulica</span><span>Ulica</span>
                                </div>
                                <div>
                                    <span><p>Uwagi</p><p>dla kuriera</p></span><span>Ulica</span>
                                </div>
                            </td>
                        </tr>
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