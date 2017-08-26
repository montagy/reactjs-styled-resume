import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Title, CircleUl, BigCircleUl } from '../../';
import  FullPage  from '../../atoms/FullPage';

const Wrapper = FullPage.extend`
  width: 100%;
  color: #FFF;
`;
const Content = styled.div`
  margin: 100px auto 0 auto;
  max-width: 800px;
  display: flex;
  justify-content: space-between;
`;
const Circle = styled.div`
  position: relative;
  width: 300px;
`;

const Skills = ({ msg, ...props }) => {
  return (
    <Wrapper {...props}>
      <Title top="70px">{msg.skills}</Title>
      <Content>
        <Circle>
          <BigCircleUl />
          <CircleUl />
        </Circle>
        <div>
          <p>{msg.sk1}</p>
          <p>{msg.sk2}</p>
          <p>{msg.sk3}</p>
          <p>{msg.sk4}</p>
        </div>
      </Content>
    </Wrapper>
  );
};
Skills.propTypes = {
  lang: PropTypes.string,
};
export default Skills;
