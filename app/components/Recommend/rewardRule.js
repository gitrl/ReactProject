require('normalize.css/normalize.css');
import './recommend.css'
import '../../style/App.css'
import '../../style/public.css'
import '../../style/rule.css'
import React from 'react';
import {
  Card
} from 'amazeui-touch';
const header = (
  <Card.Child role="header">
    <a href="javascript: void(0)">奖励条件</a>
    <a href="javascript: void(0)">被推荐人</a>
    <a href="javascript: void(0)">推荐人</a>
    {/*<table>*/}
      {/*<thead>*/}
        {/*<tr>*/}
          {/*<td>邀请朋友</td>*/}
          {/*<td>状态</td>*/}
          {/*<td>获得奖励</td>*/}
        {/*</tr>*/}
      {/*</thead>*/}
    {/*</table>*/}
  </Card.Child>
);

class AppComponent extends React.Component {
  constructor(){
    super()
    this.state={
      count:0
    }
  }
  componentWillMount(){
    document.title='推荐奖励';
  }
  componentDidMount(){
    document.body.style.background='white';
  }
  render() {
    return (
      <div className="index">
        <Card
          header={header}  className="recommendCard fontSize25">
          <table className="rewardRule">
            <tbody>
                  <tr>
                    <td>激活14天内完成5单</td>
                    <td>30元</td>
                    <td>150元</td>
                  </tr>
                  <tr>
                    <td>激活14天内完成5单</td>
                    <td>累计30元</td>
                    <td>150元</td>
                  </tr>
                  <tr>
                    <td>激活14天内完成5单</td>
                    <td>30元</td>
                    <td>150元</td>
                  </tr>
                  <tr>
                    <td>激活14天内完成5单</td>
                    <td>30元</td>
                    <td>150元</td>
                  </tr>
            </tbody>
          </table>
        </Card>
        <div className="rule-explain bgcolorW padding2 fontSize163">
          <p><span>*</span>被推荐人必须通过本页面，即推荐人分享的链接完成注册，激活，才可以参加活动。</p>
          <p><span>*</span>被推荐人必须为有车车主，并需要在活动期间完成注册且激活成功，从激活日起14天内完成阶梯单数，可得对应现金，奖励可积累。</p>
          <p><span>*</span>限快车参加，订单全部支付后，3日内发放奖励，未至支付订单不计入活动。</p>
          <p><span>*</span>接单城市需要与注册城市一致，跨域订单不计入活动。</p>
          <p><span>*</span>活动期间，没命推荐人的累计奖励上限为6000元。</p>
          <p><span>*</span>被推荐司机需从未在平台注册过，在活动期间推荐双方请勿更换手机或司机账号。</p>
          <p><span>*</span>如发现推荐双方又作弊违规等不正当行为，将取消和追回所获奖励。</p>
          <p><span>*</span>未完成指激活成功后还未到14天，并且完成数量在5单以内的司机，已失效指激活后已经过了14天并且完成数量在5单以内的司机。</p>
        </div>
      </div>
    );
  }
}

export default AppComponent;
