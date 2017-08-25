import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.p`
  width: 100%;
  padding: ${props => props.top} 0 0 0;
  margin: 0;
  font-size: ${props => props.fontSize || '24px'};
`;
const Title = ({ top, children, ...props }) => (
  <Wrapper top={top}>{children}</Wrapper>
);

Title.defaultProps = {
  top: '70px',
  children: 'Default Title',
};
export default Title;

