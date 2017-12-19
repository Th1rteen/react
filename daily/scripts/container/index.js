import React, {Component} from "react"
import {render} from "react-dom"
import {Router,Route,IndexRedirect, Redirect,hashHistory} from "react-router"

var app = document.getElementById("app")

import Show from "./show"

import Discover from "./discover"
import Activity from "./activity"
import Yuexuan from "./yuexuan"

import Media from "./media"
import All from "./media/allauthor"
import Hot from "./media/hotauthor"

import Login from "../component/login"
import Register from "../component/register"

import Mine from "./mine"
import Collection from "./collection"
import Subscribe from "./subscribe"

import Detail from "./detail"

    

export default class Layout extends Component{
    render(){
        return(
            <Router history={hashHistory}>
                <Redirect from="/react/dist" to="/" />
                <Route path="/" component={Show}>
                    <IndexRedirect to="/yuexuan"/>
                    <Route path="/discover" component={Discover}></Route>
                    <Route path="/yuexuan" component={Yuexuan}></Route>
                    <Route path="/activity" component={Activity}></Route>
                </Route>
                <Route path="/media" component={Media}>
                    <IndexRedirect to="/media/hot"/>
                    <Route path="/media/all" component={All}/>
                    <Route path="/media/hot" component={Hot}/>
                </Route>
                <Route path="/login" component={Login}></Route>  
                <Route path="/register" component={Register}></Route>  
                <Route path="/mine" component={Mine}></Route>   
                <Route path="/detail/:id" component={Detail}></Route>
                <Route path="/collection" component={Collection}></Route>   
                <Route path="/subscribe" component={Subscribe}></Route>  
            </Router>
        )
    }
}