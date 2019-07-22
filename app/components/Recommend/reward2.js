require('normalize.css/normalize.css');
import $ from 'jquery'
import './recommend.css'
import '../../style/public.css'
import '../../style/rule.css'
import React from 'react';
import {
  Card
} from 'amazeui-touch';
const header = (
  <Card.Child role="header">
    <a href="javascript: void(0)">邀请朋友</a>
    <a href="javascript: void(0)">状态</a>
    <a href="javascript: void(0)">获得奖励</a>

  </Card.Child>
);
const datas = [
  {
    name:'张三',
    state:'已完成',
    reward:'10元优惠券'
  },
  {
    name:'李四',
    state:'未完成',
    reward:'0元'
  },
  {
    name:'张三',
    state:'已完成',
    reward:'10元优惠券'
  },
  {
    name:'王二',
    state:'已完成',
    reward:'10元优惠券'
  }
];
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
  /*渲染完成之后计算所得券*/
  componentDidMount(){
    var that = this;
    // $.ajax({
    //   type:'get',
    //   url:'http://192.168.1.6:8080/yueche-driver/json/account/verify_id_card',
    //   dataType:'json',
    //   success:function (data) {
    //     console.log(data)
    //   }
    // });
    // if(this.checkPhone(name,value)) {
    //   this.setState({ show: true});
    //   // setTimeout("window.location.hash='#/changeTel'",2000)
    // }
    // else{
    //   this.setState({  content:"身份证号输入错误",flag: !this.state.flag, show: false})
    // }

    var sum =0;
    for(var i=0;i<datas.length;i++){
      console.log(datas[i].state)
      if(datas[i].state=='已完成'){
        sum+=10;
      }
      this.setState({count:sum})
    }
    document.body.style.background='white';
  }
  render() {
    return (
      <div className="index">
        <div className="rewardTitle">
          <div></div>
          <div>奖励金额累计</div>
          <div></div>
        </div>
        <div className="color fontSize267 textAlign"><span>{this.state.count}</span>元优惠券</div>
        <Card
          header={header}  className="recommendCard fontSize25">
          <table className="">
            <tbody>
            {datas.map((v,i)=>{
              return(
                  <tr>
                    <td>{v.name}</td>
                    <td>{v.state}</td>
                    <td>{v.reward}</td>
                  </tr>
                )
            })}
            </tbody>
          </table>
        </Card>
      </div>
    );
  }
}

export default AppComponent;
