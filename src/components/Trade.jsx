import React, { Component } from 'react';
import ApexCharts from "react-apexcharts";
import '../css/trade.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
import {Nav} from 'react-bootstrap';
// #56c000

console.log(ApexCharts);

class TradeUtility{
    static currentOverviewTab = 1;
    static currentCoinType = 1;
}

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
    render() {
        return (
            <div className="trade_left_wrapper">
                {this.props.children}
            </div>
        );
    }
}

class CoinOverview extends Component {
    render() {
        return (
            <div className="trade_coin_overview">
                <CoinOverviewHeader 
                coinType={this.props.coinType}
                coinAlias={this.props.coinAlias}
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
                    activeKey="/home"
                    onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
                    >
                    <Nav.Item>
                        <Nav.Link href="/home">Active</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-1">Link</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-2">Link</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="disabled" disabled>
                        Disabled
                        </Nav.Link>
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
                    830p
                </div>
                <div>
                    전일대비 +1.2% ▲ 10
                </div>
            </div>
        );
    }
}

class CoinChart extends Component {

    constructor(props) {
        super(props);

        this.state = {

            series: [{
                name: "가격",
                data: [961, 955, 923, 912, 899, 900, 1055]
            }],
            options: {
                chart: {
                    height: 300,
                    type: 'line',
                    zoom: {
                        enabled: false
                    }
                },
                colors: ['#56c000'],
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    curve: 'straight'
                },
                grid: {
                    row: {
                        colors: ['#ffffff', 'transparent'], // takes an array which will be repeated on columns
                        opacity: 0.5
                    },
                },
                xaxis: {
                    categories: ['월','화','수','목','금','토','일'],
                }
            },


        };
    }
    render() {
        if (TradeUtility.currentOverviewTab == 1)
        return (
            <div className="trade_coin_chart">
                <ApexCharts options={this.state.options} series={this.state.series} type="line" height={350} 
                className="trade_coin_chart_content"/>
            </div>
        );
        else return null;
    }
}

class LeftBottomWrapper extends Component {
    render() {
        if (TradeUtility.currentOverviewTab == 1)
        return (
            <div className="trade_left_bottom_wrapper">
                {this.props.children}
            </div>
        );
        else return null;
    }
}

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
                <span>거래내역</span>
                <span>Transaction</span>
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

class BuySellView extends Component {
    render() {
        return (
            <div className="trade_buy_sell_view">
                {this.props.children}
            </div>
        );
    }
}

class RightWrapper extends Component {
    render() {
        return (
            <div className="trade_right_wrapper">
                {this.props.children}
            </div>
        );
    }
}

class SideBar extends Component {
    render() {
        return (
            <div className="trade_sidebar">
                {this.props.children}
            </div>
        );
    }
}

class TradeMain extends Component {
    render() {
        return (
            <MainWrapper>
                <LeftWrapper>
                    <CoinOverview coinType="감자" coinAlias="Potato"/>
                    <CoinChart />
                    <LeftBottomWrapper>
                        <TransactionDetail />
                        <BuySellView />
                    </LeftBottomWrapper>
                </LeftWrapper>
                <RightWrapper>
                    <SideBar />
                </RightWrapper>
            </MainWrapper>
        )
    }
}
export default TradeMain;
