import React, { Component } from 'react';
import '../../css/trade.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class BuySellView extends Component {
    render() {
        return (
            <div className="trade_buy_sell_view">
                {this.props.children}
            </div>
        );
    }
}

export{
    BuySellView
}