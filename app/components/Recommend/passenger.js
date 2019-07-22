require('normalize.css/normalize.css');
import './recommend.css'
import '../../style/App.css'
import '../../style/public.css'
import Device from '../Devices'
import React from 'react';
import {Link} from 'react-router-dom';
import {
  Button
} from 'amazeui-touch';
import reward_icon from '../../public/img/reward_icon.png'
import rules_icon from '../../public/img/rules_icon.png'
import car_pic from '../../public/img/car_pic.png'
class AppComponent extends React.Component {
  constructor(props){
    super(props);
  }
  componentWillMount(){
    document.title='推荐';
  }
  componentDidMount(){
    document.body.style.background='white';
  }

  shareDialog(){
    //区分系统
    if(Device.getMobileOperatingSystem()=='Android'){
      window.just_android.shareDialog(1, "1111");
    }else {
      // ios
      window.webkit.messageHandlers.share.postMessage({type:"1",task:"2"});
    }
  }
  render() {
    return (
      <div className="index">
          <div className="passenger">
            <h2>邀请好友搭乘快车</h2>
            <h2 className='color'>奖励10元优惠券</h2>
            <div className="textAlign marginT car"><img src={car_pic} alt=""/></div>
            <div className="textAlign">
              <Button amStyle="dark" onClick={this.shareDialog}>邀请好友</Button>
            </div>
            <div className="recFooter">
              <div>
                <a href="/passenger/reward2">
                  <img src={reward_icon} alt=""/>
                  <span>奖励</span>
                </a>
              </div>
              <div>
                <a href="/passenger/rewardrule2">
                  <img src={rules_icon} alt=""/>
                  <span>规则</span>
                </a>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default AppComponent;
