import React,{Component} from "react"
import {Link} from "react-router"
import {getHotAuthor} from "../../actions"
import {connect} from "react-redux"
@connect(
    (state)=>({...state})
)
export default class Show extends Component{
    componentWillMount(){
        const {dispatch}=this.props;
        dispatch(getHotAuthor("/hotauthor"))
    }
    render(){
        const {hotauthor}=this.props
        return(
            <div className="mediachild">
                <ul>
                    {
                        hotauthor.map((item,i)=>{
                            return(
                                <li key={i}>
                                    <dl>
                                        <dt><img src={item.authorUrl}/></dt>
                                        <dd>
                                            <p className="p1">{item.authorName}</p>
                                            <p className="p2">文章 {item.articleNum}</p>
                                            <p className="p3">{item.desc}</p>
                                        </dd>
                                    </dl>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            
        )
    }
}