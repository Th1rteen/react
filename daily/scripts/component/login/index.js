import React,{Component} from "react"
import axios from "axios"
import {Link,browserHistory} from "react-router"
import { message, Button } from 'antd';
import {Login} from "../../actions"
import {connect} from "react-redux"
@connect(
    (state)=>({...state})
)

export default class Discover extends Component{

    componentWillMount(){
        const {dispatch}=this.props;
    }
    info=()=>{
        message.info('你即将签订卖身契',1.5);
    }

    Login=()=>{
        const {dispatch}=this.props;
        const username=this.refs.user.value,password=this.refs.password.value;
        dispatch(Login("/login",username,password))
    }
    componentDidUpdate(){
        const {bug}=this.props
        if(bug==1){
            sessionStorage.user=this.refs.user.value
            message.success('登录成功',2,()=>{
                browserHistory.push("/")
            })
        }else{
            message.error('登录失败，请重新登录',1.5,()=>{
                this.refs.user.value="",
                this.refs.password.value=""
            })
        }
    }

    render(){
        const {Login,info}=this.props
        return(
            <div className="login">
                <div className="ltop"></div>
                <div className="group">
                    <p><input placeholder="输入用户名" ref="user"/></p>
                    <p><input placeholder="输入密码" ref="password" type="password"/></p>
                    <p><button onClick={this.Login}>登录</button></p>
                    <p className="goreg"><Link to="/register">立即注册</Link></p>
                </div>
                <div className="tip">登录后意味着你同意CHOICE的<Button type="primary" onClick={this.info}>《使用协议》</Button></div>
                
            </div>
        )
    }
}

