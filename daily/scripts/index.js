
import React from "react"
import ReactDOM,{render} from "react-dom"
import "../styles/index.less"
import "./utils/flexible"
import Layout from "./container"
import store from "./store"
import {Provider} from "react-redux"


var hotRender = ()=>{
    render(
       <Provider store={store}>
            <Layout/>
       </Provider>,
        app
    )
}

hotRender()