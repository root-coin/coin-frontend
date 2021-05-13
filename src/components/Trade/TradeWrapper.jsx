import React, { Component } from 'react';
import '../../css/trade.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {CoinOverview} from './TradeCoinOverview';
import {CoinChart} from './TradeCoinChart';
import {CoinInformation} from './TradeCoinInformation';
import {TransactionDetail} from './TradeTransactionDetail';
import {BuySellView} from './TradeBuySellView';
import {SideBar} from './TradeSideBar';

class MainWrapper extends Component {
    render() {
        return (
            <div className="trade_main_wrapper">
                <div className="trade_main_wrapper_container">
                    {this.props.children}
                </div>
            </div>
        );
    }
}


class LeftWrapper extends Component {
    constructor(props){
        super(props);
        this.toggleLayout=this.toggleLayout.bind(this);        
        this.state={
            currentCoinType: 1
        }
    }
    toggleLayout(layoutChoice){
        this.setState(()=>{
            return{currentCoinType: layoutChoice};
        });
    }
    render() {
        if(this.state.currentCoinType == 1)
        return (
            <div className="trade_left_wrapper">
                <CoinOverview
                coinType={this.props.coinType}
                coinAlias={this.props.coinAlias}
                toggleLayout={this.toggleLayout}
                />
                <CoinChart/>
                <LeftBottomWrapper/>
            </div>
        );
        else return(
            <div className="trade_left_wrapper">
                <CoinInformation
                coinType={this.props.coinType}
                coinAlias={this.props.coinAlias}
                toggleLayout={this.toggleLayout}
                />
            </div>
        );
    }
}


class LeftBottomWrapper extends Component {
    render() {
        return (
            <div className="trade_left_bottom_wrapper">
                <TransactionDetail />
                <BuySellView />
            </div>
        );
    }
}

class RightWrapper extends Component {
    render() {
        return (
            <div className="trade_right_wrapper">
                <SideBar/>
            </div>
        );
    }
}

export{
    MainWrapper,
    LeftWrapper,
    LeftBottomWrapper,
    RightWrapper
}