import React from 'react';
import './sub.css'
import {
  Container,
  Button,
} from 'amazeui-touch';
class ButtonExample extends React.Component{
  render() {
    return (
      <Container {...this.props}>
        <Button amStyle="primary" block className=" Btn bgcolorB borderR5">{this.props.content}</Button>
      </Container>
    );
  }
}

export default ButtonExample;
