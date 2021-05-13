import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ApexCharts from "react-apexcharts";
import '../css/trade.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
import {Nav, NavbarBrand} from 'react-bootstrap';
import {MainWrapper, LeftWrapper, RightWrapper, SideBar} from './Trade/TradeWrapper';

console.log(ApexCharts);

class TradeMain extends Component {
    constructor(props){
        super(props);
        this.state = {
            main_coin_name : "",
            main_coin_price : 0,
            coins : [{
                "coinId": 1,
                "coinName": "",
                "price": 0
            }]
        }
    }
    componentDidMount(){
        // fetch('api/trade/coins', {
        //     method: "GET",
        //     headers: {
        //         'Content-type' : 'application/json'
        //     },
        // })
        // .then(response=>response.json())
        // .then((response)=>{
        //     console.log('todays coin extract');
        //     this.setState({
        //         coins : response
        //     })
        // })

        //temp data
        this.setState({
            main_coin_name : "오이",
            main_coin_price : 1296,
            coins : [{
                "coinId": 1,
                "coinName": "오이",
                "price":1296
            }, {
                "coinId": 3,
                "coinName": "감자",
                "price": 832
            }, {
                "coinId": 5,
                "coinName": "양파",
                "price": 852
                }
            , {
                "coinId": 7,
                "coinName": "쪽파",
                "price": 860
            },{
                "coinId": 6,
                "coinName": "상추",
                "price": 900
            }]
        })
    }
    changeFunc = (name, price, num)=>{
        //api/trade/overview/{coinId}

        // fetch('api/trade/overview/{num}', {
        //     method: "GET",
        //     headers: {
        //         'Content-type' : 'application/json'
        //     },
        // })
        // .then(response=>response.json())
        // .then((response)=>{
        //     console.log('todays coin extract');
        // })

        let data = {
            "currentAmount":830,
            "increasedRatio":1.2,
            "increasedAmount":10,
        }
        this.setState({
            main_coin_name : name,
            main_coin_price : price
        })
    }
    render() {
        let element = (
            <MainWrapper>
                <LeftWrapper coinType={this.state.main_coin_name} price={this.state.main_coin_price} coinAlias="토큰"/>
                <RightWrapper coins={this.state.coins} changeFunc={this.changeFunc}/>
            </MainWrapper>
        );
        return element;
    }
}
export default TradeMain;
