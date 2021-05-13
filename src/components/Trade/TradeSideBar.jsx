import React, { Component } from 'react';
import axios from 'axios'
import '../../css/trade.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, NavbarBrand } from 'react-bootstrap';

class SideBar extends Component {
    constructor(props){
        super(props);
        this.toggleCategoryOrRanking=this.toggleCategoryOrRanking.bind(this);        
        this.state={
            categoryOrRanking : 1
        }
    }
    toggleCategoryOrRanking(choice){
        console.log(choice);    
        this.setState(()=>{
            return {categoryOrRanking: choice};
        });
    }
    render() {
        if(this.state.categoryOrRanking == 1)
        return (
            <div className="trade_sidebar">
                <SideBarHeader 
                toggleCategoryOrRanking={this.toggleCategoryOrRanking}/>
                <SideBarCategoryContent/>
            </div>
        );
        else
        return (
            <div className="trade_sidebar">
                <SideBarHeader
                toggleCategoryOrRanking={this.toggleCategoryOrRanking}/>
                <SideBarRankingContent/>
            </div>
        );
    }
}

class SideBarHeader extends Component{
    render(){
        return(
            <div className="trade_sidebar_header">
                <div className="trade_sidebar_header_tab">
                    <Nav
                        onSelect={(selectedKey) => {
                            switch (selectedKey) {
                                case "category":
                                    console.log(this.props);
                                    this.props.toggleCategoryOrRanking(1);
                                    break;
                                case "ranking":
                                    console.log(this.props);
                                    this.props.toggleCategoryOrRanking(2);
                                    break;
                            }
                        }}
                    >
                        <Nav.Item>
                            <Nav.Link eventKey="category">종목</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="ranking">랭킹</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </div>
            </div>
        );
    }
}

class SideBarCategoryItem extends Component{
    static lock = false;
    constructor(){
        super();
        this.select = this.select.bind(this);
        this.state={
            font_weight: 'normal'
        }
    }
    select(){
        this.props.onSubmit(this);
    }
    render(){
        let item = this.props.selectedItem();
        if(item == null)
        {
            //서버에서 제공하는 맨 첫번째 객체와 이 객체가 일치하면
            //this.props.onSubmit(this);
        }
        if(item != this)
        {
            return (
                    <div className="trade_sidebar_category_item" style={{fontWeight: 'normal'}} onClick={this.select}>
                        <span>{this.props.coinName}</span>
                        <span>{this.props.price} KRW</span>
                    </div>
            );
        }
        else
        {
            return (
                <div className="trade_sidebar_category_item" style={{fontWeight: 'bold'}} onClick={this.select}>
                    <span>{this.props.coinName}</span>
                    <span>{this.props.price} KRW</span>
                </div>

            );
        }
        
        
    };
}

class SideBarCategoryContent extends Component{
    constructor(){
        super();
        this.onSearchSubmit = this.onSearchSubmit.bind(this);
        this.getSelectedItem = this.getSelectedItem.bind(this);
        this.state={
            selected: null
        }
    }
    onSearchSubmit(selectedItem){
        this.setState({
            selected: selectedItem
        });
        //selectedItem으로 설정
    }
    getSelectedItem(){
        console.log(this.state.selected);
        return this.state.selected;
    }
    render(){
        return(
            <div className="trade_sidebar_category_content">
                <SideBarCategoryItem coinName="감자" price="830" selectedItem={this.getSelectedItem} onSubmit={this.onSearchSubmit}/>
                <SideBarCategoryItem coinName="고구마" price="920" selectedItem={this.getSelectedItem} onSubmit={this.onSearchSubmit}/>
                <SideBarCategoryItem coinName="토마토" price="220" selectedItem={this.getSelectedItem} onSubmit={this.onSearchSubmit}/>
                <SideBarCategoryItem coinName="쪽파" price="1550" selectedItem={this.getSelectedItem} onSubmit={this.onSearchSubmit}/>
            </div>
        );
    }
}

class SlideBarRankingItem extends Component{
    render(){
        return(
            <div className="trade_sidebar_ranking_item">
                <span>{this.props.rank}</span>
                <span>{this.props.nickname}</span>
                <span>{this.props.amount}p</span>
            </div>
        );
    }
}


class SideBarRankingContent extends Component{
    render(){
        return(
            <div className="trade_sidebar_ranking_content">
                <SlideBarRankingItem rank="1" nickname="RootCoin" amount="59,123,734"/>
                <SlideBarRankingItem rank="2" nickname="나예찬" amount="47,634,143"/>
                <SlideBarRankingItem rank="3" nickname="강재현" amount="43,312,654"/>
                <SlideBarRankingItem rank="4" nickname="이재환" amount="38,912,342"/>
                <SlideBarRankingItem rank="5" nickname="송기연" amount="34,657,134"/>
                <SlideBarRankingItem rank="6" nickname="홍길동" amount="31,336,126"/>
                <SlideBarRankingItem rank="7" nickname="김태형" amount="29,965,123"/>
                <SlideBarRankingItem rank="8" nickname="유재석" amount="27,664,145"/>
                <SlideBarRankingItem rank="9" nickname="임동진" amount="26,341,948"/>
                <SlideBarRankingItem rank="10" nickname="Anonymous" amount="25,996,124"/>
            </div>
        );
    }
}

export{
    SideBar
}