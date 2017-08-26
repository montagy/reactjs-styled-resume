import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100%;
`;
const Content = styled.div`
  transform: translateY(-${props => props.index * props.height}px);
  transition: transform .5s ease;
`;

const SliderTemplate = ({ children, index}) => {
  const size = React.Children.count(children);
  const height = window.innerHeight;
  return (
    <Wrapper>
      <Content index={index} height={height} size={size}>{children}</Content>
    </Wrapper>
  );
};
export default SliderTemplate;
