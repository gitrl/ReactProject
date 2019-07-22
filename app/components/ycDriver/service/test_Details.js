require('normalize.css/normalize.css');
import '../../../style/public.css'
import '../../../style/App.css'
import React from 'react';

import stop from '../../../public/img/examine_stop.png'
class TestComponent extends React.Component {
  componentWillMount(){
    document.title='检测详情';
  }
  componentDidMount(){
    document.body.style.background='#f4f4f4';
  };
  render() {
    return (
      <div className="index">
          <div className="testDetail bgcolorW padding20  width100 margin25">
            <div>
              <p><img src={stop} alt=""/> <span className="fontSize267">模式异常</span></p>
              <p className="fontSize25 colorg">您设置了只听预约订单，请调整订单类型</p>
            </div>
          </div>
          <div className="testDetail bgcolorW padding20 width100">
            <p><img src={stop} alt=""/> <span className="fontSize267">推送异常</span></p>
            <p className="fontSize25 colorg">您目前不能听到订单，请检查是否出车或有进行中的订单</p>
          </div>
      </div>
    );
  }
}

export default TestComponent;
