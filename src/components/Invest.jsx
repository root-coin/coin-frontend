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
                                코로나 19로 어려움을 겪는 농가들을 위한 후원
                            </div>
                            <div>
                                이 프로젝트는 코로나 19로 인해 침체된 농가들을 위해...
                            </div>
                        </div>
                    </div>
                </div>
                <div className="invest_right_wrapper">
                    <div>
                        <b>이 프로젝트 후원하기</b>
                        <hr/>
                        <p><b>363%</b> 달성</p>
                        <p><b>14,345,164</b>원 펀딩</p>
                        <p><b>3,553</b>명 지원</p>
                        <button>후원하기</button>
                    </div>
                    <div>
                        <b>프로젝트 요약</b>
                        <hr/>
                        <p> 이 프로젝트는 SWMaestro 지원을 받아 제작되었습니다.</p>
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