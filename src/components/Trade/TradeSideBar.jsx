import React, { Component } from 'react';
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
        console.log(this);
        if(this.props.selectedItem() != this)
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
        })
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


class SideBarRankingContent extends Component{
    render(){
        return(
            <div className="trade_sidebar_ranking_content">
                fdsa
            </div>
        );
    }
}

export{
    SideBar
}