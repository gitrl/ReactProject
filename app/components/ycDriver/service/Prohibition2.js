require('normalize.css/normalize.css');
import '../../../style/public.css'
import '../../../style/App.css'
import React from 'react';
import $ from 'jquery'

import Btn from '../../btn/submint'
class Pro2Component extends React.Component {
  constructor(){
    super()
    this.state={
      showContent:'',
      showNormal:''
    }
  }
  componentWillMount(){
    document.title='封禁原因';
  }
  componentDidMount(){
    document.body.style.background='#f4f4f4';
    var that = this;
    $.ajax({
      url:'http://192.168.1.6:8080/yueche-driver/json/operate/get_account_reason' ,
      type:'get',
      data:{
        mobileNumber:"13122222222"
      },
      success:function (data) {
        console.log(data);
        if(data.result.status=="1"){
          that.setState({showNormal:true})
        }
        else {
          that.setState({showNormal:false,showContent:data.result.reason});
        }
      },
      error:function (data) {
        console.log(data)
      }
    })
  };
  render() {
    var style={display:this.state.showNormal?'block':'none'};
    var style2={display:this.state.showNormal?'none':'block'};
    return (
      <div className="index">
        <div style={style2}>
          <div className=" bgcolorW padding20 margin25">
            <div>
              <p className="fontSize2 textAlign">检测结果</p>
              <p className="fontSize25 colorg">您的账号状态异常.</p>
              <p className="fontSize25 colorg"> {this.state.showContent}</p>
            </div>
          </div>
          <Btn content="联系客服" className="borderR10"></Btn>
        </div>
        <div className=" bgcolorW padding20 margin25" style={style}>
          <div className="fontW">
            <p> <span className="fontSize25">检测结果</span></p>
            <p className="fontSize25">您的账号状态正常</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Pro2Component;
