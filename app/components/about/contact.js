import React from 'react';
import {
  Container,
} from 'amazeui-touch';
import '../../style/public.css'
import '../../style/rule.css';
import './about.css'
import Device from "../Devices";

class AccordionExample extends React.Component{
  componentWillMount(){
    document.title='联系我们';
  }
  componentDidMount(){
    document.body.style.background='#f4f4f4';
  };
  /*联系客服*/
  callAndroid(){
    if(Device.getMobileOperatingSystem()=='Android'){
      window.just_android.callTel("18349115199");
    }
    else{
      // ios
      window.webkit.messageHandlers.dial.postMessage({tel:'18349115199'});
    }
  }
  render() {
    return (
      <div className="index">
        <Container {...this.props} className=" fontSize25">
          <p className="fontSize2 about-title">推广合作</p>
          <div className="bgcolorW">
            <ul className="contact-rule yc-rule">
              <li>联系人 <span>冯先生</span></li>
              <li onClick={this.callAndroid}>电话 <span>18349115199</span></li>
            </ul>
          </div>
          {/*<p className="fontSize2 about-title">企业用车</p>*/}
          {/*<div className="bgcolorW ">*/}
            {/*<ul className="contact-rule yc-rule">*/}
              {/*<li>联系人 <span>张三</span></li>*/}
              {/*<li>邮箱 <span>zhangsan@163.com</span></li>*/}
              {/*<li>电话 <span>154456735</span></li>*/}
            {/*</ul>*/}
          {/*</div>*/}
        </Container>
      </div>
    );
  }
};

export default AccordionExample;
