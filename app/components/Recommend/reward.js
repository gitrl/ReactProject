require('normalize.css/normalize.css');

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
    reward:150
  },
  {
    name:'李四',
    state:'未完成',
    reward:0
  },
  {
    name:'张三',
    state:'已完成',
    reward:150
  },
  {
    name:'王二',
    state:'已完成',
    reward:150
  }
];
class AppComponent extends React.Component {

  constructor(){
    super();
    this.state={
      count:0
    }
  }
  componentWillMount(){
    document.title='推荐奖励';
  }
  componentDidMount(){
    /*计算获得的奖励*/
    var sum =0;
    for(var i=0;i<datas.length;i++){
      var num = datas[i].reward;
      sum+=num;
      // console.log(sum);
      this.setState({count:sum})
    }
    document.body.style.background='white';
  }
  render() {
    return (
      <div className="index bodyH">
        <div className="rewardTitle">
          <div></div>
          <div>奖励金额累计</div>
          <div></div>
        </div>
        <div className="color fontSize267 textAlign"><span>{this.state.count}</span>元</div>
        <Card
          header={header} className="recommendCard fontSize25">
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
