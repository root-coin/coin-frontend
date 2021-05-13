import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/nav.css';

class NavItem extends Component{
    render(){
        return (
            <div className="nav_item">
                <div>
                    <Link to={`${this.props.url}`}>
                        {this.props.name}
                    </Link>
                </div>
            </div>
        )
    }
}

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() {
        return (
            <nav className="swm_nav">
                <div className="nav_wrapper">
                    <div className="nav_logo">
                        <Link to="/">
                            <img src="./imgs/logo_green.png"/>
                        </Link>
                    </div>
                    <div className="nav_list_left">
                        <NavItem name="거래소" url="trade"/>
                        <NavItem name="채굴" url="grow"/>
                        <NavItem name="투자" url="invest"/>
                    </div>
                    <div className="nav_list_right">
                        <NavItem name="로그인" url="login"/>
                    </div>
                </div>
            </nav>
        );
    }
}
export default Nav;