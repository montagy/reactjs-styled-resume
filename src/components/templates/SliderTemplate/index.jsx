import React from 'react';
import styled from 'styled-components';
import { FixedNav } from '../../';

const Wrapper = styled.div`
  height: ${props => props.height}px;
  overflow: hidden;
`;
const Content = styled.div`
  width: 100%;
  height: ${props => props.height * props.size}px;
  margin: 0;
  overflow: hidden;
  transform: translateY(-${props => props.index * props.height}px);
  transition: transform .5s linear;
`;

const SliderTemplate = ({
  header,
  children,
  handleClick,
  active,
  ...props
}) => {
  const size = React.Children.count(children);
  const height = window.innerHeight;
  return (
    <Wrapper height={height} {...props}>
      {header}
      <FixedNav index={active} handleClick={handleClick} />
      <Content index={active} height={height} size={size} >{children}</Content>
    </Wrapper>
  );
};
export default SliderTemplate;
