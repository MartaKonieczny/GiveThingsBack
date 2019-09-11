import React from 'react';
import LogRegi from "../LoginRegistration/LogRegi";
import Nav from "../Nav/Nav";

class LoggedOut extends React.Component{
    render(){
        return(
            <>
                <LogRegi/>,
                <Nav/>,
                <div>
                    <p>Wylogowanie nastąpiło pomyślnie!</p>
                    <div>ozdobnik</div>
                    <button>Strona główna</button>
                </div>
            </>

        )
    }
}

export default LoggedOut;