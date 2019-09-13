import React from 'react';
import LogRegi from "../LoginRegistration/LogRegi";
import Nav from "../Nav/Nav";
import {Link} from "react-router-dom";

class LogIn extends React.Component{
    render(){
        return(
            <>
                <LogRegi/>
                <Nav/>
                <div className="log-in">
                    <p>Zaloguj się</p>
                    <div className="ornament"></div>
                    <form>
                        <div className="log-form">
                            <label to="e-mail">Email</label>
                            <br/>
                            <input id="e-mail" type='text' name='mail'/>
                            <div className="break"></div>
                            <label to="password">Hasło</label>
                            <br/>
                            <input id="password" type='text' name='password'/>
                        </div>
                        <div className="btns">
                            <Link className="link" to='/rejestracja'><button>Załóż konto</button></Link>
                            <button>Zaloguj się</button>
                        </div>
                    </form>
                </div>
            </>

        )
    }
}

export default LogIn;