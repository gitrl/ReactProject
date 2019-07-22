require('normalize.css/normalize.css');
import '../../../style/App.css'
import Device from "../../Devices";
import Btn from '../../btn/submint'
import React from 'react';
import {
  render,
  Link
} from 'react-router'

class AppComponent extends React.Component {
  constructor(){
    super();
  }
  componentWillMount(){
   document.title='客服'
  }
  componentDidMount(){
    // document.body.style.background='#fff';
  }
  /*联系客服*/
  callAndroid(){
    if(Device.getMobileOperatingSystem()== 'Android'){
      window.just_android.callTel("4006562666");
    }
    else{
      // ios
      window.webkit.messageHandlers.dial.postMessage({tel:'400-656-2666'});
    }
  }
  render() {
    var data = 'hello';
    var path = {
      pathname:'/ycDriver/service/lost',
      state:data,
    }
    return (
      <div className="index driverService">
        <div className="content textAlign">
            <p className="fontSize2">
              7*24小时客服电话<br/>
              400-656-2666
            </p>
          <Btn content="联系客服" className="borderR10" onClick={this.callAndroid}/>
        </div>
      </div>
    );
  }
}

export default AppComponent;
