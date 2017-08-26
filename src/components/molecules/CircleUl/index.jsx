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
const AnimateLi = styled.li`
  animation:
    ${innerX} 8s cubic-bezier(.36, 0, .64, 1) ${props =>
  `${props.time}s`} infinite alternate,
    ${innerY} 8s cubic-bezier(.36, 0, .64, 1) ${props =>
  `${props.time + 4}s`} infinite alternate;
  background-color: ${props => props.bgc || '#000'};
`;

const CircleUl = ({ ...props }) => {
  const colors = [
    'rgba(179, 164, 140, .8)',
    'rgba(171, 209, 220, .8)',
    'rgba(238, 215, 163, .8)',
    'rgba(207, 184, 178, .8)',
  ];
  const view = 'es6 react redux fp'
    .split(' ')
    .map((name, index) =>
      <AnimateLi key={name} time={-4 * index} bgc={colors[index + 1]}>{name}</AnimateLi>,
    );
  return (
    <Wrapper {...props}>
      {view}
    </Wrapper>
  );
};

export default CircleUl;
