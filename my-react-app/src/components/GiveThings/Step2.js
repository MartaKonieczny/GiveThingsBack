import React from 'react';

class Step2 extends React.Component{
    render(){
        return(
            <div>
                <p>Krok2/4</p>
                <h5>Podaj liczbę 60l worków, w które spakowałęś/aś rzeczy:</h5>
                <form>
                    <select name="nazwa">
                        <option>--wybierz--</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                    </select>
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