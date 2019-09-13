import React from 'react';

class HomeContact extends React.Component{
    render(){
        return(
            <div id="kontakt" className="contact">
                <div className="form">
                    <p>Skontaktuj się z nami</p>
                    <div className="ornament"></div>
                    <form>
                        <label for="name">Wpisz swoje imię</label>
                        <label for="mail" className="mail">Wpisz swój email</label>
                        <br/>
                        <input id="name" type='text' name='name' placeholder='Krzysztof'/>
                        <input id="mail" type='text' name='mail' placeholder='abc@xyz.pl'/>
                        <div className="br"/>
                        <label for="text">Wpisz swoją wiadomość</label>
                        <br/>
                        <textarea id="text" className="text" type="text" name='message' placeholder='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus dolorem ipsum iste quo tempora unde. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus dolorem ipsum iste quo tempora unde.'></textarea>
                        <br/>
                        <button>Wyślij</button>
                    </form>
                </div>
                <div className="footer">
                    <div>Copyright by Coders Lab</div>
                    <div className="media">
                        <div className="fb"></div>
                        <div className="insta"></div>
                    </div>
                </div>
            </div>

        )
    }
}

export default HomeContact;