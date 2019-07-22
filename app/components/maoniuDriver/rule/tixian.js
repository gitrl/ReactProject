import React from 'react';
import {
  Container,
} from 'amazeui-touch';
import '../../../style/public.css'
import '../../../style/rule.css'
class AccordionExample extends React.Component{
  componentWillMount(){
    document.title='规则';

  }
  componentDidMount(){
    document.body.style.background='#f4f4f4';
  };
  render() {
    return (
      <div className="index">
        <Container {...this.props} className="padding5 fontSize25">
          <div className="bgcolorW borderR10 padding10">
            <ul className="yc-rule">
              <p className="fontSize2 textAlign">提现规则</p>
              <li>可提现时间 <span>每周二09:00-22:00</span></li>
              <li>可提现收入 <span>所有余额</span></li>
              <li>单日提现额度 <span>15000元</span></li>
              <li>提现次数 <span>单日最多1次</span></li>
              <li>到账时间 <span>24小时</span></li>
            </ul>
            <div className="rule-explain bgcolorW padding4 fontSize163">
              <p><span>*</span>仅支持提现到储蓄卡。</p>
              <p><span>*</span>银行卡信息必须和身份证信息一致</p>
              <p><span>*</span>支持的银行：农业银行、建设银行、中国邮政、中国银行、工商银行、交通银行、招商银行。</p>
              <p><span>*</span>若出现提现失败的情况，请核查银行卡号以及姓名是否填写一致，并向对应银行咨询银行卡状态是否正常。</p>
            </div>
          </div>
      </Container>
      </div>
    );
  }
};

export default AccordionExample;
