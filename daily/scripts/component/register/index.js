import React,{Component} from "react"
import axios from "axios"
import {Link,browserHistory} from "react-router"
import { message, Button } from 'antd';
import {Register} from "../../actions"
import {connect} from "react-redux"
@connect(
    (state)=>({...state})
)

export default class Discover extends Component{

    componentWillMount(){
        const {dispatch}=this.props;
    }
    Register=()=>{
        var istrue=true;
        const {dispatch}=this.props;
        const username=this.refs.userp.value,password=this.refs.passp.value;
        if(username.length==0){
            message.warning('用户名不能为空',2);
            istrue = false;
        }
        else if(!/^[0-9a-zA-Z\u4e00-\u9fa5_]{6,16}$/.test(username)){
            message.warning('用户名必须为6-20位的数字、字母、汉字、_!',2);
            istrue = false;
        }
        else if(password.length<6 || password.length>16){
            message.warning('密码不能小于6位或大于16位!',2);
            istrue = false;
        }
        else if(!/^[a-zA-Z\d_]{6,16}$/.test(password)){
            message.warning( '密码只能由字母数字下划线组成!',2);
            istrue = false;
        }
        if(istrue){
            dispatch(Register("/register",username,password))
        }
    }
    componentDidUpdate(){
        const {bug}=this.props
        if(bug==0){
            message.success('注册成功',1.5,()=>{
                browserHistory.push("/login")
            })
        }else{
            message.error('注册失败',1.5)
        }
    }

    render(){
        const {}=this.props
        return(
            <div className="login">
                <div className="ltop"></div>
                <div className="group">
                    <p><input placeholder="输入用户名" ref="userp"/></p>
                    <p><input placeholder="输入密码" ref="passp" type="password"/></p>
                    <p><button onClick={this.Register}>注册</button></p>
                    <p className="goreg"><Link to="/login">已有账号，登录</Link></p>
                </div>
            </div>
        )
    }
}

