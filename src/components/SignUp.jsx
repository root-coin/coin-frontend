import React, { Component } from 'react';
import '../css/login.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Link} from 'react-router-dom';


class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    sendSignUp(){
        let id = document.getElementById("formBasicEmail").value;
        let pw = document.getElementById("formBasicPassword").value;
        let pwChk = document.getElementById("formBasicPasswordConfirm").value;
        let name = document.getElementById("formBasicNickName").value;
        if(pw===pwChk){
            fetch('api/account/new', {
                method: "POST",
                headers: {
                    'Content-type' : 'application/json'
                },
                body: JSON.stringify({
                    userId : id,
                    userPassword: pw,
                    userNickname: name
                })
            })
            .then(response => response.json())
            .then(response => {
                console.log(response)
                if(response.result === "good"){
                    alert("회원가입이 완료되었습니다");
                    window.location.href = "/";
                } else {
                    alert("이미 존재하는 계정입니다");
                }
            })
        } else {
            alert("비밀번호가 일치하지 않습니다");
        }
    }
    render(){
        return (
            <div className="swm_login">
                <div className="swm_login_wrapper">
                    <header>
                        <img src="./imgs/logo_green.png"/>
                    </header>
                    <article>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <div className="checkButton">
                                <Button variant="outline-secondary">중복확인</Button>
                            </div>
                            <br/>
                        </Form.Group>

                        <Form.Group controlId="formBasicNickName">
                            <Form.Label>이름</Form.Label>
                            <Form.Control type="email" placeholder="홍길동" />
                            <br/>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                            <br/>
                        </Form.Group>

                        <Form.Group controlId="formBasicPasswordConfirm">
                            <Form.Control type="password" placeholder="Confirm Password" />
                        </Form.Group>

                    </Form>
                    </article>
                    <br/>
                    <div>
                        <Button onClick={this.sendSignUp}>완료</Button>
                    </div>
                </div>
            </div>
        );
    }
}
export default SignUp;