import React from 'react';
import styled from 'styled-components';
import { Title } from '../../';
import PageTemplate from '../../templates/PageTemplate';

const Content = styled.div`
  margin: 30px auto 0 auto;
  max-width: 300px;
  font-size: 18px;
`;
const Word = styled.span`
  color: ${props => props.color || 'inherit'};
  margin: 0 15px;
  font-size: 22px;
`;
const Bottom = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: space-between;
  a {
    width: 40px;
    height: 40px;
    border: 1px solid #FFF;
    border-radius: 50%;
  }
  img {
    width: 100%;
    transform: scale(0.6);
  }
`;
const titles = ['灵感', '代码', '梦想', '未来'];
const titleColor = ['red', '#3cf', '#6c0', '#f63'];
const paras = [
  '注重效率，偏爱敏捷开发',
  '喜欢尝试，期待新鲜事物',
  '前端即兴趣，兴趣即未来',
  '行路有良友，便是捷径',
  '带上我吧，一起看到更大的世界',
];
const imgs = [
  require('../../../../public/img/s_github.svg'),
  require('../../../../public/img/s_blog.svg'),
  require('../../../../public/img/s_sf.svg'),
  require('../../../../public/img/s_wb.svg'),
  require('../../../../public/img/s_zh.svg'),
];

const Contact = ({ ...props }) => {
  const spans = titles.map((title, i) =>
    <Word key={i} color={titleColor[i]}>{title}</Word>,
  );
  const ps = paras.map((para, i) => <p key={i}>{para}</p>);
  const icons = imgs.map((img, i) => <a key={i}><img alt="" src={img} /></a>);
  return (
    <PageTemplate style={{ color: '#fff' }} {...props}>
      <Title top="70px">联系我</Title>
      <Content>
        <p>{spans}</p>
        {ps}
        <Bottom>
          {icons}
        </Bottom>
      </Content>
    </PageTemplate>
  );
};

export default Contact;
