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
                <SideBarCategoryContent coins={this.props.coins} changeFunc={this.props.changeFunc}/>
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
        this.props.changeFunc(this.props.coinName,this.props.price,this.props.coinId);
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
        // coinList={this.state.coins} changeFunc={this.changeFunc}
        let contents = [];
        for(let i=0;i<this.props.coins.length;i++){
            let name = this.props.coins[i].coinName;
            let price = this.props.coins[i].price;
            let coinId = this.props.coins[i].coinId;
            contents.push(
                <SideBarCategoryItem 
                coinName={name} 
                price={price} 
                changeFunc={this.props.changeFunc} 
                coinId={coinId}
                selectedItem={this.getSelectedItem} onSubmit={this.onSearchSubmit}/>
            )
        }
        return(
            <div className="trade_sidebar_category_content">
                {contents}
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
                <SlideBarRankingItem rank="1" nickname="asdf" amount="184850434"/>
                <SlideBarRankingItem rank="2" nickname="fdsa" amount="134840437"/>
                <SlideBarRankingItem rank="3" nickname="gags" amount="89852439"/>
                <SlideBarRankingItem rank="4" nickname="gnegawdf" amount="74335438"/>
                <SlideBarRankingItem rank="5" nickname="Swgwgasdf" amount="64852354"/>
                <SlideBarRankingItem rank="6" nickname="asdfgwr" amount="55125445"/>
                <SlideBarRankingItem rank="7" nickname="gagagw" amount="36453412"/>
                <SlideBarRankingItem rank="8" nickname="Sudfasdfwq" amount="21545335"/>
                <SlideBarRankingItem rank="9" nickname="Supergsf" amount="16545456"/>
                <SlideBarRankingItem rank="10" nickname="Superuser" amount="9485645"/>
                <SlideBarRankingItem rank="345" nickname="nayechan" amount="7453495"/>
            </div>
        );
    }
}

export{
    SideBar
}