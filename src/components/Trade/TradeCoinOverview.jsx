import React, { Component } from 'react';
import '../../css/trade.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav, NavbarBrand} from 'react-bootstrap';

class CoinOverview extends Component {
    render() {
        return (
            <div className="trade_coin_overview">
                <CoinOverviewHeader 
                coinType={this.props.coinType}
                coinAlias={this.props.coinAlias}
                toggleLayout={this.props.toggleLayout}
                />
                <CoinOverviewContent />
            </div>
        );
    }
}



class CoinOverviewHeader extends Component {
    render() {
        console.log(this.props.coinType);
        return (
            <div className="trade_coin_overview_header">
                <div className="trade_coin_overview_header_title">
                    <span>{this.props.coinType}</span>
                    <span>{this.props.coinAlias}</span>
                </div>
                <div className="trade_coin_overview_header_tab">
                    <Nav
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

class CoinOverviewContent extends Component {
    render() {
        return (
            <div className="trade_coin_overview_content">
                <div>
                    <span>830</span>
                    <span> KRW</span>
                </div>
                <div>
                    전일대비 +1.2% ▲ 10
                </div>
            </div>
        );
    }
}

export{
    CoinOverview,
    CoinOverviewHeader,
    CoinOverviewContent
}