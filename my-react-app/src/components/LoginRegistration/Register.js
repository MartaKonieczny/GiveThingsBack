import React from 'react';
import LogRegi from "../LoginRegistration/LogRegi";
import Nav from "../Nav/Nav";
import {Link} from "react-router-dom";

class Register extends React.Component{
    render(){
        return(
            <>
                <LogRegi/>
                <Nav/>
                <div className="regis">
                    <p>Załóż konto</p>
                    <div className="ornament"></div>
                    <form>
                        <div className="reg-form">
                            <label to="e-mail">Email</label>
                            <br/>
                            <input id="e-mail" type='text' name='mail'/>
                            <div className="break"></div>
                            <label to="password">Hasło</label>
                            <br/>
                            <input id="password" type='text' name='password'/>
                            <div className="break"></div>
                            <label to="repeat-password">Powtórz hasło</label>
                            <br/>
                            <input id="repeat-password" type='text' name='password'/>
                        </div>
                        <div className="btns">
                            <Link className="link" to='/logowanie'><button>Zaloguj się</button></Link>
                            <button>Załóż konto</button>
                        </div>
                    </form>
                </div>
            </>

        )
    }
}

export default Register;