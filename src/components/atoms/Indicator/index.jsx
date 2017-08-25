import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.span`
  border-radius: 3px 0 0 3px;
  position: absolute;
  display: inline-block;
  width: 60px;
  left: -70px;
  text-align: center;
  background-color: rgba(0, 0, 0, .7);
  color: #fff;
  font-weight: 700;
  opacity: 0;
  &:after {
    content: "";
    position: absolute;
    right: -12px;
    width: 0;
    height: 0;
    border-top: 12px solid transparent;
    border-left: 12px solid rgba(0, 0, 0, 0.7);
    border-bottom: 12px solid transparent;
  }
`;

const Indicator = ({ children, ...props }) => {
  return (
    <Wrapper {...props}>{children}</Wrapper>
  );
};
export default Indicator;
