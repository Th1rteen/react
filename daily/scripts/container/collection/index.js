import React,{Component} from "react"
import axios from "axios"
import {Link,browserHistory} from "react-router"

import {getCollect,share} from "../../actions"
import { message } from 'antd';
import {connect} from "react-redux"
import { relative } from "path";
var flag=true;
@connect(
    (state)=>({...state})
)

export default class Discover extends Component{

    componentWillMount(){
        const {dispatch}=this.props;
        var user=sessionStorage.user
        dispatch(getCollect("/collections",user))
    }

    change=()=>{
        const {dispatch}=this.props;
        if(flag){
            dispatch(share("block"))
        }else{
            dispatch(share("none"))
        }
        flag=!flag;
    }
    goback=()=>{
        browserHistory.push("/mine")
    }
    actv=()=>{
        message.info("活动已结束",1.5)
    }
    render(){
        const {collection,dispatch,sharev}=this.props
        return(
            <div className="coll">
                <div className="chead">
                    我的收藏
                    <i className="iconfont icon-arrow-left" onClick={this.goback}></i>
                </div>
                <div className="activitybox">
                    <div id="top"></div>
                    {
                        collection.map((item,i)=>{
                            return(
                                <div className="one" key={i}>
                                    <div className="imgbox"><img src={item.imageUrl}/></div>
                                    <div className="subtitle">{item.activityTypeName?item.activityTypeName:"话题 · Topic"}</div>
                                    <p className="p1">{item.activityTitle}</p>
                                    <p className="p2">{item.activitySubTitle}</p>
                                    <p className="p3">{item.desc}</p>
                                    <p className="p4">已结束</p>
                                    <ul>
                                        <li>
                                            <div className="Cc"><i className="iconfont icon-xin"></i></div>
                                            <span>收藏</span>
                                        </li>
                                        <li onClick={this.actv}>
                                            <div><i className="iconfont icon-join"></i></div>
                                            <span>参加</span>
                                        </li>
                                        <li onClick={this.change}>
                                            <div><i className="iconfont icon-fenxiang"></i></div>
                                            <span>分享</span>
                                        </li>
                                    </ul>
                                </div>
                            )
                        })
                    }
                    <Link className="backtop" to="#top">
                        <i className="iconfont icon-fanhuidingbu"></i>
                    </Link>
                    <div className="shadow" style={{display:sharev}}>
                        <div className="share">
                            <ul>
                                <li><i className="iconfont icon-weibo"></i></li>
                                <li><i className="iconfont icon-qq"></i></li>
                                <li><i className="iconfont icon-weixin"></i></li>
                                <li><i className="iconfont icon-pengyouquan"></i></li>
                            </ul>
                            <button onClick={this.change}>取消</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

