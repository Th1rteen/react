import React,{Component} from "react"
import {Link} from "react-router"

import {goback} from "../../actions"
import {connect} from "react-redux"
@connect(
    (state)=>({...state})
)
export default class Show extends Component{
    componentWillMount(){
        const {dispatch}=this.props;
    }
    render(){
        const {mediaName,dispatch}=this.props
        return(
            <div className="wrap1">
                <div className="header">
                    <i className="iconfont icon-arrow-left" onClick={()=>dispatch(goback())}></i>
                    {mediaName}
                </div>
                <ul className="mediabox">
                    <li><Link to="/media/all" activeClassName="active_m">全部</Link></li>
                    <li><Link to="/media/hot" activeClassName="active_m">热门</Link></li>
                </ul>
                {this.props.children}
            </div>
            
        )
    }
}