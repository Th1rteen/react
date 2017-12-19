import {hashHistory} from "react-router"
var initState = {
    nav:[
        {name:"发现",path:"/discover"},
        {name:"悦选",path:"/yuexuan"},
        {name:"活动",path:"/activity"}
    ],
    list:[],
    authorlist:[],
    hot:[],
    classify:[],
    mediaName:"自媒体",
    allauthor:[],
    hotauthor:[],
    activity:[],
    daily:[],
    sharev:"none",
    fashion:[],
    bug:"",
    coll:"",
    collection:[],
    sub:"",
    sublist:[]
}


export default (state=initState,action)=>{
    switch(action.type){
        
        case "get_list":
        state.list = action.json;
        return Object.assign({},state);
        break;
        
        case "get_author_list":
        state.authorlist = action.json;
        return Object.assign({},state);
        break;

        case "get_hot":
        state.hot = action.json;
        return Object.assign({},state);
        break;
        
        case "get_classify":
        state.classify = action.json;
        return Object.assign({},state);
        break;

        case "get_all_author":
        state.allauthor = action.json;
        return Object.assign({},state);
        break;

        case "get_hot_author":
        state.hotauthor = action.json;
        return Object.assign({},state);
        break;

        case "goback":
        hashHistory.push("/discover");
        return Object.assign({},state);
        break;
        
        case "get_activity":
        state.activity = action.json;
        return Object.assign({},state);
        break;

        // case "backtop":
        // browserHistory.push("/");
        // return Object.assign({},state);
        // break;

        case "get_daily":
        state.daily = action.json;
        return Object.assign({},state);
        break;

        case "share":
        state.sharev = action.val;
        return Object.assign({},state);
        break;

        case "get_fashion":
        state.fashion = action.json;
        return Object.assign({},state);
        break;

        case "login":
        state.bug = action.ball;
        return Object.assign({},state);
        break;

        case "register":
        state.bug = action.ball;
        return Object.assign({},state);
        break;
        
        case "collect":
        state.coll = action.col;
        return Object.assign({},state);
        break;

        case "get_collect":
        state.collection = action.json;
        return Object.assign({},state);
        break;

        case "subscribe":
        state.sub = action.sub;
        return Object.assign({},state);
        break;
        
        case "get_subscribe":
        state.sublist = action.json;
        return Object.assign({},state);
        break;

        default:
        return Object.assign({},state);
        break;
    }
}