import React from 'react';

class HomeContact extends React.Component{

    state = {
        name:"",
        mail: "",
        message:"",
        error1: [],
        error2: [],
        error3: [],
        okMessage: [],
    };

    handleChange = e => {
        this.setState({
            [e.target.name]:e.target.value,
        })
    };
    handleSendMessage = e => {
        e.preventDefault();
        const error1 = [];
        const error2 = [];
        const error3 = [];

        if(this.state.name.length <= 3 || this.state.name.indexOf(" ")!==-1){
            error1.push("Podane imię jest nieprawidłowe!");
        }
        if(this.state.mail.length <= 3 || this.state.mail.indexOf("@")===-1 || this.state.mail.indexOf(".")===-1 ){
            error2.push("Podany email jest nieprawidłowy!");
        }
        if(this.state.message.length <= 120){
            error3.push("Wiadomość musi mieć conajmniej 120 znaków!");
        }

        this.setState({
            error1: error1,
            error2: error2,
            error3: error3,
        });

        if(error1.length === 0 && error2.length === 0 && error3.length === 0){
            fetch('https://fer-api.coderslab.pl/v1/portfolio/contact', {
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: this.state.name,
                    email: this.state.mail,
                    message: this.state.message
                })
            })
                .then(res => console.log(res))
                .then( this.setState({
                    okMessage: this.state.okMessage ? "" : "Wiadomość została wysłana! Wkrótce się skontaktujemy",
                }))
                .catch(e => console.log(e))
        }
    };
    render(){
        const error1Message = (
            <h5>
                {this.state.error1.map((err,index)=><h5 key = {index}>{err}</h5>)}
            </h5>
        );
        const error2Message = (
            <h5>
                {this.state.error2.map((err,index)=><h5 key = {index}>{err}</h5>)}
            </h5>
        );
        const error3Message = (
            <h5>
                {this.state.error3.map((err,index)=><h5 key = {index}>{err}</h5>)}
            </h5>
        );

        return(
            <div id="kontakt" className="contact">
                <div className="form">
                    <p>Skontaktuj się z nami</p>
                    <div className="ornament"></div>
                    <h4>{this.state.okMessage}</h4>
                    <form onSubmit={this.handleSendMessage}>
                        <table>
                            <tr>
                                <td><label htmlFor="name">Wpisz swoje imię</label></td>
                                <td><label htmlFor="mail" className="mail">Wpisz swój email</label></td>
                            </tr>
                            <tr>
                                <td>
                                    <input onChange={this.handleChange} id="name" type='text' name='name' placeholder='Krzysztof' value={this.state.name}/>
                                    {error1Message}
                                </td>
                                <td>
                                    <input onChange={this.handleChange} id="mail" type='text' name='mail' placeholder='abc@xyz.pl' value={this.state.mail}/>
                                    {error2Message}
                                </td>
                            </tr>
                        </table>
                        <label for="text">Wpisz swoją wiadomość</label>
                        <br/>
                        <textarea onChange={this.handleChange} id="text" className="text" type="text" name='message' placeholder='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus dolorem ipsum iste quo tempora unde. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus dolorem ipsum iste quo tempora unde.' value={this.state.message}></textarea>
                        {error3Message}
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