import React from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import FullPage from '../../atoms/FullPage';

const pics = [
  require('../../../../public/img/i_age.svg'),
  require('../../../../public/img/i_edu.svg'),
  require('../../../../public/img/i_site.svg'),
  require('../../../../public/img/i_status.svg'),
];
const Wrapper = FullPage.extend`
  color: #FFF;
  font-size: 1em;
  line-height: 2;
  & > p {
    font-size: 1.5em;
    margin-bottom: 2em;
  }
`;
const Content = styled.div`
  width: 50%;
  margin: 0 auto 2em auto;
  @media (max-width: 760px) {
    width: 100%;
  }
`;
const StyledUl = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;
  li {
    margin: 0 12px;
    display: block;
  }
`;
const effect = keyframes`
  0% {
    opacity: 0.3;
  }
  40% {
    opacity: 0.5;
    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.1),
      0 0 10px 10px #109085,
      0 0 0 10px rgba(255, 255, 255, 0.5);
  }
  100% {
    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.1),
      0 0 10px 10px #109085,
      0 0 0 10px rgba(255, 255, 255, 0.5);
    transform: scale(1.5);
    opacity: 0;
  }
`;
const PicBackground = styled.div`
  width: 5em;
  height: 5em;
  cursor: pointer;
  background-color: rgba(255, 255, 255, .1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform .1s ease-out, background .2s;
  position: relative;
  &:hover {
    transform: scale(0.93);
    background-color: rgba(255, 255, 255, 0.05);
    &:after {
      animation: ${effect} 1.3s ease-out 0.075s;
    }
  }
  &:after {
    border-radius: 50%;
    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.1);
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    opacity: 0;
    transition: all .3s;
  }
  img {
    width: 50%;
  }
  &+div {
    margin-top: 20px;
  }
`;
const Info = styled.div`
  font-size: 1.2em;
  margin-bottom: 2em;
`;
const About = ({ msg, ...props }) => {
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
    <Wrapper {...props}>
      <p>{msg.about}</p>
      <Content>
        <StyledUl>{lis}</StyledUl>
      </Content>
      <Info>
        <p>{msg.para1}</p>
        <p>{msg.para2}</p>
        <p>{msg.para3}</p>
      </Info>
    </Wrapper>
  );
};
About.propTypes = {
  bgc: PropTypes.string,
  lang: PropTypes.string,
};
export default About;
