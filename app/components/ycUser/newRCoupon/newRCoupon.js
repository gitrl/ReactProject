import React from 'react';
import '../../../style/public.css'
import './newRegster.css'
import word_pic from '../../../public/img/word_pic.png'
import logo_icon from '../../../public/img/logo_icon.png'
class AppComponent extends React.Component {
  componentWillMount(){
    document.title='新人注册';
  }
  componentDidMount(){
  }

  render() {
    return (
      <div className="newReg">
        <div className="newRegTop">
          <div className="newRegLogo"><img src={logo_icon} alt=""/></div>
          <div className="wordPic"> <img src={word_pic} alt=""/> </div>
        </div>

        <div className='regCoupon'>
          <div className="textAlign fontS25 coloWhite">恭喜获得新人注册打车券</div>
          <div className="coupon">
            <div className="couponName">优惠券</div>
            <div>
              <h2>一元首乘</h2>
              <p>最高可优惠15元</p>
              <p>7天内有效</p>
            </div>
          </div>
          <div className='phoneNum'><input type="text" placeholder='请输入手机号'/><button>领取</button></div>
        </div>
      </div>
    );
  }
}

export default AppComponent;
