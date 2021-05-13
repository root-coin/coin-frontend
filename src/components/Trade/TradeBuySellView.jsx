import React, { Component } from 'react';
import '../../css/trade.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, NavbarBrand } from 'react-bootstrap';

import '../../css/trade2.css';
import { Button } from 'react-bootstrap';

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
                <BuySellItems isBuy={true}/>
            </div>
        );
    }
}

class SellViewContent extends Component {
    render() {
        return (
            <div className="trade_sell_view_content">
                <BuySellItems isBuy={false}/>
            </div>
        );
    }
}

class BuySellItems extends Component {
    constructor(props){
        super(props);
        this.state = {
            num : 0,
            price : 0,
            myMoney : 1000000
        }
    }
    onChange = ()=>{
        let _price = document.querySelector(".buy_sell_item_price > input").value;
        let _num = document.querySelector(".buy_sell_item_number > input").value;
        this.setState({
            price : _price,
            num : _num
        })
    }
    buttonUpdate = (diff)=>{
        let _price = document.querySelector(".buy_sell_item_price > input").value;
        document.querySelector(".buy_sell_item_price > input").value = Number(_price)+diff;
        this.setState({
            price : Number(_price)+diff
        })
    }
    render(){
        let total = this.state.num * this.state.price;
        return (
            <div className="buy_sell_wrapper">
                <div className="buy_sell_item">
                    <div className="buy_sell_item_left">주문구분</div>
                    <div className="buy_sell_item_right">
                        <div className="buy_sell_item_selector">
                            <label>
                                <input type="radio" value="1" checked={false} /> 지정가
                            </label>
                            <label className="buy_sell_item_selector_active" >
                                <input type="radio" value="2" checked={true} /> 시장가
                            </label>
                            <label>
                                <input type="radio" value="3" checked={false} /> 예약지정가
                            </label>
                        </div>
                    </div>
                </div>
                <div className="buy_sell_item">
                    <div className="buy_sell_item_left">주문가능</div>
                    <div className="buy_sell_item_right">
                        <div className="buy_sell_item_myPoint">
                            <span>{this.state.myMoney}</span>
                            <span> KRW</span>
                        </div>
                    </div>
                </div>
                <div className="buy_sell_item">
                    <div className="buy_sell_item_left">{this.props.isBuy ? "매수가격" : "매도가격"}</div>
                        <div className="buy_sell_item_right">
                            <div className="buy_sell_item_price">
                                <input type="number" defaultValue={this.state.price} onChange={this.onChange}/>
                                <div className="buy_sell_item_minus" onClick={function(){
                                    this.buttonUpdate(-1000);
                                }.bind(this)}>-</div>
                                <div className="buy_sell_item_plus" onClick={function(){
                                    this.buttonUpdate(1000);
                                }.bind(this)}>+</div>
                            </div>
                    </div>
                </div>
                <div className="buy_sell_item">
                    <div className="buy_sell_item_left">주문수량</div>
                    <div className="buy_sell_item_right">
                        <div className="buy_sell_item_number">
                            <input type="number" defaultValue={this.state.num} onChange={this.onChange}></input>
                        </div>
                    </div>
                </div>
                <div className="buy_sell_item">
                    <div className="buy_sell_item_left">주문총액</div>
                    <div className="buy_sell_item_right">
                        <div className="buy_sell_item_total">
                            <input type="number" value={total}></input>
                        </div>
                    </div>
                </div>
                <div className="buy_sell_button">
                    <Button variant="light">{this.props.isBuy ? "매수" : "매도"}</Button>
                </div>
            </div>
        )
    }
}

export {
    BuySellView
}