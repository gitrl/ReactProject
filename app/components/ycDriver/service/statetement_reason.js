require('normalize.css/normalize.css');
import '../../../style/public.css'
import '../../../style/App.css'
import Btn from '../../btn/submint'
import React from 'react';
import $ from 'jquery'

class ResComponent extends React.Component {
  constructor(){
    super()
    this.state={
      show:false
    }
  }
  componentWillMount(){
    document.title='扣费申诉';
  }
  componentDidMount(){
    document.body.style.background='#f4f4f4';
  };
  getSubmit(){
    // alert(111)
    var that = this
    var content = this.refs.reason;
     content = $(content).val()
    console.log(content)
    $.ajax({
      url:'http://192.168.1.57:8080/yueche-driver/json/driver/addOrderAppeal',
      dataType:'json',
      type:'post',
      data:{
        appealContent:content,
        appealType:"2"
      },
      success:function (data) {
        console.log(data);
        if(data.errCode){
          that.setState({show:true});
          setTimeout(function () {
            that.setState({show:false})
          },2000)
        }
      }

    })
  }
  render() {
    var style={display:this.state.show?'block':'none'};
    return (
      <div className="index">
        <div className='fee-reason bgcolorW padding2'>
          <div className=" re-content ">
            <textarea cols="30" rows="5" ref="reason" className="colorGray fontSize15 borderR5" placeholder="请详细描述申述原因，如该扣款确有问题，平台会有专员后期跟您联系并返回扣款。"></textarea>
          </div>
        </div>
        <div className="popover" style={style}>检验成功</div>
        <Btn content="提交" onClick={this.getSubmit}></Btn>
      </div>
    );
  }
}

export default ResComponent;
