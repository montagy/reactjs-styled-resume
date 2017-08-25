import React from 'react';
import styled from 'styled-components';
import { TopNav, DoubleSwitch } from '../../';
import imgPath from '../../../../public/img/logo.jpg';

const NavItem = styled.div`
  padding: 0 3%;
`;
const HomeLink = styled.a`
  text-decoration: none;
  background: url(${imgPath}) center center no-repeat;
  background-size: contain;
  display: block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;
const Header = ({ lang, handleSwitch, ...props}) => {
  return (
    <TopNav {...props}>
      <NavItem>
        <HomeLink
          href="http://www.github.com/montagy"
          target="_blank"
        />
      </NavItem>
      <NavItem>
        <DoubleSwitch
          lang={lang}
          nodes={['CN', 'EN']}
          handleSwitch={i => handleSwitch(i)}
        />
      </NavItem>
    </TopNav>
  );
};
export default Header;
