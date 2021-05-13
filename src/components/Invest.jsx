import React, { Component } from 'react';
import '../css/invest.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';

class MainWrapper extends Component{
    render(){
        return(
            <div className="invest_main_wrapper">
                <div>
                    <div class="invest_board">
                        <div>
                            <div>
                                크라우드 펀딩 투자
                            </div>
                        </div>
                        <div>
                            <div>
                                도시 농부들을 위한 양파 잘 키우는 법 1편 (200% 펀딩 달성!)
                            </div>
                            <div>
                                <img src="https://cityfarmerusa.com/wp-content/uploads/2017/04/planters-2-1024x452.jpg"/>
                                안녕하세요 도시농부입니다! 여러분의 후원을 통해 이번 시간에는 양파를 썩지않게 잘 키우는 법에 대해서...
                            </div>
                        </div>
                        <div>
                            <div>
                                도시 농부들을 위한 양파 잘 키우는 법 2편 (250% 펀딩 달성!)
                            </div>
                            <div>
                                <img src="https://images.squarespace-cdn.com/content/v1/57c8695d5016e11e71be1d83/1539208276427-A6W1NKM4I0T0D8WLVLQQ/ke17ZwdGBToddI8pDm48kD33KhhWEodMJvcytjXFyvFZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PIXZi3p8TzzCd5LBww9rBU5Je7LlmHzK_8BCOYYXjEaPwKMshLAGzx4R3EDFOm1kBS/490b4b863a1347ea9348b6bd50194534.jpg"/>
                                안녕하세요 도시농부입니다! 이번 시간에도 양파를 잘 키우는 여러가지 팁들에 대해서 알아보고자 합니다....
                            </div>
                        </div>
                        <div>
                            <div>
                                도시 농부들을 위한 양파 잘 키우는 법 3편 (300% 펀딩 달성!)
                            </div>
                            <div>
                                <img src="https://www.greenroofs.com/wp-content/uploads/2020/01/newslinks-urban_farming-011820sm.jpg"/>
                                안녕하세요 도시농부입니다! 양파에 대한 팁, 마지막 시간입니다! 오늘은 양파를 어떻게 하면 잘 수확할 수...
                            </div>
                        </div>
                    </div>
                </div>
                <div className="invest_right_wrapper">
                    <div>
                        <b>이 프로젝트 후원하기</b>
                        <hr/>
                        <p><b>313%</b> 달성</p>
                        <p><b>156,259,812</b>원 펀딩</p>
                        <p><b>4,553</b>명 지원</p>
                        <button className="btn-color-green1"  size="sm" >후원하기</button>
                    </div>
                    <div>
                        <b>프로젝트 요약</b>
                        <hr/>
                        <p> 이 프로젝트는 코로나19로 어려운 농가를 돕기 위해 양파를 기르는 팁을 알려 주고 관련 펀딩을 소개하는 프로젝트입니다.</p>
                    </div>
                </div>
            </div>
        );
    }
}



class Invest extends Component {    
    render() {
        return (
            <MainWrapper/>
        );
    }
}
export default Invest;