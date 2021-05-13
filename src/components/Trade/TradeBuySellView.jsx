import React, { Component } from 'react';
import '../../css/trade.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, NavbarBrand } from 'react-bootstrap';

class BuySellView extends Component {
    constructor(props){
        super(props);
        this.toggleBuyOrSell=this.toggleBuyOrSell.bind(this);        
        this.state={
            buyOrSell : 1
        }
    }
    toggleBuyOrSell(choice){
        console.log(choice);    
        this.setState(()=>{
            return {buyOrSell: choice};
        });
    }
    render() {
        console.log(this.state.buyOrSell);
        if(this.state.buyOrSell == 1)
        return (
            <div className="trade_buy_sell_view">
                <BuySellViewHeader 
                toggleBuyOrSell={this.toggleBuyOrSell}/>
                <BuyViewContent />
            </div>
        );
        else
        return(
            <div className="trade_buy_sell_view">
                <BuySellViewHeader 
                toggleBuyOrSell={this.toggleBuyOrSell}/>
                <SellViewContent />
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
                                    this.props.toggleBuyOrSell(1);
                                    break;
                                case "sell":
                                    this.props.toggleBuyOrSell(2);
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
                asdf
            </div>
        );
    }
}

class SellViewContent extends Component {
    render() {
        return (
            <div className="trade_sell_view_content">
                fdsa
            </div>
        );
    }
}

export {
    BuySellView
}