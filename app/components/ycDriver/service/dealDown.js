require('normalize.css/normalize.css');
import '../../../style/public.css'
import '../../../style/App.css'
import Btn from '../../btn/submint'
import React from 'react';
import $ from 'jquery'
import circle from '../../../public/img/declinecheck_f.png'
import circleChecked from '../../../public/img/declinecheck_s.png'

class LostComponent extends React.Component {
  constructor(){
    super()
    this.state={
      orderList:[], //订单列表
      // refuseOrders:[],
      orderID:"", //订单id
      appealReasonType:[]    //申诉原因
    }
  }
  componentWillMount(){
    document.title='成交下降';
  }
  componentDidMount() {
    var appealReason = document.getElementsByClassName('appeal-reason');
    var divs = appealReason[0].childNodes;
    var arrValue =[]

    var that = this;
    for (var i = 0; i < divs.length; i++) {
      var div = divs[i];
      //申诉订单各选项的点击选中事件
      div.onclick = function (e) {
        if (this.className == '') {
          this.className = 'action';
          var value = e.target.dataset.value;
          arrValue.push(value)
          that.setState({appealReasonType:arrValue})
        }
        else {
          this.className = '';
          arrValue.pop(value)
          that.setState({appealReasonType:arrValue})
        }
      }
    }

    document.body.style.background='#f4f4f4';
    //申诉订单列表
    var that = this;
    $.ajax({
      type:'get',
      url:'http://192.168.1.57:8080/yueche-driver/json/driver/get_appealable_orders',
      dataType:'json',
      // sync:false,
      success:function (data) {
        // console.log(data)
        that.setState({orderList:data.result.historyOrders})
      }
    })
}

  //选择申诉订单
  checkOrders(e){
    var imgs = e.target.src;
    var select = document.getElementsByClassName('select');
    this.setState({orderID:""})
    // console.log(select)
    for(var i=0;i<select.length;i++){
      if(imgs === 'circleChecked'){
        select[i].setAttribute("src",circle)
      }
    }
    if(imgs === 'circle' ){
      e.target.setAttribute("src",circleChecked)
      var id =e.target.dataset.value;
      // console.log(id)
      this.setState({orderID:id})
      // console.log(this.state.orderID)
    }
    else {
      e.target.setAttribute("src",circle)
    }
  };
  //提交
  subReason(){

    var value = this.refs.detailReason
    // console.log($(value).val())
    //具体原因
    var detailReason = $(value).val()
    //id
    var orderId = this.state.orderID;
    //选择得原因
    var appealReasonType = this.state.appealReasonType;
    // console.log(appealReasonType.toString())
    appealReasonType = appealReasonType.toString()
    var that = this;
    $.ajax({
      type:'post',
      url:'http://192.168.1.57:8080/yueche-driver/json/driver/addOrderAppeal',
      dataType:'json',
      data:{
        orderId:orderId,
        appealReasonType:appealReasonType,
        appealContent:detailReason
      },
      success:function (data) {
        // console.log(data)
        if(data.errCode=='1'){
          alert("提交成功")
        }
        else {
          alert("提交失败")
        }
      }
    })
  };
  render(){
    return (
      <div className="index">
        <div className='lostContent dealDown'>
          <span className="effeOrder titleSpan">申诉订单(单选)</span>
          {/*循环遍历数据渲染*/}
          {
              this.state.orderList.map(function (v,i) {
                return(
                    <div className='lostOrder '>
                      <div className="one">
                        <div className=" fontSize25 padding10">快车 12日18：00 <span className="marginL ">有责取消</span></div>
                        <p><span className=' circle borderR5'></span>天府软件园C8</p>
                        <p><span className=' circle borderR5 colorRed'></span>{v.endName}</p>
                      </div>
                      <div className="two">
                        <a href="javascript:;"><img className="select" ref="select" data-value={v.orderId} src={circle} onClick={this.checkOrders} alt=""/></a>
                      </div>
                    </div>
                  )
              }.bind(this))}
          {/*{*/}
            {/*this.state.refuseOrders.map(function (v,i) {*/}
              {/*return(*/}
                {/*<div className='lostOrder '>*/}
                  {/*<div className="one">*/}
                    {/*<div className=" fontSize25 padding10">快车 12日18：00 <span className="marginL ">不接指派订单</span></div>*/}
                    {/*<p><span className=' circle borderR5'></span>天府软件园C8</p>*/}
                    {/*<p><span className=' circle borderR5 colorRed'></span>国际会展中心</p>*/}
                  {/*</div>*/}
                  {/*<div className="two">*/}
                    {/*<a href="javascript:;"><img className="select" onClick={this.checkOrders} src={circle} alt=""/></a>*/}
                  {/*</div>*/}
                {/*</div>*/}
              {/*)*/}
            {/*}.bind(this))}*/}
          <span className="effeOrder titleSpan">申诉订单(可多选)</span>
          <div className="appeal-reason bgcolorW ">
               <div data-value="1">乘客超载/带违禁品</div>
               <div data-value="2">联系不上乘客</div>
               <div data-value="3">乘客殴打司机或毁坏车辆</div>
               <div data-value="4">派单太远</div>
               <div data-value="5">乘客发错订单</div>
               <div data-value="6">乘客不在上车点</div>
               <div data-value="7">重复单号</div>
               <div data-value="8">限行限号</div>
               <div data-value="9">修路封号</div>
          </div>
          <div className='fee-reason bgcolorW padding2'>
            <div className=" re-content ">
              <textarea className=" colorGray fontSize25 padding10 borderR5" ref="detailReason" placeholder="请详细描述申述原因(如距离上车点多少米，导航是否绕路，限行道路名称，限行原因等等)，这将有助于您的通过率">
              </textarea>
            </div>
          </div>
          <Btn content="提交申诉" onClick={this.subReason} className="borderR10"/>
        </div>

      </div>
    );
  }
}

export default LostComponent;
