import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ApexCharts from "react-apexcharts";
import '../css/trade.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
import {Nav, NavbarBrand} from 'react-bootstrap';
import { render } from '@testing-library/react';
import {MainWrapper, LeftWrapper, RightWrapper, SideBar} from './Trade/TradeWrapper';
// #56c000

console.log(ApexCharts);

class TradeMain extends Component {
    static element = (
        <MainWrapper>
            <LeftWrapper coinType="감자" coinAlias="Potato"/>
            <RightWrapper>
                <SideBar/>
            </RightWrapper>
        </MainWrapper>
    );
    render() {
        return TradeMain.element;
    }
}
export default TradeMain;
