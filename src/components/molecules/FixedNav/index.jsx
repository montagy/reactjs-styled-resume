import React from 'react';
import styled from 'styled-components';
import { HoverLi } from '../../';
const Wrapper = styled.nav`
  position: fixed;
  right: 40px;
  top: 50%;
  z-index: 999;
`;
const StyledUl = styled.ul`
  display: block;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const pics = [
  require('../../../../public/img/d_home.svg'),
  require('../../../../public/img/d_info.svg'),
  require('../../../../public/img/d_skills.svg'),
  require('../../../../public/img/d_works.svg'),
  require('../../../../public/img/d_contact.svg'),
];
const indicators = ['Home', 'About', 'Skills', 'Words', 'Concat'];

const FixedNav = ({ index, handleClick, ...props }) => {
  const lis = pics.map((pic, i) =>
    <HoverLi
      key={i}
      role="button"
      active={i === index}
      onClick={() => handleClick(i)}
      image={pic}
      indicator={indicators[i]}
    />,
  );
  return (
    <Wrapper {...props}>
      <StyledUl>
        {lis}
      </StyledUl>
    </Wrapper>
  );
};

export default FixedNav;
