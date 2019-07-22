require('normalize.css/normalize.css');
import React from 'react';
import './about.css'
import userlogo_icon from '../../public/img/userlogo_icon.png'
import Device from "../Devices";
class AppComponent extends React.Component {
  constructor(){
    super();
    this.state={
      flag:""
    }
  }
  componentWillMount(){
    document.title='关于我们'
  }
  componentDidMount(){
    document.body.style.background='#f4f4f4';
    if(Device.getMobileOperatingSystem()=='iOS'){
      this.setState({flag:true})
    }
    else{
      this.setState({flag:false})
    }
  }
  render() {
    var style ={display:this.state.flag?'block':'none'};
    return (
      <div className="about">
        <div className='about-logo-top'>
          <div className='about-logo marginCenter'><img src={userlogo_icon} alt=""/></div>
          <div className="textAlign fontSize2" style={style}>牦牛出行<span id="version"></span></div>
        </div>
        <ul className="check-list bgcolorW marginT1" >
          <li>公司网址 <span><a href="http://www.maoniuchuxing.com">www.maoniuchuxing.com</a></span></li>
          <li>公众号 <span>牦牛出行</span></li>
          <li><a href="/airport/userRule"> 牦牛出行用户协议<span className="colorGray"> > </span></a></li>
        </ul>
      </div>
    );
  }
}

export default AppComponent;
