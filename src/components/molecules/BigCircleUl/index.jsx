import React from 'react';
import styled, { keyframes } from 'styled-components';
import { mix } from 'polished';

const outX = keyframes`
  from {
    left: -27px;
  }
  to {
    left: 217px;
  }
`;
const outY = keyframes`
  from {
    top: -27px;
  }
  to {
   top: 217px;
  }
`;
const Wrapper = styled.ul`
  list-style: none;
  margin: 0 auto;
  padding: 0;
  width: 242px;
  height: 242px;
  border: 4px dashed #999;
  border-radius: 50%;
  position: absolute;
  text-align: center;
  li {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    position: absolute;
    line-height: 50px;
  }
`;
const AnimateLi = styled.li.attrs({
  time: props => (props.index + 1) * (-2),
})`
  animation:
    ${outX} 8s cubic-bezier(.36, 0, .64, 1) ${props => `${props.time}s`} infinite alternate,
    ${outY} 8s cubic-bezier(.36, 0, .64, 1) ${props => `${props.time + 4}s`} infinite alternate;
  background-color: ${props => props.bgc || '#000'};
  font-size: 12px;
`;

const c1 = '#f50';
const c2 = '#05f';
const BigCircleUl = ({ ...props }) => (
  <Wrapper {...props}>
    <AnimateLi index={1} bgc={mix(0.1, c1, c2)}>haskell</AnimateLi>
    <AnimateLi index={2} bgc={mix(0.2, c1, c2)}>ghcjs</AnimateLi>
    <AnimateLi index={3} bgc={mix(0.3, c1, c2)}>servant</AnimateLi>
    <AnimateLi index={4} bgc={mix(0.4, c1, c2)}>git</AnimateLi>
    <AnimateLi index={5} bgc={mix(0.5, c1, c2)}>nodejs</AnimateLi>
    <AnimateLi index={6} bgc={mix(0.6, c1, c2)}>linux</AnimateLi>
    <AnimateLi index={7} bgc={mix(0.7, c1, c2)}>webpack</AnimateLi>
    <AnimateLi index={8} bgc={mix(0.8, c1, c2)}>design</AnimateLi>
  </Wrapper>
);

export default BigCircleUl;
