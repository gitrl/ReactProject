import Driver from "./driver";

require('normalize.css/normalize.css');
import $ from 'jquery'
import '../../style/App.css'
import '../../style/public.css'
import './recommend.css'
import React from 'react';
import {Link,Route} from 'react-router-dom';
import Passenger from "./passenger";

class AppComponent extends React.Component {
  constructor(props){
    super(props);
  }
  componentWillMount(){
    document.title='推荐';
  }
  componentDidMount(){
    // $(".recDriver").addClass("current");
    // $(".recTitle li").click(function () {
      // var index=$(this).index();
      // $(this).addClass("current").siblings().removeClass("current");\

    // });

  }
  render() {
    var url = window.location.href;
    var start = url.indexOf('r');
    var currentHash = url.substring(start);
    console.log(url.substring(start));
    // console.log(this.props.match.url);
    return (
      <div className="index">
          <div className="recTop">
            <ul className="recTitle fontSize2">
             <li className={currentHash=='recommend/driver'?'current':''}> <Link to="/recommend/driver" >推荐司机</Link></li>
              <li className={currentHash=='recommend/passenger'?'current':''}><Link to="/recommend/passenger" className=''>推荐乘客</Link></li>
            </ul>
          </div>
         <div>
           {/*{this.props.children}*/}
           <Route path='/recommend/driver' component={Driver}/>
           <Route path="/recommend/passenger"  component={Passenger}/>
         </div>
      </div>
    );
  }
}

export default AppComponent;
