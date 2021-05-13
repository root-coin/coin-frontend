import React, { Component } from 'react';
import '../../css/trade.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav, NavbarBrand} from 'react-bootstrap';

class CoinInformation extends Component {
    render() {
        return (
            <div className="trade_coin_information">
                <CoinInformationHeader 
                coinType={this.props.coinType}
                coinAlias={this.props.coinAlias}
                toggleLayout={this.props.toggleLayout}
                />
                <CoinInformationContent />
            </div>
        );
    }
}


class CoinInformationHeader extends Component {
    render() {
        console.log(this.props.coinType);
        return (
            <div className="trade_coin_information_header">
                <div className="trade_coin_information_header_title">
                    <span>{this.props.coinType}</span>
                    <span>{this.props.coinAlias}</span>
                </div>
                <div className="trade_coin_information_header_tab">
                    <Nav
                    activeKey="/home"
                    onSelect={(selectedKey) => {
                        switch(selectedKey)
                        {
                            case "price":
                                console.log(this.props);
                                this.props.toggleLayout(1);
                                break;
                            case "information":
                                console.log(this.props);
                                this.props.toggleLayout(2);
                                break;
                        }
                    }}
                    >
                        <Nav.Item>
                            <Nav.Link eventKey="price">시세</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="information">설명</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </div>
            </div>
        );
    }
}

class CoinInformationContent extends Component {
    render() {
        return (
            <div className="trade_coin_information_content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Nulla posuere purus convallis odio ultrices pharetra. Donec vel sem tellus.
            </div>
        );
    }
}

export{
    CoinInformation,
    CoinInformationHeader,
    CoinInformationContent
}