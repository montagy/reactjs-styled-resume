import React from 'react';
import styled, { keyframes } from 'styled-components';

const innerX = keyframes`
  from {
    left: -22px;
  }
  to {
    left: 122px;
  }
`;
const innerY = keyframes`
  from {
    top: 122px;
  }
  to {
   top: -22px;
  }
`;
const Wrapper = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  width: 142px;
  height: 142px;
  border: 4px dashed #999;
  border-radius: 50%;
  position: absolute;
  text-align: center;
  line-height: 50px;
  transform: translateX(50px) translateY(50px);
  li {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    position: absolute;
    line-height: 40px;
  }
`;
const AnimateLi = styled.li.attrs({
  time: props => props.index * (-4),
})`
  animation:
    ${innerX} 8s cubic-bezier(.36, 0, .64, 1) ${props => `${props.time}s`} infinite alternate,
    ${innerY} 8s cubic-bezier(.36, 0, .64, 1) ${props => `${props.time + 4}s`} infinite alternate;
  background-color: ${props => props.bgc || '#000'};
`;

const CircleUl = ({ ...props }) => (
  <Wrapper {...props}>
    <AnimateLi index={1} bgc="rgba(179, 164, 140, .8)">es6</AnimateLi>
    <AnimateLi index={2} bgc="rgba(171, 209, 220, .8)">react</AnimateLi>
    <AnimateLi index={3} bgc="rgba(238, 215, 163, .8)">redux</AnimateLi>
    <AnimateLi index={4} bgc="rgba(207, 184, 178, .8)">fp</AnimateLi>
  </Wrapper>
);

export default CircleUl;
