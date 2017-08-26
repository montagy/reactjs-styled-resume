import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { CircleUl, BigCircleUl } from '../../';
import FullPage from '../../atoms/FullPage';

const Wrapper = FullPage.extend`
  color: #FFF;
  font-size: 1em;
  justify-content: flex-start;
  & > header {
    font-size: 1.5em;
    margin-bottom: 2em;
    margin-top: 6em;
    @media (max-width: 830px) {
      margin-top: 2em;
    }
  }
`;
const Content = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;
const Circle = styled.div`
  padding-left: 5em;
  @media (max-width: 830px) {
    margin: 2em auto;
    padding-left: 0;
  }
`;
const ParaArea = styled.div`
  position: relative;
  margin-left: 6em;
  font-size: 1.2em;
  @media (max-width: 830px) {
    margin: 2em auto;
  }
`;
const Skills = ({ msg, ...props }) => {
  return (
    <Wrapper {...props}>
      <header>{msg.skills}</header>
      <Content>
        <Circle>
          <BigCircleUl />
          <CircleUl />
        </Circle>
        <ParaArea>
          <p>{msg.sk1}</p>
          <p>{msg.sk2}</p>
          <p>{msg.sk3}</p>
          <p>{msg.sk4}</p>
        </ParaArea>
      </Content>
    </Wrapper>
  );
};
Skills.propTypes = {
  lang: PropTypes.string,
};
export default Skills;
