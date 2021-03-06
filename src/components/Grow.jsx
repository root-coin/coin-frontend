import React, { Component } from 'react';
import '../css/grow.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

class ImgUpload extends Component {
    constructor(props){
        super(props);
        this.state = {
            file : '',
            previewURL : ''
        }
    }
    handleFileOnChange = (e)=>{
        e.preventDefault();
        let reader = new FileReader();
        let file = e.target.files[0];
        reader.onloadend = () => {
            this.setState({
                file : file,
                previewURL : reader.result
            })
        }
        reader.readAsDataURL(file);
    }
    render(){
        let preview = null;
        if(this.state.file !==''){
            preview = <img className='preview' src={this.state.previewURL}></img>
        }
        return(
            <div>
                <div>
                    {preview}
                    <input
                        type="file"
                        accept = "image/*"
                        onChange={this.handleFileOnChange}
                    />
                </div>
            </div>
        )
    }
}

class GUI extends Component {
    render(){
        let itemImg = null;
        if(this.props.level===-1) itemImg=(<button class="big-button" onClick={this.props.startButton}>start</button>);
        else {
            if(this.props.level===0) itemImg=(<img src="./imgs/level0.png"></img>)
            if(this.props.level===1) itemImg=(<img src="./imgs/level1.png"></img>)
            if(this.props.level===2) itemImg=(<img src="./imgs/level2.png"></img>)
            if(this.props.level===3) itemImg=(<img src="./imgs/level3.png"></img>)
            if(this.props.level===4) itemImg=(<img src="./imgs/level4.png"></img>)
            if(this.props.level===5) itemImg=(<img src="./imgs/level5.png"></img>)
            if(this.props.level===6){
                itemImg = <img src="./imgs/level6.png" style={{"border-radius" : "50%"}}></img>
            }
        }
        return (
            <div>
                <div className="gui_item">
                    {itemImg}
                </div>
                <div className="backButton" onClick={this.props.rollbackButton}>
                   <Button variant="primary">????????????</Button>
                </div>
            </div>
        )
    }
}

class Message extends Component{
    componentDidMount(){
        if(this.inputArea!==undefined){
            this.inputArea.focus();
        }
    }
    render(){
        let msg;
        if(this.props.readonly) msg = this.props.msg;
        else {
            msg =
            <div
                className="message_typing"
                contentEditable="true"
                ref={(input) => { this.inputArea = input; }}
                onKeyPress={this.props.handleKeyPress}
            ></div>
        }
        return (
            <div className="message_wrapper">
                <div className="message_arrow">{">"}</div>
                <div className="message_msg">{msg}</div> :
            </div>
        )
    }
}

class ImgModal extends Component{
    render(){
        return (
            <>
                <Modal show={this.props.show} onHide={this.props.handleClose}>
                    <Modal.Header>
                        <Modal.Title>??????????????????</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <ImgUpload/>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.props.handleClose}>
                            ??????
                        </Button>
                        <Button variant="primary" onClick={this.props.handleSend}>
                            ??????
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        )
    }
}

class Grow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show : false,
            level : -1,
            humidity : 0,
            hungry : 0,
            messages : [
                {
                    msg : "???????????????",
                    readonly : true
                },
                {
                    msg : "????????? ?????? ????????? ???????????????",
                    readonly : true
                }
            ]
        }
        this.goalState = [0,[55,45],[60,40],[70,30],[80,20]];
        // this.goalState = [0,[50,50],[50,50],[50,50],[50,50]];
        this.responseMessages = {
            '?????????' : 0,
            '????????????' : 1,
            '????????????' : 2,
            '????????????' : 3,
            '?????????' : 4,
            '??????' : 5,
            '??????' : 6
        }
    }
    componentDidMount(){
        this.handleLoad();
    }
    translateInput = (input)=>{
        let result = null;
        if(input === 0) {
            result = '?????? ???????????????';
        }
        else if(input === 1){
            result = '????????? ???????????????';
        }
        else if(input === 2) {
            result = [
                'LV : ',
                this.state.level,
                <br/>,
                '????????????',
                <br/>,
                '?????? : ',
                this.state.humidity,
                <br/>,
                '????????? : ',
                this.state.hungry
            ];
        }
        else if(input === 3){
            result = '?????????????????? ???????????????.'
        }
        else if(input === 4){
            result = ["=====?????????====="];
            let keys = Object.keys(this.responseMessages);
            for(let i=0;i<keys.length;i++){
                result.push([<br/>]);
                result.push(`${i+1}. ${keys[i]}`)
            }
            result.push([<br/>]);
            result.push(`${keys.length+1}. ??????(?????? 5??? ??????)`);
        }
        else if(input === 5){
            result = "????????? ???????????????"
        }
        else if(input === 6){
            result = "?????? ????????? ???????????????"
        }
        return result
    }

    getReadOnlyMessage = ()=>{
        let result = [];
        for(let i=0;i<this.state.messages.length;i++){
            if(this.state.messages[i].readonly){
                result.push(this.state.messages[i]);
            }
        }
        return result;
    }

    //modal function
    handleClose = ()=>{
        this.setState({
            show : false
        })
    }
    handleShow = ()=>{
        this.setState({
            show : true
        })
    }
    handleSend = ()=>{
        let newMessages = this.getReadOnlyMessage();
        newMessages.push({
            msg : ["?????????????????????",<br/>,'????????? ????????????!'],
            readonly : true
        })
        newMessages.push({ msg : "", readonly : false });
        this.setState({
            level : this.state.level+1,
            humidity : 50,
            hungry : 50,
            messages : newMessages,
        })
        this.handleClose();
    }

    //start and rollback button
    startButton = ()=>{
        let newMessages = this.getReadOnlyMessage();
        newMessages.push({
            msg : "????????? ???????????????. ????????? ???????????????",
            readonly : true
        })
        newMessages.push({ msg : "", readonly : false })
        this.setState({
            level: 0,
            humidity : 50,
            hungry : 50,
            messages : newMessages
        })
    }

    rollbackButton = ()=>{
        this.setState({
            show : false,
            level : -1,
            humidity : 0,
            hungry : 0,
            messages : [
                {
                    msg : "???????????????",
                    readonly : true
                },
                {
                    msg : "????????? ?????? ????????? ???????????????",
                    readonly : true
                }
            ]
        })
    }
    handleLoad = ()=>{
        fetch('api/grow/load', {
            method: "GET",
            headers: {
                'Content-type' : 'application/json'
            },
        })
        .then(response => response.json())
        .then(response => {
            console.log("response data");
            console.log(response);
            if(response.error){
                window.location.href = "/login"
            } else {
                if(response.Item!==null){
                    this.setState({
                        level : response.Item.level,
                        humidity : response.Item.humidity,
                        hungry : response.Item.hungry,
                        messages : [{
                            msg : this.translateInput(4),
                            readonly : true
                        },{
                            msg : "",
                            readonly : false
                        }]
                    })
                }
            }
        })
    }

    handleSave = ()=>{
        let humidity = this.state.humidity;
        let hungry = this.state.hungry;
        let level = this.state.level;
        fetch('api/grow/save', {
            method: "POST",
            headers: {
                'Content-type' : 'application/json'
            },
            body: JSON.stringify({
                    level : this.state.level,
                    humidity : this.state.humidity,
                    hungry : this.state.hungry,
            })
        })
        .then(response => response.json())
        .then(response => {
            console.log(response);
        })
        alert("????????????");
    }

    //terminal input response
    handleKeyPress = (e)=>{
        if(e.key==='Enter'){
            let val = document.querySelector('.message_typing').innerHTML;
            let newMessages = this.getReadOnlyMessage();
            let levelUp = false;
            if(val === ""){
                newMessages.push({
                    msg : "???????????? ??????????????????",
                    readonly : true
                })
            }
            else {
                newMessages.push({
                    msg : val,
                    readonly : true
                })

                let nowLevel = this.state.level;
                if(nowLevel === 0){
                    //grow started
                    newMessages.push({ msg : `"${val}" ?????? ???????????????!`, readonly: true})
                    newMessages.push({ msg : this.translateInput(4), readonly : true });
                    levelUp = true;
                }
                else if(nowLevel === 5){
                    //grow finished
                    if(val === "??????"){
                        newMessages.push({ msg : '????????????????????? 10???????????? ?????????????????????.', readonly : true });
                        levelUp = true;
                    }
                    else {
                        newMessages.push({ msg : '?????? ????????? ????????? ?????????.', readonly : true });
                    }
                }
                else {
                    //in growing
                    if(this.responseMessages[val]===undefined){
                        newMessages.push({ msg : '????????? ???????????????.', readonly : true });
                    }
                    else {
                        let resMsg = this.translateInput(this.responseMessages[val]);
                        if(val==="?????????"){
                            this.setState({
                                humidity:this.state.humidity+6,
                                hungry:this.state.hungry+3,
                            })
                        } else if(val==="????????????"){
                            this.setState({
                                humidity:this.state.humidity-3,
                                hungry:this.state.hungry-6,
                            })
                        } else if(val==="????????????"){
                            newMessages = [];
                        } else if(val=="??????"){
                            if(this.goalState[this.state.level][0]<=this.state.humidity &&
                                this.goalState[this.state.level][1]>=this.state.hungry){
                                this.handleShow();
                            } else {
                                resMsg = [
                                    '????????? ???????????? ???????????????',
                                    <br/>,
                                    `???????????? : ${this.goalState[this.state.level][0]}, ???????????? : ${this.state.humidity}`,
                                    <br/>,
                                    `??????????????? : ${this.goalState[this.state.level][1]}, ??????????????? : ${this.state.hungry}`,
                                ]
                            }
                        } else if(val==="??????"){
                            this.handleSave();
                        }

                        //input response message
                        newMessages.push({ msg : resMsg, readonly : true})
                    }
                }
            }
            //input terminal
            newMessages.push({
                msg : "",
                readonly : false
            })
            this.setState({
                level : (levelUp ? this.state.level+1 : this.state.level),
                messages : newMessages
            })
            e.preventDefault();
        }
    }

    render() {
        let messages = [];
        for(let i=0;i<this.state.messages.length;i++){
            console.log(this.state.messages[i].msg)
            console.log(this.state.messages[i].readonly)
            messages.push(
                <Message
                    key={i}
                    msg={this.state.messages[i].msg}
                    readonly={this.state.messages[i].readonly}
                    handleKeyPress={this.handleKeyPress}>
                </Message>
            );
        }
        return (
            <div className="grow_back">
                <div className="grow_box">
                    <div className="grow_left">
                        <img src="./imgs/paper2.png"/>
                        <GUI
                            startButton={this.startButton}
                            rollbackButton={this.rollbackButton}
                            level={this.state.level}
                            humidity={this.state.humidity}
                            hungry={this.state.hungry}
                        />
                    </div>
                    <div className="grow_right sc2">
                        {messages}
                    </div>
                </div>
                <ImgModal
                    show={this.state.show}
                    handleClose={this.handleClose}
                    handleSend={this.handleSend}
                />
            </div>
        );
    }
}
export default Grow;