import React,{Component} from "react"
import axios from "axios"
import {Link} from "react-router"

import {getList,getAuthorList,getHot,getClassify} from "../../actions"

import {connect} from "react-redux"
import { setInterval } from "core-js/library/web/timers";

@connect(
    (state)=>({...state})
)

export default class Discover extends Component{

    componentWillMount(){
        const {dispatch}=this.props;
        dispatch(getList("/swipe"))
        dispatch(getAuthorList("/author"))
        dispatch(getHot("/hot"))
        dispatch(getClassify("/classify"))
    }

    render(){
        const {list,authorlist,hot,classify}=this.props
        return(
            <div className="disc">
                <div className="listswipe">
                    <div className="swiper-container discy">
                        <div className="swiper-wrapper">
                            {
                                list.map((item,i)=>{
                                    return(
                                        <div className="swiper-slide listpic" key={i}><img src={item.image}/></div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                
                <div className="author">
                    <h1><span>—</span> 精选 KOL <span>—</span></h1>
                    <div className="swiper-container authorL">
                        <div className="swiper-wrapper authorwrap">
                            {
                                authorlist.map((item,i)=>{
                                    return(
                                        <div className="swiper-slide authorbox" key={i}>
                                            <img src={item.authorUrl}/>
                                            <p>{item.authorName}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <h2><Link to="/media" className="more"><span>——————————</span>查看更多<span>——————————</span></Link></h2>
                </div>

                <div className="hot">
                    <h1><span>—</span> 热门单品榜 <span>—</span></h1>
                    <div className="topF">
                    {
                        hot.map((item,i)=>{
                            return(
                                <div className="onebox" key={i}>
                                    <div><img src={item.image}/></div>
                                    <div className="filter">
                                        <p className="p1">{item.title}</p>
                                        <p>——</p>
                                        <p className="p2">{item.authorName}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                    </div>
                </div>

                <div className="classify">
                    <ul>
                        {
                            classify.map((item,i)=>{
                                return(
                                    <li key={i}>{item.specialName}</li>
                                )
                            })
                        }
                    </ul>
                    <div className="classwrap">
                        {
                            classify.map((item,i)=>{
                                return(
                                    <div className="classinner" id={item.specialNameEn} key={i}>
                                        {
                                            classify[i].secondaryList.map((val,idx)=>{
                                                return(
                                                    <Link key={idx} to={"/detail/"+val.secondarySpecialID}>
                                                        <div className="listone">
                                                            <div>
                                                                <img src={val.imageUrl}/>
                                                            </div>
                                                            <div className="filter">
                                                                <p>{val.secondarySpecialName}</p>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                )
                                            })
                                        }
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

                {/* <div className="backtop">
                    <i className="iconfont icon-fanhuidingbu"></i>
                </div> */}
            </div>
        )
    }

    // componentDidMount(){
    //     console.log(window)
    //     window.addEventListener('onscroll', function() {
    //         var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
    //         console.log(scrollTop);
    //     })
    // }

    componentDidUpdate(){
        setTimeout(() => {
            this.mySwiper1 = new Swiper(".discy",{
                loop:false,
                autoplay: false,
                direction:"horizontal",
                pagination: '.swiper-pagination',
                resistanceRatio:0,
                calculateHeight:true,
                initialSlide:0,
                autoHeight:true  
            });
        }, 100);
        
        setTimeout(() => {
            this.mySwiper2 = new Swiper(".authorL",{
                slidesPerView: 4,
                spaceBetween: 0,
                centeredSlides: true
            });
        }, 100);
        
    }
}

