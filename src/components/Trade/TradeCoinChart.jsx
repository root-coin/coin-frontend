import React, {Component} from 'react';
import ApexCharts from "react-apexcharts";
import '../../css/trade.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class CoinChart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            series: [{
                data: []
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
                data: []
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

    componentDidMount() {
        const coinId ="0901"; // test

        fetch(`api/trade/chart/${coinId}`, {
            method: "GET",
            headers: {
                'Content-type': 'application/json'
            }
        })
            .then(response => response.json())
            .then((response) => {
                const {seriesData, seriesDataLinear} = response;
                this.setState({
                    series: [{data: seriesData}],
                    seriesBar: [{data: seriesDataLinear}],
                });
            })
    }

    render() {
        return (
            <div className="trade_coin_chart">
                <ApexCharts options={this.state.options} series={this.state.series} type="candlestick" height={300}
                            className="trade_coin_chart_content"/>
                <ApexCharts options={this.state.optionsBar} series={this.state.seriesBar} type="bar" height={160}/>
            </div>
        );
    }
}

export {
    CoinChart
}