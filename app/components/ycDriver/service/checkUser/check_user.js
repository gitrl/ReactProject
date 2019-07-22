require('normalize.css/normalize.css');
import '../../../../style/public.css'
import './check_user.css'
import React from 'react';
import $ from 'jquery'
import light_pic from '../../../../public/img/light_pic.png'
class ResComponent extends React.Component {
  constructor(){
    super()
    this.state={
      show:{
        title:'检测中',
        state1:'正在检测',
        state2:'正在检测',
        state3:'正在检测',
        state4:'正在检测',
      }
    }
  }
  componentWillMount(){
    document.title='听单检测';
  }
  checkTcp(flag){
    console.log(flag)
  }

  componentDidMount(){
    document.body.style.background='#f4f4f4';

    var that = this;
    for (let i=1;i<5 ;i++){
      // console.log(state);
    var show = that.state.show;
      setTimeout(function () {
        show["state"+i]='正常'
        that.setState({show:show})
      },i*1000)
    }
    setTimeout(function () {
      show.title='检测完毕';
      that.setState({show:show})
      $(".checkImg img").css("animation-play-state","paused")
    },5000)
  };

  render() {
    return (
      <div className="check">
          <div className="check-top">
              <div className="checkImg">
                <img src={light_pic} alt=""/>
                <div className="check-words">{this.state.show.title}</div>
              </div>
          </div>
        <ul className="check-list bgcolorW marginT1" >
          <li>账号状态 <span>{this.state.show.state1}</span></li>
          <li>模式设置 <span>{this.state.show.state2}</span></li>
          <li>推送设置 <span>{this.state.show.state3}</span></li>
          <li>车辆限号 <span>{this.state.show.state4}</span></li>
        </ul>
      </div>
    );
  }
}

export default ResComponent;
