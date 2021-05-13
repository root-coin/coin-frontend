import React, { Component } from 'react';

class NavUnder extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() {
        return (
            <footer className="swm_nav_under">
                <div className="nav_under">
                    <div className="navUnder_wrapper">
                        <div className="navUnder_left">
                            <div className="navUnder_logoBox">
                                <img src="./imgs/logo_green.png"/>
                            </div>
                            <div className="navUnder_copyright">
                                Copyright 2021. RootCoin from Software Maestro 12th members. all rights reserved.
                            </div>
                        </div>
                        <div className="navUnder_right">
                            <div className="navUnder_members">
                                <header>Team. 오프라인해커톤모여라</header>
                                <li>이재완 송기연 나예찬</li>
                                <li>강재현 김태현 임동진</li>
                            </div>
                            <div className="navUnder_logoBox">
                                <img src="./imgs/SWM_LOGO.jpg"/>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}
export default NavUnder;