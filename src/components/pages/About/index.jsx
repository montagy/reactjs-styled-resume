import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FullPage, Title } from '../../';

const Content = styled.div`
  width: 100%;
  padding-top: 160px;
`;
const StyledUl = styled.ul`
  max-width: 60%;
  margin: 0 auto;
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: space-around;
  li {
    width: 12.5%;
    margin: 0 12px;
  }
`;
const PicBackground = styled.div`
  width: 90px;
  height: 90px;
  cursor: pointer;
  background-color: rgba(255, 255, 255, .1);
  border-radius: 50%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform .1s ease-out, background .2s;
  &:hover {
    transform: scale(0.93);
    background-color: rgba(255, 255, 255, .05);
  }
  img {
    width: 50%;
  }
  &+div {
    margin-top: 20px;
  }
`;
const Info = styled.div`
  margin: 50px 0 0 0;
  font-size: 18px;
  line-height: 24px;
`;
const About = ({ bgc, msg, ...props }) => {
  const pics = [
    require('../../../../public/img/i_age.svg'),
    require('../../../../public/img/i_edu.svg'),
    require('../../../../public/img/i_site.svg'),
    require('../../../../public/img/i_status.svg'),
  ];
  const words = [msg.age, msg.edu, msg.address, msg.status];
  const lis = pics.map((pic, i) =>
    <li key={i}>
      <div>
        <PicBackground><img alt={words[i]} src={pic} /></PicBackground>
        <div><span>{words[i]}</span></div>
      </div>
    </li>,
  );
  return (
    <FullPage style={{ color: 'white' }} bgc={bgc} {...props}>
      <Title>{msg.about}</Title>
      <Content>
        <StyledUl>{lis}</StyledUl>
        <Info>
          <p>{msg.para1}</p>
          <p>{msg.para2}</p>
          <p>{msg.para3}</p>
        </Info>
      </Content>
    </FullPage>
  );
};
About.propTypes = {
  bgc: PropTypes.string,
  lang: PropTypes.string,
};
export default About;
