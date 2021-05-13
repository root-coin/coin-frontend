import React, { Component } from 'react';
import ApexCharts from "react-apexcharts";
import '../../css/trade.css';
import 'bootstrap/dist/css/bootstrap.min.css';

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
        return (
            <div className="trade_coin_chart">
                <ApexCharts options={this.state.options} series={this.state.series} type="line" height={350} 
                className="trade_coin_chart_content"/>
            </div>
        );
    }
}

export {
    CoinChart
}