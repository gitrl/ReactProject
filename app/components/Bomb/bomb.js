import React from 'react';
import ModalExample from './BombBox'
import './bomb.css'
import {
  Container
} from 'amazeui-touch';
class ModalExamples extends React.Component{
  render() {
    return (
      <Container {...this.props}>
          <ModalExample
            title="Alert Modal"
            modalProps={{
              role: 'alert'
            }}
            state={this.props.state}
            closeModal={this.props.closeModal}
          >
            {this.props.content}
          </ModalExample>
      </Container>
    );
  }
};
export default ModalExamples;
