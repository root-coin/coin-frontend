import React, { Component } from 'react';
import '../../css/trade.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, NavbarBrand } from 'react-bootstrap';

class SideBar extends Component {
    render() {
        return (
            <div className="trade_sidebar">
                <SideBarHeader/>
                <SideBarCategoryContent/>
            </div>
        );
    }
}

class SideBarHeader extends Component{
    render(){
        return(
            <div className="trade_sidebar_header">
                <div className="trade_sidebar_header_tab">
                    <Nav
                        onSelect={(selectedKey) => {
                            switch (selectedKey) {
                                case "category":
                                    console.log(this.props);
                                    break;
                                case "ranking":
                                    console.log(this.props);
                                    break;
                            }
                        }}
                    >
                        <Nav.Item>
                            <Nav.Link eventKey="category">종목</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="ranking">랭킹</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </div>
            </div>
        );
    }
}

class SideBarCategoryContent extends Component{
    render(){
        return(
            null
        );
    }
}


class SideBarRankingContent extends Component{
    render(){
        return(
            null
        );
    }
}

export{
    SideBar
}