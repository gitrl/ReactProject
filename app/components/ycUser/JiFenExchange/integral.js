//积分兑换
require('normalize.css/normalize.css');
import React from 'react';
import  '../../../style/public.css';
import  './integral.css';
import $ from 'jquery'

class AppComponent extends React.Component {
  constructor(){
    super();
    this.state = {
      deductible:[],  //抵扣
      directredu:[],  //直抵
      discount:[],    //折扣
      fullredu:[],    //满减
      CurrentIntegral:'' //当前积分
    }
  }
  componentWillMount(){
    document.title='积分兑换'
  }
  componentDidMount(){
    document.body.style.background='#fff';

    this.getCurrentIntegral();
    //获取积分列表
    var that = this;
    $.ajax({
      url:'http://192.168.1.22:8081/app/v3.0/system/coupon-point/query',
      type:'get',
      dataType:'json',
      headers:{
        'x-access-token':'BBEB1EBA7D5138BDF315D69E450D4070'
      },
      success:function (data) {
        console.log(data);
        that.setState({
          // deductible:data.data['1'],
          // discount:data.data['2'],
          // fullredu:data.data['3'],
          directredu:data.data['4'],
        })
      }
    })
  }
  //获取当前积分
  getCurrentIntegral(){
    var that = this;
    var Integral
    $.ajax({
      url:'http://192.168.1.22:8081/app/v3.0/passenger/point/getUserPoint',
      type:'get',
      headers:{
        'x-access-token':'BBEB1EBA7D5138BDF315D69E450D4070'
      },
      dataType:'json',
      success:function (data) {
        console.log(data);
        // Integral = data.data.point;
        that.setState({
          CurrentIntegral:data.data.point,
        })
      }
    })
  }
  //兑换
  exchangEquan(id){
    var that = this;
    console.log(id);
    $.ajax({
      url:'http://192.168.1.22:8081/app/v3.0/passenger/coupon-point/exchange',
      type:'put',
      headers:{
        'x-access-token':'BBEB1EBA7D5138BDF315D69E450D4070'
      },
      data:{
        couponExchangeId:id,
      },
      dataType:'json',
      success:function (data) {
        console.log(data);
        that.getCurrentIntegral()
      }
    })
  }
  render() {
    return (
      <section >
        {/*当前积分*/}
        <div className="myIntegral">
          <div className="myIntegralInfo">
            <div>当前积分</div>
            <div>{this.state.CurrentIntegral}</div>
          </div>
        </div>
        {/*/!*积分兑换*!/*/}
        <div className="exchangeInfo">
          {/*/!*抵扣*!/*/}
          {/*{this.state.deductible.map(function(v, i){*/}
            {/*var id= v.couponExchangeId;*/}
            {/*return(*/}
                {/*<div className="exchangeInfoOne">*/}
                  {/*<div className="exchangeMoney flexBox_IN">*/}
                    {/*<div className='couponvalue'>{v.duc}元</div>*/}
                    {/*<div className="validDays">有效期{v.validDays}天</div>*/}
                  {/*</div>*/}
                  {/*<div className="exchangeJifen ">*/}
                    {/*<div className="exchangeJifenOne">积分{v.point}</div>*/}
                    {/*<div className="exchangeJifenTwo" onClick={this.exchangEquan.bind(this,id)}>兑换 ></div>*/}
                  {/*</div>*/}
                {/*</div>*/}
              {/*)*/}
           {/*}.bind(this))}*/}
          {/*/!*折扣*!/*/}
          {/*{this.state.discount.map(function(v, i){*/}
            {/*var id2= v.couponExchangeId;*/}
            {/*return(*/}
              {/*<div className="exchangeInfoOne">*/}
                {/*<div className="exchangeMoney flexBox_IN">*/}
                  {/*<div className='couponvalue'>{v.discount}折</div>*/}
                  {/*<div className="validDays">有效期{v.validDays}天</div>*/}
                {/*</div>*/}
                {/*<div className="exchangeJifen ">*/}
                  {/*<div className="exchangeJifenOne">积分{v.point}</div>*/}
                  {/*<div className="exchangeJifenTwo" onClick={this.exchangEquan.bind(this,id2)}>兑换 > </div>*/}
                {/*</div>*/}
              {/*</div>*/}
            {/*)*/}
          {/*}.bind(this))}*/}

          {/*/!*满减*!/*/}
          {/*{this.state.fullredu.map(function(v, i){*/}
            {/*var id= v.couponExchangeId;*/}
            {/*return(*/}
              {/*<div className="exchangeInfoOne">*/}
                {/*<div className="exchangeMoney flexBox_IN">*/}
                  {/*<div className='couponvalue'>{v.duc}元</div>*/}
                  {/*<div className="validDays">有效期{v.validDays}天</div>*/}
                {/*</div>*/}
                {/*<div className="exchangeJifen ">*/}
                  {/*<div className="exchangeJifenOne">积分{v.point}</div>*/}
                  {/*<div className="exchangeJifenTwo" onClick={this.exchangEquan.bind(this,id)}>兑换 > </div>*/}
                {/*</div>*/}
              {/*</div>*/}
            {/*)*/}
          {/*}.bind(this))}*/}
           {/*直减*/}
          {this.state.directredu.map(function(v, i){
            var id= v.couponExchangeId;
            return(
              <div className="exchangeInfoOne">
                <div className="exchangeMoney flexBox_IN">
                  <div className='couponvalue'>{v.duc}元</div>
                  <div className="validDays">有效期{v.validDays}天</div>
                </div>
                <div className="exchangeJifen ">
                  <div className="exchangeJifenOne">积分{v.point}</div>
                  <div className="exchangeJifenTwo" onClick={this.exchangEquan.bind(this,id)}>兑换 > </div>
                </div>
              </div>
            )
          }.bind(this))}

        </div>
      </section>
    );
  }
}

export default AppComponent;
