import React from 'react';
import styled from 'styled-components';
import FullPage from '../../atoms/FullPage';

const titles = [
  '个人简历',
  'Reflex App',
  'Reddit浏览',
  '',
];
const paras = [
  '参考了现在流行的简历设计，用React实现的个人简历网站，借助styled-components实现的css.',
  '纯Haskell写成的网站，后端用的servant框架，postgre数据库。前端用的构建于ghcjs之上的reflex框架，reflex是一个FRP的前端框架。',
  '简单的Reddit浏览应用，以简介快速为出发点，用reactjs写成',
  '',
];
const Wrapper = FullPage.extend`
  color: #FFF;
  justify-content: flex-start;
  padding-top: 5em;
  & > header {
    font-size: 1.5em;
  }
`;
const Content = styled.div`
  max-width: 1200px;
  margin: 30px auto 0 auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  text-align: left;
`;
const Block = styled.div`
  background-color : #FFF;
  border-radius: 5px;
  width: 45%;
  margin: 10px auto;
  padding: 1em;
  padding-bottom: 3em;
  color: #000;
  @media (max-width: 830px){
    width: 80%;
  }
  h4 {
    margin: 5px 0;
    color: #4985a0;
    font-size: 18px;
  }
`;
const Works = ({ ...props }) => {
  const blocks = titles.map((title, i) => (
    <Block key={i} style={{ opacity: title ? '1' : '0'}}>
      <h4>{title}</h4>
      <p>{paras[i]}</p>
    </Block>
  ));
  return (
    <Wrapper {...props}>
      <header>作品</header>
      <Content>
        {blocks}
      </Content>
    </Wrapper>

  );
};

export default Works;
