require('normalize.css/normalize.css');
import '../../../style/public.css'
import '../../../style/App.css'
import Btn from '../../btn/submint'
import React from 'react';
import $ from 'jquery'
import call from '../../../public/img/oneserviceonline_icon.png'
import Device from '../../Devices'
class LostComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      order:[],
      show:false
    };
    var data = this.props.location.state;
    // console.log(data)
  }
  componentWillMount(){
    document.title='物品遗失';
  }

  componentDidMount(){
    document.body.style.background='#f4f4f4';
    var that = this;
    $.ajax({
      url:'http://192.168.1.57:8080/yueche-driver/json/driver/get_order_list_goods',
      type:'get',
      dataType:'json',
      success:function (data) {
        // console.log(data)
        if(data.errCode==0){
          that.setState({show:true});
          setTimeout(function () {
            that.setState({show:false})
          },2000)
        }
        else{
          //将时间戳转为时间
          var len = data.result.length;
          // console.log(len)
          for(var i=0;i<len;i++){
            var arriveDestinationTime = data.result[i].arriveDestinationTime
            var unixTimestamp = new Date( arriveDestinationTime ) ;
            var commonTime = unixTimestamp.toTimeString().substr(0, 8).replace(/:\d{1,2}$/,' ');
            data.result[i].arriveDestinationTime=commonTime
            // console.log(commonTime)
          }
          that.setState({
            order:data.result
          })
        }
      }
    })
  };
  /*联系客服*/
   callAndroid(){
    if(Device.getMobileOperatingSystem()=='Android'){
     window.just_android.callTel("4006562666");
    }
    else{
      // ios
      window.webkit.messageHandlers.dial.postMessage({tel:'028-87099261'});
    }
  };
  render() {
    let style={display:this.state.show?'block':'none',top:17+'rem'};
    return (
      <div className="index">
        <div className='lostContent'>
          <span className="effeOrder titleSpan ">24小时内有效订单</span>
          {this.state.order.map(function(v, i){
            return (
              <div className='lostOrder borderR10 '>
                <div className="one">
                  <p>
                    <span className='circle borderR5'> </span>
                    <span className="address">{v.startAddress}</span>
                    <span className="time titleSpan">上车时间08：00</span>
                  </p>
                  <p>
                    <span className=' circle borderR5 colorRed'> </span>
                    <span className="address">{v.endAddress}</span>
                    <span className="time titleSpan">下车时间{v.arriveDestinationTime}</span>
                  </p>
                </div>
                <div className="two">
                  <a href="#"><img src={call} alt=""/></a>
                </div>
              </div>
          )
          }.bind(this))}
          <div className="popover" style={style}>订单列表获取失败</div>
          <Btn content="联系客服" className="borderR10" onClick={this.callAndroid}/>
        </div>

      </div>
    );
  }
}

export default LostComponent;
