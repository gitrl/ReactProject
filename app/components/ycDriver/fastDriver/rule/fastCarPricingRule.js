import React from 'react';
import {
  Container,
  Accordion,
  Tabs
} from 'amazeui-touch';
import $ from 'jquery'
import '../../../../style/public.css'
import '../../../../style/rule.css'
class AccordionExample extends React.Component{
  constructor(props){
    super();
    this.state = {
      carType:[],
      activeTab: 2
    };
    // console.log(this.props.location.query)
  }
  componentWillMount(){
    document.title='计价规则';
    document.body.style.background='#f4f4f4';
  }
  componentDidMount(){
    var that = this;
    $.ajax({
      url:'http://192.168.1.240:8899/yueche-driver/v2.0/oms-call/get-valuationRule-byType/0',
      type:'post',
      dataType:'json',
      success:function (data) {
        console.log(data.data);
        that.setState({
          carType:data.data
        })
      }
    })
  }
  handleAction(key) {
    this.setState({
      activeTab: key
    });
  }
  render() {
    var that = this;
    return (
      <div className="index">
        <Container {...this.props}>
          {this.state.carType.map(function(v, i){
            return(
              <Accordion defaultActiveKey={1}>
                <Accordion.Item
                  title={v.type_name}
                  key={i}
                >
                  <Tabs inset>
                    <Tabs.Item
                      title="实时单"
                      key={i}
                    >
                      <div className="bgcolorW borderR10 padding10">
                        <ul className="yc-rule">
                          <li>实时最低消费 <span>{v.minimum_consumption_amount}元</span></li>
                          <li>预约单最低消费 <span>10元</span></li>
                          <li>里程费<span>{v.mileage_amount}元/公里</span></li>
                          <li>时长费 <span>{v.length_time_amount}元/分钟</span></li>
                          <li>长途结点 <span>{v.long_distance_km}公里</span></li>
                          <li>长途附加费 <span>每公里增加{v.long_distance_amount}元</span></li>
                          <li>夜间时段 <span>23:00 - 5:00</span></li>
                          <li>夜间服务费 <span>每分钟{v.night_service_amount}元</span></li>
                        </ul>
                      </div>
                    </Tabs.Item>
                    <Tabs.Item
                      title="预约单"
                      key={i}
                    >
                      <div className="bgcolorW borderR10 padding10">
                        <ul className="yc-rule valuation">
                          <li>实时最低消费 <span>{v.minimum_consumption_amount}元</span></li>
                          <li>预约单最低消费 <span>10元</span></li>
                          <li>里程费<span>{v.mileage_amount}元/公里</span></li>
                          <li>时长费 <span>{v.length_time_amount}元/分钟</span></li>
                          <li>长途结点 <span>{v.long_distance_km}公里</span></li>
                          <li>长途附加费 <span>每公里增加{v.long_distance_amount}元</span></li>
                          <li>夜间时段 <span>23:00 - 5:00</span></li>
                          <li>夜间服务费 <span>每分钟{v.night_service_amount}元</span></li>
                        </ul>
                      </div>
                    </Tabs.Item>
                  </Tabs>
                </Accordion.Item>
              </Accordion>
            )
          })}
        </Container>
      </div>
    );
  }
};

export default AccordionExample;
