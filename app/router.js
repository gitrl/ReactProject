import React from 'react';
import {BrowserRouter,Route,Switch,Router} from 'react-router-dom';

import Index from './components/Index';
import Index_section from './components/Index_section';
//司机端
// import Main from './components/ycDriver/service/Main';
import Main from './components/ycDriver/service/service';
import Lost from './components/ycDriver/service/lost'
import Deal from './components/ycDriver/service/dealDown'
import Fee from './components/ycDriver/service/withholding_fee'
import Res from './components/ycDriver/service/statetement_reason'
// import Test from './components/ycDriver/service/test_Details'
import Prohibit2 from './components/ycDriver/service/Prohibition2'
import CheckUser from './components/ycDriver/service/checkUser/check_user'
// import InvitateCode from './components/invitationCode/InvitationCode'
// import InvitateRule from './components/invitationCode/invitateRule'
// import Test2 from './components/invitationCode/test'

import FastCarPricingRule from './components/ycDriver/fastDriver/rule/fastCarPricingRule'
import FastCarReg from './components/ycDriver/fastDriver/rule/fastCarReg'
import DriverRule from './components/ycDriver/rule/driverRule'
import Car from './components/ycDriver/car/car'
import Contact from './components/about/contact'
import About from './components/about/about'
import PassengerAbout from './components/about/passengerAbout'
import Complaint from './components/ycDriver/complaint'

//牦牛司机
import DriverUserRule from './components/maoniuDriver/rule/driverUserRule'
import Tixian from './components/maoniuDriver/rule/tixian'
//用户端
import NewRCoupon from './components/ycUser/newRCoupon/newRCoupon'
import UserRule from './components/ycUser/rule/userRule'
import NewRegster from './components/ycUser/newRegster/newRegster'
import ReceiveCoupon from './components/ycUser/recomdNewUser/receiveCoupon'
import CouponContent from './components/ycUser/recomdNewUser/couponContent'
//积分兑换
import Integral from './components/ycUser/JiFenExchange/integral'
import IntegralRule from './components/ycUser/JiFenExchange/integralRule'
//推荐
import Recommend from './components/Recommend/recommend'
import Reward from './components/Recommend/reward'
import Reward2 from './components/Recommend/reward2'
import RewardRule from './components/Recommend/RewardRule'
import RewardRule2 from './components/Recommend/RewardRule2'

const Test = () =>(
  <Switch>
    <Route  exact  path='/index2' component={Index_section}/>
    <Route path='/index2/:id' component={Index_section}/>
  </Switch>
);
export default class AppRouter extends React.Component{
  constructor(){
    super()
  }
  render(){
    return(
      <BrowserRouter>
        <Switch>
          <Route path='/' exact  component={Index} />
          <Route path='/index2' component={Test} />
          <Route path='/ycDriver/fastcar/fastcarPricingRules' component={FastCarPricingRule}/>
          <Route path='/ycDriver/CarRegister' component={FastCarReg}/>
          <Route path='/ycDriver/DriverRule' component={DriverRule}/>
          <Route path="/yc/contact" component={Contact}/>
          <Route path="/yc/about" component={About}/>
          <Route path="/yc/passengerAbout" component={PassengerAbout}/>
          <Route path="/ycDriver/car" component={Car}/>
          <Route path="/ycDriver/service" component={Main}/>
          <Route path="/ycDriver/service/deal" component={Deal}/>
          <Route path="/ycDriver/service/lost" component={Lost}/>
          <Route path="/ycDriver/service/fee:data" component={Fee}/>
          <Route path="/ycDriver/service/fee/fee/res" component={Res}/>
          <Route path="/ycDriver/service/pro2" component={Prohibit2}/>
          <Route path="/ycDriver/service/checkUser" component={CheckUser}/>
          <Route path="/ycDriver/complaint" component={Complaint}/>
          {/*<Route path="/ycDriver/invitateCode" component={InvitateCode}/>*/}
          {/*<Route path="/ycDriver/invitateRule" component={InvitateRule}/>*/}
          {/*<Route path="/ycDriver/test" component={Test2}/>*/}

          <Route path='/airport/driverUserRule' component={DriverUserRule}/>
          <Route path="/busDriver/Tixian" component={Tixian}/>

          <Route path='/ycUser/newReg/newRegster' component={NewRCoupon}/>
          <Route path='/airport/userRule' component={UserRule}/>
          <Route path="/ycUser/newReg/newRegster" component={NewRegster}/>
          <Route path="/ycUser/integral" component={Integral}/>
          <Route path="/ycUser/integraRule" component={IntegralRule}/>
          <Route path="/ycUser/receiveCoupon" component={ReceiveCoupon}/>
          <Route path="/ycUser/couponContent" component={CouponContent}/>

          <Route path="/recommend"  component={Recommend}/>
          <Route path="/driver/reward" exact component={Reward}/>
          <Route path="/passenger/reward2" exact component={Reward2}/>
          <Route path="/driver/rewardrule" exact component={RewardRule}/>
          <Route path="/passenger/rewardrule2" exact component={RewardRule2}/>
        </Switch>
      </BrowserRouter>
    )
  }
}