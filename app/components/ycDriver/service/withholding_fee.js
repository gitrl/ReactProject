require('normalize.css/normalize.css');
import '../../../style/public.css'
import '../../../style/App.css'
import React from 'react';
import $ from 'jquery'

class FeeComponent extends React.Component {
  constructor(props){
    super(props)
    this.state={
      data:{
        deduct_type:"123",
        deduct_amount:"-50"
      }
    }
    var data = this.props.params.data;
    console.log(data)
  }
  componentWillMount(){
    document.title='扣费申诉';
  }
  componentDidMount(){
    document.body.style.background='#f4f4f4';
    $.ajax({
      type:'get',
      url:'http://192.168.1.6:8080/yueche-driver/json/driver/get_account_charging_list ',
      dataType:'json',
      beforeSend: function(xhr) {
        xhr.setRequestHeader("x-auth-token", "1c7a75ca-fd4d-492b-a0b3-d9c3e83fdd74");
      },
      success:function (data) {
        console.log(data);
      }
    })
  };
  render() {
    return (
      <div className="index">
        <div className='lostContent withFee'>
          <span className="effeOrder titleSpan fontSize25">24小时内有效订单</span>
          <div className="feeList bgcolorW padding21 width100">
            <p className="fontSize25">{this.state.data.deduct_type} <span className="deduct_amount">{this.state.data.deduct_amount}元</span> <a href="#/fee/res"><button className="fr bgcolorB coloWhite">申诉</button></a></p>
          </div>
        </div>

      </div>
    );
  }
}

export default FeeComponent;
