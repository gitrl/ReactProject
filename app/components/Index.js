import React from 'react'
import IndexSection from './Index_section'
import '../style/main.css'
// import imgpic from '../public/img/check_bg.png'
export default class Index extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div className="box">
        <h1>这是index.js</h1>
        {/*<IndexSection/>*/}
        {/*<img src={imgpic} alt=""/>*/}
      </div>
    );
  }
}
