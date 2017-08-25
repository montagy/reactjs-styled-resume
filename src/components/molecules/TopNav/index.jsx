import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  min-height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
`;

const TopNav = ({ children }) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  );
};

export default TopNav;
