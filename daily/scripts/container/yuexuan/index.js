import React,{Component} from "react"
import {Link} from "react-router"

import {getDaily} from "../../actions"
import {connect} from "react-redux"
@connect(
    (state)=>({...state})
)
export default class Show extends Component{
    componentWillMount(){
        const {dispatch}=this.props;
        dispatch(getDaily("/daily"))
    }
    render(){
        const {daily}=this.props
        return(
            <div className="yuexuan">
                <div className="dailybox">
                {
                    daily.map((v,i)=>{
                        return(
                            <div key={i} className="dailyinner">
                                <div className="imgbox"><img src={v.focusArticle.focusImageUrl}/></div>
                                <div className="filter">
                                    <div className="sixwrap"><div id="six">{v.focusArticle.subjectText}</div></div>
                                </div>
                                <div className="pbox">
                                    <p className="p1">{v.focusArticle.subTitle1}</p>
                                    <p className="p2">{v.focusArticle.subTitle2}</p>
                                    <p className="p3">{v.focusArticle.desc}</p>
                                    <p className="p4">{v.focusArticle.authorName}</p>
                                </div>
                            </div>
                        )
                    })
                }
                </div>
            </div>
        )
    }
}