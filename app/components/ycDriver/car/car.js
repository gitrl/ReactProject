require('normalize.css/normalize.css');
import '../../../style/App.css'
// var fs = require('fs');
import React from 'react';
import {
  NavBar,
  amStyles,
} from 'amazeui-touch';
import $ from 'jquery'
import './car.css'



import dazong from '../../../public/img/car/dazong.jpg'
import byd from '../../../public/img/car/byd.jpg'
import benchi from '../../../public/img/car/benchi.jpg'
import aodi from '../../../public/img/car/aodi.jpg'
import changan from '../../../public/img/car/changan.jpg'
import jili from '../../../public/img/car/jili.jpg'
import xuefulai from '../../../public/img/car/xuefulai.jpg'
import fengtian from '../../../public/img/car/fengtian.jpg'
import fute from '../../../public/img/car/fute.jpg'
import richan from '../../../public/img/car/richan.jpg'
const hotList= [
  {
    title: '大众',
    imgSrc:dazong,
    id: "1"
  },
  {
    title: '比亚迪',
    imgSrc:byd,
    id: "75"
  },
  {
    title: '奔驰',
    imgSrc: benchi,
    id: "36"
  },
  {
    title: '奥迪',
    imgSrc: aodi,
    id: "33"
  },
  {
    title: '长安',
    imgSrc: changan,
    id: "76"
  },
  {
    title: '吉利',
    imgSrc: jili,
    id: "25"
  },
  {
    title: '雪弗兰',
    imgSrc:xuefulai,
    id: "71"
  },
  {
    title: '福特',
    imgSrc: fute,
    id: "8"
  },
  {
    title: '丰田',
    imgSrc:fengtian,
    id: "3"
  },
  {
    title: '日产',
    imgSrc: richan,
    id: "63"
  }
]
class CarComponent extends React.Component {
  constructor(){
    super();
    this.state={
      branditems:[],
      typeList:[],
      showDetails: false,
      detailActive: -1,
      detailsList: [],
      g_car: {}
    }
  }
  componentDidMount() {
    var that = this;
    $.ajax({
      url:'../../data/band.json',
      // async:false,
      type:'get',
      dataType:'json',
      success:function (data) {
        console.log(data.result.branditems);
        var band = data.result.branditems;
        var bfirstletter = 'A';
        var typeList = [];
        var typeItem = {
          letter: 'A',
          carList: []
        };
        for(var i = 0;i<band.length;i++){
          var item = band[i];
          if(bfirstletter != item.bfirstletter){
            bfirstletter = item.bfirstletter;
            typeList.push(typeItem);
            typeItem = {
              letter: item.bfirstletter,
              carList: []
            };
          }
          var car = {carType:[]};
          car["carName"] = item.name;
          car["id"] = item.id;
          typeItem.carList.push(car);
        }
        this.typeList = typeList;
        that.setState({typeList:typeList})
      }
    });
  }
  //打开详细车型列表
  showDetails(e){
    var that = this;
    var id = e.currentTarget.getAttribute("data-id");
    //阻止冒泡
    e.stopPropagation();
    $.ajax({
      type: 'get',
      async:false,
      url: '../../data/'+id+'.json',
      dataType: 'json',
      success:function (data){
        console.log(data.result.factoryitems);
        console.log(data.result);
        that.setState({detailsList:data.result.factoryitems})
      }
    })
    this.setState({showDetails:true});

  };
  //关闭
  closeDetails(e){
    this.setState({showDetails:false});
  };
  //字母列表
  selCar(e){
    e.stopPropagation();  //阻止合成事件冒泡
    var letter = e.currentTarget.getAttribute("data-id");
    console.log(letter);
    document.getElementById(letter).scrollIntoView(true);
  }
  getMobileOperatingSystem() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
    if (userAgent.match(/iPad/i) || userAgent.match(/iPhone/i) || userAgent.match(/iPod/i)) {
      return 'iOS';
    }
    else {
      return 'Android';
    }
  }
  checkDetails(e){
    e.stopPropagation();  //阻止合成事件冒泡
    var name = e.currentTarget.getAttribute("data-name");
    var brand = e.currentTarget.getAttribute("data-brand");
    console.log(name+","+brand);
    //alert(window.webkit.messageHandlers);
    try{
      if(this.getMobileOperatingSystem()=='iOS'){
        window.webkit.messageHandlers.hasSelectCarStyle.postMessage({name: name,brand: brand});
      }
      else if(this.getMobileOperatingSystem()=='Android'){
        document.location = "android://cartModel?brand="+brand+"&model="+ name;
      }
    }
    catch(err){
      console.log(err);
    }
  }
  render() {
    var style ={display:this.state.showDetails?'block':'none'};
    var that = this;
    return (
      <div className="index car" onClick={this.closeDetails.bind(this)}>
        <section className='hot-box'>
          <h4 className="title">热门车型</h4>
          {/*热门车型区*/}
          <ul className='hotList'>
            {
              hotList.map((v,i)=>{
                return(
                  <li key={i} data-id={v.id} onClick={that.showDetails.bind(that)}>
                    <img src={v.imgSrc} alt=""/>
                    <span>{v.title}</span>
                  </li>
                )})
            }
          </ul>
        </section>
        {/*车型列表*/}
        <ul className="total-list">
          {
            this.state.typeList.map(function(item,i){
              return(
                <li className="total-item" key={i}>
                  <h4 className="title" id={item.letter}>{item.letter}</h4>
                  <ul className="car-list">
                    {
                      item.carList.map(function (carItem,index) {
                        return(
                          <li key={index} data-id={carItem.id} onClick={that.showDetails.bind(that)}>
                            {carItem.carName}
                          </li>
                        ) })
                    }
                  </ul>
                </li>
              )
            }.bind(this))
          }
        </ul>
       {/*车型字母表*/}
        <div className="letter-box">
          <ul className="letter-list">
            {
              this.state.typeList.map(function (item,i) {
                return(
                  <li key={i} data-id={item.letter} onClick={that.selCar.bind(that)}>
                    {item.letter}
                  </li>
                )
              }.bind(this))
            }
        </ul>
      </div>
        {/*详细车型*/}
      <ul className="car-type-list" style={style}>
        {
          this.state.detailsList.map(function(item,i){
            return(
              <li className="total-item" key={i}>
                <h4 className="title">{item.name}</h4>
                <ul className="car-list">
                  {
                    item.seriesitems.map(function (carItem,index) {
                      return(
                        <li key={index} data-name={carItem.name} data-brand={item.name} className='type-item' onClick={that.checkDetails.bind(that)}>
                          {carItem.name}
                        </li>
                      ) })
                  }
                </ul>
              </li>
            )
          }.bind(this))
        }
        {/*<li className="type-item">*/}
          {/*<span>dsfg</span>*/}
        {/*</li>*/}
      </ul>
    </div>
    );
  }
}

export default CarComponent;
