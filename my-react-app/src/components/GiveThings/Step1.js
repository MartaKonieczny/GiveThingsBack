import React from 'react';

class Step1 extends React.Component{
    render(){
        return(
            <div>
                <p>Krok1/4</p>
                <h5>Zaznacz co chcesz oddać:</h5>
                <form>
                    <label>
                        <input type="checkbox"/>ubrania, które nadają się do ponownego użycia<br/>
                        <input type="checkbox"/>ubrania do wyrzucenia<br/>
                        <input type="checkbox"/>zabawki<br/>
                        <input type="checkbox"/>książki<br/>
                        <input type="checkbox"/>inne<br/>
                    </label>
                </form>
                <button>Dalej</button>
            </div>

        )
    }
}

export default Step1;