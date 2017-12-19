import React,{Component} from "react"
import axios from "axios"
import {Link} from "react-router"

import { message } from 'antd'
import {connect} from "react-redux"
@connect(
    (state)=>({...state})
)

export default class Discover extends Component{

    componentWillMount(){
        const {dispatch}=this.props;
    }
    componentDidMount(){
        if(sessionStorage.user==undefined){
            document.getElementById("Name").innerHTM="点击登录"
        }else{
            document.getElementById("Name").innerHTML=sessionStorage.user
        }
    }
    goback=()=>{
        this.props.router.goBack();
    }
    quit=()=>{
        sessionStorage.clear()
        location.reload()
    }
    gocollect=()=>{
        var user=sessionStorage.user
        if(!user){
            message.info("请先登录",1.5)
        }else{
            browserHistory.push("/collection")
        }
    }
    gosub=()=>{
        var user=sessionStorage.user
        if(!user){
            message.info("请先登录",1.5)
        }else{
            browserHistory.push("/subscribe")
        }
    }
    render(){
        const {}=this.props
        return(
            <div className="mine">
                <div className="top">
                    <div className="head"></div>
                    <p className="clogin"><Link to="/login" id="Name">点击登录</Link></p>
                    <p className="subtxt">种草全球时尚</p>
                    <i className="iconfont icon-arrow-left" onClick={this.goback}></i>
                </div>
                <div className="foot">
                    <ul>
                        <li onClick={this.gosub}>
                            <div><i className="iconfont icon-book"></i></div>
                            <p>订阅</p>
                        </li>
                        <li onClick={this.gocollect}>
                            <div><i className="iconfont icon-xin"></i></div>
                            <p>收藏</p></li>
                        <li><a>
                            <div><i className="iconfont icon-xinxi"></i></div>
                            <p>消息</p>
                        </a></li>
                        <li onClick={this.quit}><a>
                            <div><i className="iconfont icon-tuichudenglu01"></i></div>
                            <p>退出登录</p>
                        </a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

