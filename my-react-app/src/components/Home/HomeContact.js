import React from 'react';

class HomeContact extends React.Component{
    render(){
        return(
            <div id="kontakt">
                <div>obrazek</div>
                <div>
                    <p>Skontaktuj się z nami</p>
                    <div>ozdobnik</div>
                    <form>
                        <label>Wpisz swoje imię
                            <input type='text' name='name' placeholder='Krzysztof'/>
                        </label>
                        <label>Wpisz swój email
                            <input type='text' name='mail' placeholder='abc@xyz.pl'/>
                        </label>
                        <label>Wpisz swoją wiadomość
                            <textarea name='message' cols='30' rows='10' placeholder='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus dolorem ipsum iste quo tempora unde.'></textarea>
                        </label>
                        <input type='submit' name='send' value='Wyślij'/>
                    </form>
                </div>
                <div>
                    <div>Copyright by Coders Lab</div>
                    <div>
                        <div>fb</div>
                        <div>insta</div>
                    </div>
                </div>
            </div>

        )
    }
}

export default HomeContact;