import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import i18n from '../../../i18n';
import { FullPage } from '../../../components';
import photoJpg from '../../../../public/img/photo.jpg';

const Photo = styled.div`
  border-radius: 50%;
  background-image: url(${photoJpg});
  background-size: contain;
  width: 150px;
  height: 150px;
  margin: 0 auto;
`;
const ParaArea = styled.div`
  max-width: 90%;
  margin: 0 auto;
  color: white;
`;
const DivideLine = styled.p`
  font-size: 22px;
  position: relative;
  padding: 20px 0;
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
`;
const Home = ({ lang = 'cn', ...props }) => {
  const msg = i18n[lang];
  return (
    <FullPage
      style={{ padding: '120px 0 0 0', boxSizing: 'border-box' }}
      {...props}
    >
      <Photo />
      <ParaArea>
        <DivideLine>{msg.words}</DivideLine>
        <Line>{msg.name}</Line>
        <Line>{msg.job}</Line>
        <Line>{msg.contact}:jencean@126.com</Line>
      </ParaArea>
    </FullPage>
  );
};
Home.propTypes = {
  lang: PropTypes.string,
};
export default Home;
