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
class InvestContent extends Component{
    render(){
        return (
            <div className="investContents_item">
                <div className="investContents_time">{this.props.time}</div>
                <div className="investContents_total">{Number(this.props.num) * Number(this.props.price)} \</div>
                <div className="investContents_num">{this.props.num} EA</div>
                <div className="investContents_price">{this.props.price} \</div>
            </div>
        )
    }
}
class TransactionDetailContent extends Component{
    render(){
        return(
            <div className="trade_transaction_detail_content">
                <header>
                    <div>체결시간</div>
                    <div>체결가격</div>
                    <div>체결량</div>
                    <div>체결금액</div>
                </header>
                <InvestContent time={"07:56"} num={3} price={3000}/>
                <InvestContent time={"08:06"} num={5} price={5000}/>
                <InvestContent time={"08:26"} num={7} price={2000}/>
                <InvestContent time={"07:56"} num={8} price={1000}/>
            </div>
        );
    }
}

export{
    TransactionDetail,
    TransactionDetailHeader,
    TransactionDetailContent
}