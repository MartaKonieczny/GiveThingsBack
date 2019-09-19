import React from 'react';
import LogRegi from "../LoginRegistration/LogRegi";
import {Link} from "react-router-dom";
import NavReactRoutDom from "../Nav/NavReactRoutDom";

class Register extends React.Component{
    state = {
        mail:"",
        password: "",
        repeatPassword:"",
        err1: [],
        err2: [],
        err3: [],
        err4: [],
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
        const err3 = [];
        const err4 = [];
        if(this.state.mail.length <= 3 || this.state.mail.indexOf("@")===-1 || this.state.mail.indexOf(".")===-1){
            err1.push("Podany email jest nieprawidłowy!");
        }
        if(this.state.password.length <= 6){
            err2.push("Podane hasło jest za krótkie!");
        }
        if(this.state.repeatPassword.length <= 6){
            err3.push("Podane hasło jest za krótkie!");
        }
        if(this.state.repeatPassword !== this.state.password) {
            err4.push("Hasła muszą być takie same!");
        }
        this.setState({
            err1: err1,
            err2: err2,
            err3: err3,
            err4: err4,
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
        const err3Messages = (
            <h5>
                {this.state.err3.map((err,index)=><h5 key = {index}>{err}</h5>)}
            </h5>
        );
        const err4Messages = (
            <h5>
                {this.state.err4.map((err,index)=><h5 key = {index}>{err}</h5>)}
            </h5>
        );
        return(
            <>
                <LogRegi/>
                <NavReactRoutDom/>
                <div className="regis">
                    <p>Załóż konto</p>
                    <div className="ornament"></div>
                    <form onSubmit={this.handleSubmit}>
                        <div className="reg-form">
                            <label to="e-mail">Email</label>
                            <br/>
                            <input onChange={this.handleChange} id="e-mail" type='text' name='mail' value={this.state.mail}/>
                            {err1Messages}
                            <div className="break"></div>
                            <label to="password">Hasło</label>
                            <br/>
                            <input onChange={this.handleChange} id="password" type='text' name='password' value={this.state.password}/>
                            {err2Messages}
                            <div className="break"></div>
                            <label to="repeat-password">Powtórz hasło</label>
                            <br/>
                            <input onChange={this.handleChange} id="repeatPassword" type='text' name='repeatPassword' value={this.state.repeatPassword}/>
                            {err3Messages}{err4Messages}
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