require('normalize.css/normalize.css');
import Device from '../Devices'
import '../../style/App.css'
import '../../style/public.css'
import './recommend.css'
import React from 'react';
import {Link,Route} from 'react-router-dom';
import {
  Button
} from 'amazeui-touch';
import redbag_pic from '../../public/img/redbag_pic.png'
import reward_icon from '../../public/img/reward_icon.png'
import rules_icon from '../../public/img/rules_icon.png'
import invite_bg from '../../public/img/invite_bg.png'
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
      <section className="index">
        <div className="recContent">
          <div className="inviteBg">
            <div className="driver">
              <h2 align="center">奖励<span>150</span>元</h2>
              <img src={redbag_pic} alt=""/>
            </div>
            {/*邀请好友*/}
            <Button amStyle="dark" onClick={this.shareDialog}>邀请好友</Button>
          </div>
          <div className="recFooter">
            <div>
              <Link to="/driver/reward">
                <img src={reward_icon} alt=""/>
                <span>奖励</span>
              </Link>
            </div>
            <div>
              <Link to="/driver/rewardrule">
                <img src={rules_icon} alt=""/>
                <span>规则</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

    );
  }
}

export default AppComponent;
