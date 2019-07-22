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
  constructor(props){
    super(props)
    this.state={
      count:0,
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
                    <td>激活后完成第一次快车行程并支付订单</td>
                    <td>8元优惠券</td>
                    <td>10元优惠券</td>
                  </tr>

            </tbody>
          </table>
        </Card>
        <div className="rule-explain bgcolorW padding2 fontSize163">
          <p><span>*</span>被推荐人必须通过本页面，即推荐人分享的链接完成注册，激活，才可以参加活动。</p>
          <p><span>*</span>被推荐人首次完成订单并支付成功后，您便可获得推荐奖励，推荐奖励券将在24小时内到账。</p>
          <p><span>*</span>拥有相同设备(手机)，账号，手机号，微信号，支付账户。银行卡号的用户将被视为同一用户。</p>
          <p><span>*</span>接单城市需要与注册城市一致，跨域订单不计入活动。</p>
          <p><span>*</span>您每日获得推荐奖励次数上限为50次。</p>
          <p><span>*</span>您获得的奖励优惠券可于牦牛出行客户端“个人中心-钱包-优惠券”中查询，可用于支付牦牛出行车费。</p>
          <p><span>*</span>如发现推荐双方有作弊违规等不正当行为，将取消和追回所获奖励。</p>


        </div>
      </div>
    );
  }
}

export default AppComponent;
