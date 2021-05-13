import React, { Component } from 'react';
import '../../css/trade.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class TransactionDetail extends Component {
    render() {
        return (
            <div className="trade_transaction_detail">
                <TransactionDetailHeader/>
                <TransactionDetailContent/>
            </div>
        );
    }
}

class TransactionDetailHeader extends Component{
    render(){
        return(
            <div className="trade_transaction_detail_header">
                <span>모의투자내역</span>
                <span>History</span>
            </div>
        );
    }
}

class TransactionDetailContent extends Component{
    render(){
        return(
            <div className="trade_transaction_detail_content">
            </div>
        );
    }
}

export{
    TransactionDetail,
    TransactionDetailHeader,
    TransactionDetailContent
}