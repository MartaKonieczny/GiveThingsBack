import React from 'react';

class Step1 extends React.Component{
    render(){
        return(
            <div>
                <div className="important">
                    <h3>Ważne!</h3>
                    <p>Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzień komu najlepiej je przekazać.</p>
                </div>
                <div className="step1">
                    <p>Krok1/4</p>
                    <h5>Zaznacz co chcesz oddać:</h5>
                    <form>
                        <label>
                            <input className="checkbox" type="checkbox"/><span>ubrania, które nadają się do ponownego użycia</span><br/>
                            <input className="checkbox" type="checkbox"/><span>ubrania do wyrzucenia</span><br/>
                            <input className="checkbox" type="checkbox"/><span>zabawki</span><br/>
                            <input className="checkbox" type="checkbox"/><span>książki</span><br/>
                            <input className="checkbox" type="checkbox"/><span>inne</span><br/>
                        </label>
                    </form>
                    <button>Dalej</button>
                </div>
            </div>
        )
    }
}

export default Step1;