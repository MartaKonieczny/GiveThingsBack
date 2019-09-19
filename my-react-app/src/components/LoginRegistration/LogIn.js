import React from 'react';
import LogRegi from "../LoginRegistration/LogRegi";
import {Link} from "react-router-dom";
import NavReactRoutDom from "../Nav/NavReactRoutDom";

class LogIn extends React.Component{
    state = {
        mail:"",
        password: "",
        err1: [],
        err2: [],
    };
    handleChange = e => {
        this.setState({
            [e.target.name]:e.target.value,
        })
    };
    handleSubmit = e => {
        e.preventDefault();
        const err1 = [];
        const err2 = [];
        if(this.state.mail.length <= 3 || this.state.mail.indexOf("@")===-1 || this.state.mail.indexOf(".")===-1){
            err1.push("Podany email jest nieprawidłowy!");
        }
        if(this.state.password.length <= 6){
            err2.push("Podane hasło jest za krótkie!");
        }
        this.setState({
            err1: err1,
            err2: err2,
        });
    };
    render(){
        const err1Messages = (
            <h5>
                {this.state.err1.map((err,index)=><h5 key = {index}>{err}</h5>)}
            </h5>
        );
        const err2Messages = (
            <h5>
                {this.state.err2.map((err,index)=><h5 key = {index}>{err}</h5>)}
            </h5>
        );
        return(
            <>
                <LogRegi/>
                <NavReactRoutDom/>
                <div className="log-in">
                    <p>Zaloguj się</p>
                    <div className="ornament"></div>
                    <form onSubmit={this.handleSubmit}>
                        <div className="log-form">
                            <label to="e-mail">Email</label>
                            <br/>
                            <input onChange={this.handleChange} id="e-mail" type='text' name='mail' value={this.state.mail}/>
                            {err1Messages}
                            <div className="break"></div>
                            <label to="password">Hasło</label>
                            <br/>
                            <input onChange={this.handleChange} id="password" type='text' name='password' value={this.state.password}/>
                            {err2Messages}
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