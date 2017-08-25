import React from 'react';
import styled from 'styled-components';
import { Indicator } from '../../';

const StyledLi = styled.li`
  line-height: 24px;
  width: 24px;
  height: 24px;
  position: relative;
  margin: 12px auto;
  em {
    position: absolute;
    top 50%;
    left: 20px;
    width: 12px;
    height: 12px;
    cursor: pointer;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, .7);
    transform: ${props => (props.active ? 'scale(3)' : 'none')};
    &:hover {
      transform: scale(3);
    }
    &:hover + span {
      opacity: 1;
    }
    &:hover img {
      opacity: 1;
    }
    img {
      position: absolute;
      width: 100%;
      opacity: ${props => (props.active ? 1 : 0)};
      transform: scale(0.6);
    }
    transition: transform .3s ease;
  }
`;
const HoverLi = ({ image, active, indicator, ...props }) => {
  return (
    <StyledLi
      active={active}
      {...props}
    >
      <em>
        <img
          alt="home"
          src={image}
        />
      </em>
      <Indicator>{indicator}</Indicator>
    </StyledLi>
  );
};
export default HoverLi;
