require('normalize.css/normalize.css');
import '../../style/public.css'
import '../../style/App.css'
import $ from 'jquery'
import React from 'react';
import Btn from '../btn/submint'
import fplinecheck_f from '../../public/img/fplinecheck_f.png'
import fpcheck_s from '../../public/img/fpcheck_s.png'
import ModalExamples from '../Bomb/bomb'
class FeeComponent extends React.Component {
  constructor(){
    super()
    this.state={
      isShow:false,
      flag:false,
      content:''
    }
  }
  componentWillMount(){
    document.title='投诉';
  }
  componentDidMount(){
    var imgs = document.querySelectorAll('img');
    for (var i = 0; i < imgs.length; i++) {
      imgs[i].onclick = function () {
        var src = this.getAttribute('src');
        if(src === 'fpcheck_s' ){
          this.setAttribute('src',fplinecheck_f);
        }
        else {
          this.setAttribute('src',fpcheck_s);
        }
      }
    }
    document.body.style.background='#f4f4f4';
  };
  showM(){
    this.setState({flag:!this.state.flag,content:"提交成功！",isShow:true});
  }
  closeModal(){
    this.setState({
      flag: false
    });
  };
  render() {
    return (
      <div className="index">
        <div className='lostContent withFee'>
          <span className="effeOrder titleSpan fontSize25">问题反馈（可多选）</span>
          <div className="complaint">
            <ul className="bgcolorW">
              <li>乘客超载/带违禁品 <span className="fr"><img src={fpcheck_s} alt=""/></span></li>
              <li>乘客拒绝系安全带<span className="fr"><img src={fplinecheck_f} alt=""/></span></li>
              <li>乘客殴打司机或毁坏车辆<span className="fr"><img src={fplinecheck_f} alt=""/></span></li>
              <li>乘客吸烟<span className="fr"><img src={fplinecheck_f} alt=""/></span></li>
              <li>乘客携带大型宠物<span className="fr"><img src={fplinecheck_f} alt=""/></span></li>
            </ul>
            {/*<input type="text" placeholder="其他行为..."/>*/}
            <textarea name="" id="" cols="30" rows="10" placeholder="其他行为..."/>
          </div>
          <Btn content="提交" onClick={this.showM.bind(this)}/>
          <ModalExamples state={this.state.flag} closeModal={this.closeModal} content={this.state.content}/>
        </div>

      </div>
    );
  }
}

export default FeeComponent;
