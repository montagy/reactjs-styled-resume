import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import FullPage from '../../atoms/FullPage';

const Wrapper = FullPage.extend`
`;
const Photo = styled.div`
  border-radius: 50%;
  background-image: url(${require('../../../../public/img/photo.jpg')});
  background-size: contain;
  width: 150px;
  height: 150px;
  margin: 0 auto;
`;
const ParaArea = styled.div`
  width: 100%;
  margin: 2em auto;
  color: white;
  font-size: 1em;
`;
const DivideLine = styled.p`
  font-size: 1.8em;
  font-style: italic;
  padding: 20px 0;
  position: relative;
  &:after {
    content: "";
    position: absolute;
    left: 10%;
    right: 10%;
    bottom: 0;
    height: 1px;
    background-color: rgba(255, 255, 255, .6);
  }
`;
const Line = styled.p`
  margin: 24px 0;
  font-size: 1.2em;
`;
const Home = ({ msg, ...props }) => {
  return (
    <Wrapper {...props}>
      <Photo />
      <ParaArea>
        <DivideLine>{msg.words}</DivideLine>
        <Line>{msg.name}</Line>
        <Line>{msg.job}</Line>
        <Line>{msg.contact}</Line>
      </ParaArea>
    </Wrapper>
  );
};
Home.propTypes = {
  lang: PropTypes.string,
};
export default Home;
