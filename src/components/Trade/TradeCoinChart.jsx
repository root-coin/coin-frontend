import React, {Component} from 'react';
import ApexCharts from "react-apexcharts";
import '../../css/trade.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class CoinChart extends Component {

    constructor(props) {
        super(props);

        const seriesData = [{
            x: new Date(1538778600000),
            y: [6629.81, 6650.5, 6623.04, 6633.33]
            },
            {
                x: new Date(1538780400000),
                y: [6632.01, 6643.59, 6620, 6630.11]
            },
            {
                x: new Date(1538782200000),
                y: [6630.71, 6648.95, 6623.34, 6635.65]
            },
            {
                x: new Date(1538784000000),
                y: [6635.65, 6651, 6629.67, 6638.24]
            },
            {
                x: new Date(1538785800000),
                y: [6638.24, 6640, 6620, 6624.47]
            },
            {
                x: new Date(1538787600000),
                y: [6624.53, 6636.03, 6621.68, 6624.31]
            },
            {
                x: new Date(1538789400000),
                y: [6624.61, 6632.2, 6617, 6626.02]
            },
            {
                x: new Date(1538791200000),
                y: [6627, 6627.62, 6584.22, 6603.02]
            },
            {
                x: new Date(1538793000000),
                y: [6605, 6608.03, 6598.95, 6604.01]
            },
            {
                x: new Date(1538794800000),
                y: [6604.5, 6614.4, 6602.26, 6608.02]
            },
            {
                x: new Date(1538796600000),
                y: [6608.02, 6610.68, 6601.99, 6608.91]
            }];
        const seriesDataLinear = [{
            x: new Date(1538778600000),
            y: -100
        },
            {
                x: new Date(1538780400000),
                y: 100
            },
            {
                x: new Date(1538782200000),
                y: 50
            },
            {
                x: new Date(1538784000000),
                y: -20
            },
            {
                x: new Date(1538785800000),
                y: -50
            },
            {
                x: new Date(1538787600000),
                y: -60
            },
            {
                x: new Date(1538789400000),
                y: -50
            },
            {
                x: new Date(1538791200000),
                y: 50
            },
            {
                x: new Date(1538793000000),
                y: 50
            },
            {
                x: new Date(1538794800000),
                y: 3
            },
            {
                x: new Date(1538796600000),
                y: 22
            }];
        this.state = {

            series: [{
                data: seriesData
            }],
            options: {
                chart: {
                    type: 'candlestick',
                    height: 290,
                    id: 'candles',
                    toolbar: {
                        autoSelected: 'pan',
                        show: true
                    },
                    zoom: {
                        enabled: true
                    },
                },
                plotOptions: {
                    candlestick: {
                        colors: {
                            upward: '#3C90EB',
                            downward: '#DF7D46'
                        }
                    }
                },
                xaxis: {
                    type: 'datetime'
                }
            },

            seriesBar: [{
                name: 'volume',
                data: seriesDataLinear
            }],
            optionsBar: {
                chart: {
                    height: 160,
                    type: 'bar',
                    brush: {
                        enabled: true,
                        target: 'candles'
                    },
                    selection: {
                        enabled: true,

                        fill: {
                            color: '#ccc',
                            opacity: 0.4
                        },
                        stroke: {
                            color: '#0D47A1',
                        }
                    },
                },
                dataLabels: {
                    enabled: false
                },
                plotOptions: {
                    bar: {
                        columnWidth: '80%',
                        colors: {
                            ranges: [{
                                from: -1000,
                                to: 0,
                                color: '#F15B46'
                            }, {
                                from: 1,
                                to: 10000,
                                color: '#FEB019'
                            }],

                        },
                    }
                },
                stroke: {
                    width: 0
                },
                xaxis: {
                    type: 'datetime',
                    axisBorder: {
                        offsetX: 13
                    }
                },
                yaxis: {
                    labels: {
                        show: false
                    }
                }
            },


        };
    }
    render() {
        return (
            <div className="trade_coin_chart">
                <ApexCharts options={this.state.options} series={this.state.series} type="candlestick" height={350}
                            className="trade_coin_chart_content"/>
                <ApexCharts options={this.state.optionsBar} series={this.state.seriesBar} type="bar" height={160} />
            </div>
        );
    }
}

export {
    CoinChart
}