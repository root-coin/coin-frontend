import React, { Component } from 'react';
import '../css/main.css'

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() {
        return (
            <main className="swm_main">
                <div className="main_img">
                    <img src="./imgs/main_back.jpg"/>
                </div>
                <div className="main_message">
                    <div className="main_message_header">자연 친화적인 화폐, 루트코인</div>
                    <div className="main_message_sub">농업을 장려하고 보상을 제공합니다</div>
                    <div className="main_message_logo">RootCoin</div>
                </div>
            </main>
        );
    }
}
export default Main;