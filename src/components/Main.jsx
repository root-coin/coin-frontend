import React, {Component} from 'react';
import '../css/main.css'
import Button from "react-bootstrap/Button";
import Footer from "./Footer";
import {Link} from "react-router-dom";

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <main className="swm_main">
                {/*<div className="main_img">*/}
                {/*    <img src="./imgs/main_back.jpg"/>*/}
                {/*</div>*/}
                <div className="main_message">
                    <div className="main_message_header">
                        <span className="color-green1">
                            첫 파테크,<br/>
                        </span>
                        <span className="color-green2">
                            루트코인으로 시작하기
                        </span>
                    </div>
                    <div className="main_message_sub text-black-50">
                        금값처럼 오른 대파, 직접 재배해 보세요. 포인트로 매수, 매도하면서 실시간으로 변하는 농산물의 가격을 체험해보세요.
                        루트코인을 따라 집에서 직접 농산물을 재배하며 소소한 기쁨을 느껴주세요.
                    </div>
                    <div className="main_message_button">
                        <Button className="btn-color-green1" size="sm" active>
                            <Link to={"/trade"}>
                                실시간 시세 보기
                            </Link>
                        </Button>{' '}
                        <Button variant="light" size="sm" active>
                            <Link to={"/grow"}>
                                재배하기
                            </Link>
                        </Button>
                    </div>
                </div>
            </main>
        );
    }
}

export default Main;