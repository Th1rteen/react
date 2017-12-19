import React,{Component} from "react"
import axios from "axios"
import {Link,browserHistory} from "react-router"

import {getSubscribe} from "../../actions"
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
        dispatch(getSubscribe("/subscribelist",user))
    }

    goback=()=>{
        browserHistory.push("/mine")
    }
    render(){
        const {sublist}=this.props
        return(
            <div className="sub">
                <div className="chead">
                    我的收藏
                    <i className="iconfont icon-arrow-left" onClick={this.goback}></i>
                </div>
                <div className="subbox">
                    {
                        sublist.map((item,i)=>{
                            return(
                                <div className="one" key={i}>
                                    <div><img src={item.imageUrl}/></div>
                                    <div className="filter">{item.secondarySpecialName}</div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

