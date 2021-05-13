import React, { Component } from 'react';
import '../../css/trade.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, NavbarBrand } from 'react-bootstrap';

class BuySellView extends Component {
    render() {
        return (
            <div className="trade_buy_sell_view">
                <BuySellViewHeader />
                <BuyViewContent />
            </div>
        );
    }
}

class BuySellViewHeader extends Component {
    render() {
        return (
            <div className="trade_buy_sell_view_header">
                <div className="trade_buy_sell_view_header_title">
                    <span>모의투자</span>
                    <span>Paper Trading</span>
                </div>
                <div className="trade_buy_sell_view_header_tab">
                    <Nav
                        onSelect={(selectedKey) => {
                            switch (selectedKey) {
                                case "buy":
                                    console.log(this.props);
                                    break;
                                case "sell":
                                    console.log(this.props);
                                    break;
                            }
                        }}
                    >
                        <Nav.Item>
                            <Nav.Link eventKey="buy">매수</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="sell">매도</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </div>
            </div>
        );
    }
}

class BuyViewContent extends Component {
    render() {
        return (
            <div className="trade_buy_view_content">
            </div>
        );
    }
}

class SellViewContent extends Component {
    render() {
        return (
            <div className="trade_sell_view_content">
            </div>
        );
    }
}

export {
    BuySellView
}