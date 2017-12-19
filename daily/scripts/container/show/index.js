import React,{Component} from "react"
import "../../utils/swiper-3.3.1.min"

import {Link} from "react-router"
import {connect} from "react-redux"
@connect(
    (state)=>({...state})
)
export default class Show extends Component{
    // constructor(props){
    //     super(props),
    //     this.state={
    //         swiperIndex:0
    //     }
        
    // }
    // changeIndex=(i)=>{
    //     this.mySwiper.slideTo(i,500)
    // }

    render(){
        const {nav}=this.props
        // const {swiperIndex}=this.state
        return(
            <div className="wrap">
                <div className="navbox">
                    <div className="navtit">
                        {
                            nav.map((item,index)=>{
                                return(
                                    // <div key={index} onClick={()=>{this.changeIndex(index)}} className={swiperIndex==index?"nav_active":""}>{item.name}</div>
                                    <Link key={index} activeClassName="navbtn" to={item.path}>{item.name}</Link>
                                )
                            })
                        }
                    </div>
                    <Link to="/mine" className="my"><i className="iconfont icon-wode"></i></Link> 
                </div>
                {this.props.children}
                {/* <div className="swiper-container" id="swiper-c">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide"><Discover/></div>
                        <div className="swiper-slide">Slide 2</div>
                        <div className="swiper-slide"><Activity/></div>
                    </div>
                </div> */}
            </div>
        )
    }
    // componentDidMount(){
    //     const {swiperIndex} = this.state
    //     var that = this
    //     this.mySwiper = new Swiper("#swiper-c",{
    //         loop:false,
    //         autoplay: false,
    //         direction:"horizontal",
    //         pagination: '.swiper-pagination',
    //         resistanceRatio:0,
    //         calculateHeight:true,
    //         initialSlide:0,
    //         autoHeight:true,
    //         onSlideChangeEnd(swiper){
    //             // console.log(swiper.activeIndex)  //swiper.activeIndex 当前位置
    //             // console.log(swiperIndex)
    //             that.setState({
    //                 swiperIndex:swiper.activeIndex
    //             })
    //         }    
    //     });
    // }
}