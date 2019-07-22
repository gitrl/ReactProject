import React from 'react';
import { Link } from 'react-router-dom'
import '../../../../style/public.css'
import './carReg.css'
class AccordionExample extends React.Component{
  componentWillMount(){
    document.title='车主注册';
  }
  render() {
    return (
      <div className='index'>
        <div className="regTitle">快车车主招募条件</div>
        <div className="regContent">
          <p>1、年龄:男21周岁到60周岁，女21周岁到60周岁，无暴力、吸毒、犯罪记录。</p>
          <p>2、驾龄:驾龄3年以上，准驾车型C2及以上，无酒驾、醉驾、毒驾等重大交通违法事故。</p>
          <p>3、其他参照当地招募条件</p>
        </div>
        <div className="regTitle">快车车辆准入条件</div>
        <div className="regContent">
          <p>1、基本条件:5-7座小型汽车，车况良好，无重大维修记录。</p>
          <p>2、车辆所有人:驾驶车辆必须为注册车辆，自有车辆。</p>
          <p>3、车辆注册日期:车辆注册日期不得超过8年。</p>
        </div>
        <p className="regAgree">点击“立即加入”代表已同意 <Link to="/ycDriver/DriverRule">《法律声明和隐私政策》</Link></p>
      </div>
    );
  }
};

export default AccordionExample;
