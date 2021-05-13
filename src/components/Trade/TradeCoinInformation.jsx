import React, { Component } from 'react';
import '../../css/trade.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav, NavbarBrand} from 'react-bootstrap';

class CoinInformation extends Component {
    render() {
        return (
            <div className="trade_coin_information">
                <CoinInformationHeader 
                coinType={this.props.coinType}
                coinAlias={this.props.coinAlias}
                toggleLayout={this.props.toggleLayout}
                />
                <CoinInformationContent />
            </div>
        );
    }
}


class CoinInformationHeader extends Component {
    render() {
        console.log(this.props.coinType);
        return (
            <div className="trade_coin_information_header">
                <div className="trade_coin_information_header_title">
                    <span>{this.props.coinType}</span>
                    <span>{this.props.coinAlias}</span>
                </div>
                <div className="trade_coin_information_header_tab">
                    <Nav
                    activeKey="/home"
                    onSelect={(selectedKey) => {
                        switch(selectedKey)
                        {
                            case "price":
                                console.log(this.props);
                                this.props.toggleLayout(1);
                                break;
                            case "information":
                                console.log(this.props);
                                this.props.toggleLayout(2);
                                break;
                        }
                    }}
                    >
                        <Nav.Item>
                            <Nav.Link eventKey="price">시세</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="information">설명</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </div>
            </div>
        );
    }
}

class CoinInformationContent extends Component {
    render() {
        return (
            <div className="trade_coin_information_content">
                줄기는 능선과 더불어 굵은 털이 있고 덩굴손으로 감으면서 다른 물체에 붙어서 길게 자란다. 
                잎은 어긋나고 잎자루가 길며 손바닥 모양으로 얕게 갈라지고 가장자리에 톱니가 있으며 거칠다. 
                꽃은 단성화이며 5∼6월에 노란색으로 피고 지름 3cm 내외이며 주름이 진다.
                
                화관은 5개로 갈라지고 수꽃에는 3개의 수술이 있으며 암꽃에는 가시 같은 돌기가 있는 긴 씨방이 아래 쪽에 있다. 
                열매는 장과(漿果)로 원주형이며 어릴 때는 가시 같은 돌기가 있고 녹색에서 짙은 황갈색으로 익으며 종자는 황백색이다. 
                오이는 중요한 식용 작물의 하나이며 즙액은 뜨거운 물에 데었을 때 바르는 등 열을 식혀주는 기능도 한다. 
                많은 품종이 개발되어 있다.

            </div>
        );
    }
}

export{
    CoinInformation,
    CoinInformationHeader,
    CoinInformationContent
}