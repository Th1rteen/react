import React,{Component} from "react"
import axios from "axios"
import {Link} from "react-router"
import {getFashion,goback,subscribe} from "../../actions"

import { message } from 'antd'
import {connect} from "react-redux"
@connect(
    (state)=>({...state})
)

export default class Detail extends Component{

    componentWillMount(){
        const {dispatch}=this.props;
        const id=this.props.params.id
        dispatch(getFashion("/fashion",id))
    }
    ding=(i)=>{
        const {dispatch}=this.props
        var user=sessionStorage.user
        if(sessionStorage.user==undefined){
            message.info("请先登录!",1.5)
        }else{
            dispatch(subscribe("/subscribe",i,user))
        }
    }
    componentDidUpdate(){
        const {sub}=this.props
        if(sub=="0"){
            message.success("订阅成功",1.5)
        }else if(sub=="1"){
            message.warning("你已订阅",1.5)
        }
    }
    render(){
        const {fashion,dispatch}=this.props
        if(fashion.length>0){
            var html = 
            <div>
                <div className="imgbox">
                    <div className="b1"><img src={fashion[0].imageUrl}/></div>
                    <div className="filter">
                        <p className="p1">{fashion[0].secondarySpecialName}</p>
                        <p className="p2">{fashion[0].secondarySpecialText}</p>
                        <p className="subscribe" id="subscribe" onClick={()=>this.ding(fashion[0].secondarySpecialID)}>订阅</p>
                    </div>
                    <div className="back" onClick={()=>dispatch(goback())}><i className="iconfont icon-arrow-left"></i></div>
                </div>
                <h1>文章</h1>
                <div className="cont">
                    {
                        fashion[0].articleList.map((val,i)=>{
                            return(
                                <dl key={i}>
                                    <dt><img src={val.imageUrl}/></dt>
                                    <dd>
                                        <p className="p1">{val.title}</p>
                                        <p className="p2">来自于 <span>{val.authorName}</span></p>
                                    </dd>
                                </dl>
                            )
                        })
                    }
                </div>
            </div>
            
        }
        return(
            <div className="detail">
                {html}
            </div>
        )
    }
}

