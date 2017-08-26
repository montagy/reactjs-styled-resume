import React from 'react';
import styled from 'styled-components';

//specify parent node height, this is component just fill
//the full height
const Wrapper = styled.div`
  height: 100%;
`;
const Content = styled.div`
  transform: translateY(-${props => props.index * 100}vh);
  transition: transform .5s ease;
`;

const Slider = ({ children, index }) => {
  return (
    <Wrapper>
      <Content index={index}>
        {children}
      </Content>
    </Wrapper>
  );
};
export default Slider;
