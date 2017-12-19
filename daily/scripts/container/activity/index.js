import React,{Component} from "react"
import axios from "axios"
import {Link,browserHistory} from "react-router"

import {getActivity,share,collect} from "../../actions"
import { message } from 'antd';
import {connect} from "react-redux"
var flag=true;
@connect(
    (state)=>({...state})
)

export default class Discover extends Component{

    componentWillMount(){
        const {dispatch}=this.props;
        dispatch(getActivity("/activity"))
    }
    handle=(i)=>{
        const {dispatch}=this.props;
        var user=sessionStorage.user
        if(sessionStorage.user==undefined){
            message.info("请先登录!",1.5)
        }else{
            dispatch(collect("/collect",i,user))
        }
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
    componentDidUpdate(){
        const {coll}=this.props
        if(coll=="0"){
            message.success('收藏成功',1.5)
        }else if(coll=="1"){
            message.info("你已收藏",1.5)
        }
    }
    actv=()=>{
        message.info("活动已结束",1.5)
    }
    render(){
        const {activity,dispatch,sharev,handle}=this.props
        return(
            <div className="activitybox">
                <div id="top"></div>
                {
                    activity.map((item,i)=>{
                        return(
                            <div className="one" key={i}>
                                <div className="imgbox"><img src={item.imageUrl}/></div>
                                <div className="subtitle">{item.activityTypeName?item.activityTypeName:"话题 · Topic"}</div>
                                <p className="p1">{item.activityTitle}</p>
                                <p className="p2">{item.activitySubTitle}</p>
                                <p className="p3">{item.desc}</p>
                                <p className="p4">已结束</p>
                                <ul>
                                    <li onClick={()=>this.handle(item.activityID)}>
                                        <div><i className="iconfont icon-xin"></i></div>
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
                {/* <Link className="backtop" to="#top">
                    <i className="iconfont icon-fanhuidingbu"></i>
                </Link> */}
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
        )
    }
}

