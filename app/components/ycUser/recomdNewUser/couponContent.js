//积分兑换
import Path from "../../url";
require('normalize.css/normalize.css');
import React from 'react';
import { Link } from 'react-router-dom'
import  '../../../style/public.css';
import  './receiveCoupon.css';
import $ from 'jquery'
import gift_pic from '../../../public/img/gift_pic.png'
class AppComponent extends React.Component {
  constructor(props){
    super(props);
    var data = this.props.location.query;
    this.state = {
      show:false,
      txtCon:'',
      // mobileNum:data.mobileNum
    }
  }
  componentWillMount(){
    document.title='领取优惠券'
  }
  componentDidMount(){

  }

  render() {
    return (
      <section className="couponContent">
        <img src={gift_pic} alt=""/>
          <div className="couponConBottom ">
            {/*<div className='textAlign coloWhite'>优惠券已放入账号:{this.state.mobileNum}</div>*/}
            <div className="couponTypeList">
              <div className='couponType'>首单优惠券10元</div>
              <ul>
                <li><span className='circleList'></span>最高抵扣10元</li>
                <li><span className='circleList'></span>有效期：7天内有效</li>
              </ul>
            </div>
            <div className="couponTypeList">
              <div className='couponType'>10元优惠券 x 2张</div>
              <ul>
                <li><span className='circleList'></span>满60元可用</li>
                <li><span className='circleList'></span>有效期：15天内有效</li>
              </ul>
            </div>
            <div className="couponTypeList">
              <div className='couponType'>15元优惠券 x 2张</div>
              <ul>
                <li><span className='circleList'></span>满80元可用</li>
                <li><span className='circleList'></span>有效期：15天内有效</li>
              </ul>
            </div>
            <div className="textAlign couponRule"><Link to="/ycUser/invitateRule"> 邀请好友享受更多超值优惠 ></Link></div>
            <div className="receiveCoupon" >
              <button className="receiveCoupon" >立即使用牦牛出行</button>
            </div>
          </div>
      </section>
    );
  }
}
export default AppComponent;
