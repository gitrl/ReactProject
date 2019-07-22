require('normalize.css/normalize.css');
import '../../../style/App.css'
import React from 'react';
import {
  render,
  Link
} from 'react-router'
import img1 from '../../../public/img/lost_icon.png';
import img2 from '../../../public/img/claim_icon.png'
import img3 from '../../../public/img/listen_icon.png';
import img4 from '../../../public/img/closure_icon.png'
import img5 from '../../../public/img/decline_icon.png';
import img6 from '../../../public/img/phone_icon.png';
import img7 from '../../../public/img/online_icon.png';

class AppComponent extends React.Component {
    constructor(){
    super();
    this.state={
      title:'客服'
    }
  }
  componentWillMount(){
   document.title='客服'
  }
  componentDidMount(){
    document.body.style.background='#f4f4f4';
  }
  render() {
    var data = 'hello';
    var path = {
      pathname:'/ycDriver/service/lost',
      state:data,
    }
    return (
      <div className="index">
        <div className="content">
          <ul>
            <li><Link to={path}><img src={img1} alt=""/><span>物品遗失</span></Link></li>
            <li><Link to={"/ycDriver/service/fee"+data}><img src={img2} alt=""/><span>扣费申诉</span></Link></li>
            <li><Link to="/ycDriver/service/checkUser"><img src={img3} alt=""/><span>听单检测</span></Link></li>
            <li><Link to="/ycDriver/service/pro2"><img src={img4} alt=""/><span>封禁原因</span></Link></li>
            <li><Link to="/ycDriver/service/deal"><img src={img5} alt=""/><span>成交下降</span></Link></li>
            <li><Link to="/ycDriver/service/changeIdentity"><img src={img6} alt=""/><span>手机变更</span></Link></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default AppComponent;
