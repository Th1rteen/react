import axios from "axios";
import store from "../store"

axios.defaults.baseURL = "http://120.78.188.228:8018";
// axios.defaults.baseURL = "http://localhost:8018";

//swiper列表
export function getList(url){
    return axios.get(url).then(res=>{
        return res.data
    }).then(json=>{
        return store.dispatch({type:"get_list",json})
    })
}
//作者列表
export function getAuthorList(url){
    return axios.get(url).then(res=>{
        return res.data
    }).then(json=>{
        return store.dispatch({type:"get_author_list",json})
    })
}
//热门
export function getHot(url){
    return axios.get(url).then(res=>{
        return res.data
    }).then(json=>{
        return store.dispatch({type:"get_hot",json})
    })
}
//分类
export function getClassify(url){
    return axios.get(url).then(res=>{
        return res.data
    }).then(json=>{
        return store.dispatch({type:"get_classify",json})
    })
}
//全部作者
export function getAllAuthor(url){
    return axios.get(url).then(res=>{
        return res.data
    }).then(json=>{
        return store.dispatch({type:"get_all_author",json})
    })
}
//热门作者
export function getHotAuthor(url){
    return axios.get(url).then(res=>{
        return res.data
    }).then(json=>{
        return store.dispatch({type:"get_hot_author",json})
    })
}
//返回
export function goback(){
    return{
        type:"goback"
    }
}
//活动
export function getActivity(url){
    return axios.get(url).then(res=>{
        return res.data
    }).then(json=>{
        return store.dispatch({type:"get_activity",json})
    })
}
//顶部
export function backtop(){
    return{
        type:"backtop"
    }
}
//每日
export function getDaily(url){
    return axios.get(url).then(res=>{
        return res.data
    }).then(json=>{
        return store.dispatch({type:"get_daily",json})
    })
}
//none
export  function share(val){
    return{
        type:"share",
        val
    }
}
//时尚
export function getFashion(url,id){
    return axios.get(url,{
        params:{
            id:id
        }
    }).then(res=>{
        return res.data
    }).then(json=>{
        return store.dispatch({type:"get_fashion",json})
    })
}
//login
export function Login(url,u,p){
    return axios.get((url),{
        params:{
            username:u,
            password:p
        }
    }).then(res=>{
        return store.dispatch({
            type:"login",
            ball:res.data
        })
    })
}
//register
export function Register(url,u,p){
    return axios.post((url),{
        params:{
            username:u,
            password:p
        }
    }).then(res=>{
        return store.dispatch({
            type:"register",
            ball:res.data
        })
    })
}
//收藏
export function collect(url,id,user){
    return axios.get(url,{
        params:{
            id:id,
            user:user
        }
    }).then(res=>{
        return store.dispatch({
            type:"collect",
            col:res.data
        })
    })
}
//collect
export function getCollect(url,user){
    return axios.get(url,{
        params:{
            user:user
        }
    }).then(res=>{
        return res.data
    }).then(json=>{
        return store.dispatch({type:"get_collect",json})
    })
}
//订阅
export function subscribe(url,id,user){
    return axios.get(url,{
        params:{
            id:id,
            user:user
        }
    }).then(res=>{
        return store.dispatch({
            type:"subscribe",
            sub:res.data
        })
    })
}
//subscribe
export function getSubscribe(url,user){
    return axios.get(url,{
        params:{
            user:user
        }
    }).then(res=>{
        return res.data
    }).then(json=>{
        return store.dispatch({type:"get_subscribe",json})
    })
}