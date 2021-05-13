import React, { Component } from 'react';
import '../css/login.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    handleLogin = ()=>{
        let id = document.getElementById('formBasicEmail').value;
        let pw = document.getElementById('formBasicPassword').value;
        fetch('api/account/login', {
            method: "POST",
            headers: {
                'Content-type' : 'application/json'
            },
            body: JSON.stringify({
                userId : id,
                userPassword: pw,
            })
        })
        .then(response=>response.json())
        .then((response)=>{
            if(response.result==="success"){
                window.location.href = "/"
            }
        })
    }
    render() {
        return (
            <div className="swm_login">
                <div className="swm_login_wrapper">
                    <header>
                        <img src="./imgs/logo_green.png"/>
                    </header>
                    <article>
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>아이디</Form.Label>
                                <Form.Control type="email" placeholder="id" />
                                <br/>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>비밀번호</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                        </Form>
                        <br/>
                        <div>
                            <Button onClick={this.handleLogin}>Login</Button>
                        </div>
                        <div className="signUp_button">
                            <Link to={"signUp"}>회원가입</Link>
                        </div>
                        <div className="rootCoin_signature">RootCoin</div>
                    </article>
                </div>
            </div>
        );
    }
}
export default Login;