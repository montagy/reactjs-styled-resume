import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 25px;
  position: relative;
  span {
    width: 30px;
    line-height: 30px;
    display: inline-block;
    text-align: center;
  }
  &:after {
    content: "";
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.75);
    z-index: -1;
    position: absolute;
    top: 0;
    left: 0;
    transform: ${props =>
      props.active ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform .3s ease;
  }
`;
const Active = styled.span`
  color: ${props => (props.active ? '#fff' : 'rgba(0, 0, 0, 0.3)')};
  transition: color 0.3s ease;
`;
const DoubleSwitch = ({ switchLeft, handleSwitch }) => {
  return (
    <Wrapper active={switchLeft} onClick={handleSwitch}>
      <Active active={switchLeft}>CN</Active>
      <Active active={!switchLeft}>EN</Active>
    </Wrapper>
  );
};
export default DoubleSwitch;
