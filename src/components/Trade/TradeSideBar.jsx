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
                            <Nav.Link eventKey="category">??????</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="ranking">??????</Nav.Link>
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
            //???????????? ???????????? ??? ????????? ????????? ??? ????????? ????????????
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
        //selectedItem?????? ??????
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
                <SlideBarRankingItem rank="1" nickname="RootCoin" amount="59,123,734"/>
                <SlideBarRankingItem rank="2" nickname="?????????" amount="47,634,143"/>
                <SlideBarRankingItem rank="3" nickname="?????????" amount="43,312,654"/>
                <SlideBarRankingItem rank="4" nickname="?????????" amount="38,912,342"/>
                <SlideBarRankingItem rank="5" nickname="?????????" amount="34,657,134"/>
                <SlideBarRankingItem rank="6" nickname="?????????" amount="31,336,126"/>
                <SlideBarRankingItem rank="7" nickname="?????????" amount="29,965,123"/>
                <SlideBarRankingItem rank="8" nickname="?????????" amount="27,664,145"/>
                <SlideBarRankingItem rank="9" nickname="?????????" amount="26,341,948"/>
                <SlideBarRankingItem rank="10" nickname="Anonymous" amount="25,996,124"/>
            </div>
        );
    }
}

export{
    SideBar
}