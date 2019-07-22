//积分兑换
import Path from "../../url";
require('normalize.css/normalize.css');
import React from 'react';
import  '../../../style/public.css';
import  './receiveCoupon.css';
import $ from 'jquery'
import couponbanner_pic from '../../../public/img/couponbanner_pic.png'
class AppComponent extends React.Component {
  constructor(){
    super();
    this.state = {
      show:false,
      txtCon:'',
    }
  }
  componentWillMount(){
    document.title='领取优惠券'
  }
  componentDidMount(){
  }
  //倒计时复制
  countdown() {
    //倒计时
    var num=60;
    var timesID=setInterval(function () {
      $(".receiveCode").text('已发送('+num+'s)');
      $(".receiveCode").css('color','#ccc');
      num--;
      //给id为unbind的元素删除点击事件
      if(num<-1)
      {
        clearInterval(timesID);
        $(".receiveCode").prop("disabled",false);
        $(".receiveCode").text("获取验证码");
        $(".receiveCode").css('color','#486AE7');


      }
    },1000);
  }


  //点击获取验证码
  getMsgCode(){
    var that = this;
    //手机号正则
    var phoneReg = /^1[3|4|5|7|8]\d{9}$/;
    //输入的手机号码
    var mobileNum = this.refs.mobileNum.value;
    //获取短信验证码
    if(mobileNum === '' || !phoneReg.test(mobileNum)){
      console.log("请输入有效的手机号");
      that.setState({ show: true,txtCon:'请输入有效的手机号'});
      setTimeout(function () {
        that.setState({ show: false});
      },1500)
    }else{
      $(".receiveCode").prop("disabled",true);
      $.ajax({
        url:'http://192.168.1.240:8899/butterfly-biz/app/v3.0/common/send-sms?smsType=RECMD_VALID&mobileNumber='+mobileNum,
        type:'get',
        dataType:'json',
        contentType: "application/json",
        success:function (data) {
          that.countdown()
          console.log(data);
        }
      })
    }
  }
  //点击领取优惠券
  rencomdCoupon(){
    var that = this;
    //获取url参数
    var param = Path.GetRequest();
    //邀请码
    var recmdCode = param.inviteCode;
    //userid
    var recmdId = param.id;
    //手机号
    var mobileNum = this.refs.mobileNum.value;
    //验证码
    var msgCode = this.refs.msgCode.value;

    if(mobileNum == '' || msgCode == ''){
      console.log("手机号或验证码不能为空！");
      that.setState({ show: true,txtCon:'手机号或验证码不能为空'});
      setTimeout(function () {
        that.setState({ show: false});
      },1500);
      return;
    }
    else{
      $.ajax({
        url:'http://192.168.1.240:8899/butterfly-biz/app/v3.0/common/base/recmd-bind',
        type:'post',
        dataType:'json',
        contentType: "application/json",
        data:JSON.stringify({
          code:msgCode,
          mobileNumber:mobileNum,
          recmdCode:recmdCode,
          recmdId:recmdId
        }),
        success:function (data) {
          console.log(data);
          if(data.code !=200 ){
            that.setState({ show: true,txtCon:data.msg});
            setTimeout(function () {
              that.setState({ show: false});
            },1500)
          }
          else {
            that.setState({ show: true,txtCon:"领取成功"});
            setTimeout(function () {
              that.setState({ show: false});
            },1500)
            var  data= {mobileNum:mobileNum};
            var path = {
              pathname:'/ycUser/couponContent/${data}',
              query:data,
            }
            that.props.history.push(path)
          }
        }
      })
    }
  }
  render() {
    var style={display:this.state.show?'block':'none'};
    return (
      <section className="receiveCouponBig">
        <div className="rcTopPic"><img src={couponbanner_pic} alt=""/></div>
        <div className="inputNumberBig">
          <div className="inputNumberbox">
            <div className="inputNumber">
              <input type="text" ref="mobileNum" placeholder="请输入手机号" maxLength={11}/>
              <button className="receiveCode" onClick={this.getMsgCode.bind(this)}>获取验证码</button>
            </div>
            <input type="text" className="inputCode" ref="msgCode" placeholder="请输入验证码"/>
            <button className="receiveCoupon" onClick={this.rencomdCoupon.bind(this)}>领取礼包</button>
          </div>
          <div className="popover" style={style}>{this.state.txtCon}</div>
        </div>
      </section>
    );
  }
}

export default AppComponent;
