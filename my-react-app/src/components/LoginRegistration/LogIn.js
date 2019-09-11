import React from 'react';
import LogRegi from "../LoginRegistration/LogRegi";
import Nav from "../Nav/Nav";

class LogIn extends React.Component{
    render(){
        return(
            <>
                <LogRegi/>,
                <Nav/>,
                <div>
                    <p>Zaloguj się</p>
                    <div>ozdobnik</div>
                    <form>
                        <div>
                            <label>Email
                                <input type='text' name='mail'/>
                            </label>
                            <label>Hasło
                                <input type='text' name='password'/>
                            </label>
                        </div>
                        <input type='submit' name='create-an-account' value='Załóż konto'/>
                        <input type='submit' name='log-in' value='Zaloguj się'/>
                    </form>
                </div>
            </>

        )
    }
}

export default LogIn;