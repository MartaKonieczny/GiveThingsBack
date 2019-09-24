import React from 'react';

class Step1 extends React.Component{

    handleClickNext =e=>{
        console.log("ok");
    }
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
                        <label><input className="checkbox" type="checkbox" value="good-clothes"/><span>ubrania, które nadają się do ponownego użycia</span><br/></label>
                        <label><input className="checkbox" type="checkbox" value="bad-clothes"/><span>ubrania do wyrzucenia</span><br/></label>
                        <label><input className="checkbox" type="checkbox" value="toys"/><span>zabawki</span><br/></label>
                        <label><input className="checkbox" type="checkbox" value="books"/><span>książki</span><br/></label>
                        <label><input className="checkbox" type="checkbox" value="other"/><span>inne</span><br/></label>
                    </form>
                    <button onClick={this.handleClickNext}>Dalej</button>
                </div>
            </div>
        )
    }
}

export default Step1;