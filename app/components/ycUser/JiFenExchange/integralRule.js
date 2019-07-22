//积分兑换
require('normalize.css/normalize.css');
import React from 'react';
import  '../../../style/public.css';
import  './integral.css';
import txtjifenduihan_pic from '../../../public/img/txtjifenduihan_pic.png'

class AppComponent extends React.Component {
  constructor(){
    super();
  }
  componentWillMount(){
    document.title='积分兑换规则'
  }
  componentDidMount(){
    document.body.style.background='#fff';
  }

  render() {
    return (
      <section className="continued_bg flexBox_IN">
        <div className="waitting">
          <div className="fontS15 colorGray">更多功能正在开发中...</div>
          <div><img src={txtjifenduihan_pic} alt=""/> </div>
        </div>
      </section>
    );
  }
}

export default AppComponent;
