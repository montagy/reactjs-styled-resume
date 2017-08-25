import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '100%'};
  overflow: hidden;
  > div {
    width: 100%;
    height: 100%;
    display: inline-block;
    background-color: #85ada3;
  }
  > button {
    font-size: 3em;
    position: absolute;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.6);
    color: #000;
    top: 50%;
  }
  &:first-child {
    left: 0;
  }
  &:last-child {
    right: 0;
  }
`;
class Slider extends Component {
  render() {
    const { ...props } = this.props;
    return (
      <Wrapper {...props}>
        <button>{'<'}</button>
        <div><h1>1</h1></div>
        <div><h1>2</h1></div>
        <div><h1>3</h1></div>
        <div><h1>4</h1></div>
        <button>{'>'}</button>
      </Wrapper>
    );
  }
}

export default Slider;
