import React from 'react';
import styled from 'styled-components';
import { Title } from '../../';
import FullPage from '../../atoms/FullPage';

const Wrapper = FullPage.extend`
  color: #FFF;
`;
const Content = styled.div`
  max-width: 1200px;
  margin: 30px auto 0 auto;
  display: flex;
  justify-content: space-between;
  flex-flow: wrap;
  text-align: left;
`;
const Block = styled.div`
  background-color : #FFF;
  border-radius: 5px;
  width: 45%;
  margin: 10px auto;
  padding: 15px;
  color: #000;
  h4 {
    margin: 5px 0;
    color: #4985a0;
    font-size: 18px;
  }
`;
const titles = [
  '个人简历',
  'Reflex App',
];
const paras = [
  '参考了现在流行的简历设计，用React实现的个人简历网站，借助styled-components实现的css.',
  '纯Haskell写成的网站，后端用的servant框架，postgre数据库。前端用的构建于ghcjs之上的reflex框架，reflex是一个FRP的前端框架。',
];
const Works = ({ ...props }) => {
  const blocks = titles.map((title, i) => (
    <Block key={i}>
      <h4>{title}</h4>
      <p>{paras[i]}</p>
    </Block>
  ));
  return (
    <Wrapper {...props}>
      <Title top="70px">作品集</Title>
      <Content>
        {blocks}
      </Content>
    </Wrapper>

  );
};

export default Works;
