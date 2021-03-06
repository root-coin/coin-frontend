import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/nav.css';
import cookie from 'react-cookies';

class NavItem extends Component{
    render(){
        return (
            <div className="nav_item">
                <div>
                    {
                        this.props.name != "로그아웃" ?
                        <Link to={`${this.props.url}`}>
                            {this.props.name}
                        </Link> :
                        <div className="logout" onClick={
                            function(){
                                fetch('api/account/logout', {
                                    method: "GET",
                                    headers: {
                                        'Content-type' : 'application/json'
                                    },
                                })
                                .then(response=>response.json())
                                .then((response)=>{
                                    this.props.logout();
                                    window.location.href="/";
                                })
                            }.bind(this)
                        }>로그아웃</div>
                    }
                </div>
            </div>
        )
    }
}

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login : false
        }
    }
    componentDidMount(){
        let ck = cookie.load("loginTK");
        if(ck===undefined || ck==="" || ck===null){
            console.log(1);
            this.setState({
                login : false
            })
        } else {
            console.log(2);
            console.log(ck)
            this.setState({
                login : true
            })
        }
    }
    logout = ()=>{
        this.setState({
            login : false
        })
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
                        {this.state.login ?
                            <NavItem name="로그아웃" url="/" logout={this.logout}/> :
                            <NavItem name="로그인" url="login"/>
                        }
                    </div>
                </div>
            </nav>
        );
    }
}
export default Nav;