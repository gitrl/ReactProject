import React from 'react'

export default class IndexSection extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <section>
        <h1>
          这是index_section.js
        {this.props.match.params.id != null ? "，id为"+this.props.match.params.id:"12111"}</h1>
      </section>
    );
  }
}
