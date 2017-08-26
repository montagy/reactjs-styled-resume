import React from 'react';
import styled, { keyframes } from 'styled-components';
import { mix, transparentize } from 'polished';

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
  width: 242px;
  height: 242px;
  border: 4px dashed #999;
  border-radius: 50%;
  position: relative;
  text-align: center;
  float: right;
  li {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    position: absolute;
    line-height: 50px;
  }
`;
const AnimateLi = styled.li`
  animation:
    ${outX} 8s cubic-bezier(.36, 0, .64, 1) ${props =>
  `${props.time}s`} infinite alternate,
    ${outY} 8s cubic-bezier(.36, 0, .64, 1) ${props =>
  `${props.time + 4}s`} infinite alternate;
  background-color: ${props => props.bgc || '#000'};
  font-size: 12px;
`;

const c1 = '#f50';
const c2 = '#05f';
const BigCircleUl = ({ ...props }) => {
  const view = 'haskell ghcjs servant git nodejs linux webpack design'
    .split(' ')
    .map((name, index) =>
      <AnimateLi key={name} time={-2 * (index + 1)} bgc={transparentize(0.2, mix(0.1 * index, c1, c2))}>
        {name}
      </AnimateLi>,
    );
  return (
    <Wrapper {...props}>
      {view}
    </Wrapper>
  );
};

export default BigCircleUl;
