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
    render() {
        return (
            <div className="swm_login">
                <div className="swm_login_wrapper">
                    <header>
                        <img src="./imgs/LOGO_WHITE.png"/>
                    </header>
                    <article>
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                <br/>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                        </Form>
                        <br/>
                        <div>
                            <Button>Login</Button>
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