import React from 'react';
import LogRegi from "../LoginRegistration/LogRegi";
import Nav from "../Nav/Nav";

class Register extends React.Component{
    render(){
        return(
            <>
                <LogRegi/>,
                <Nav/>,
                <div>
                    <p>Załóż konto</p>
                    <div>ozdobnik</div>
                    <form>
                        <div>
                            <label>Email
                                <input type='text' name='mail'/>
                            </label>
                            <label>Hasło
                                <input type='text' name='password'/>
                            </label>
                            <label>Powtórz hasło
                                <input type='text' name='password'/>
                            </label>
                        </div>
                        <input type='submit' name='log-in' value='Zaloguj się'/>
                        <input type='submit' name='create-an-account' value='Załóż konto'/>
                    </form>
                </div>
            </>

        )
    }
}

export default Register;