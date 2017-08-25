import React from 'react';
import styled from 'styled-components';
import { Title } from '../../';

const Wrapper = styled.div`
  height: 100%;
`;
const Content = styled.div`
  margin: 50px 0 0 0;
  width: 100%;
`;
const Banner = styled.div`
  margin: 0 auto;
  width: 750px;
  height: 350px;
  background-color: #f2f4f5;
  border: 1px solid #eee;
  border-radius: 10px;
  box-shadow: 0 0 25px rgba(0, 0, 0, .5);
  display: flex;
  justify-content: space-between;
`;
const Left = styled.div`
  width: 25%;
  background-image: ${props => props.src || 'none'};
  background-repeat: no-repeat;
  background-position: center;
  background-size: 50%;
`;
const Right = styled.div`
  width: 75%;
  padding: 0 0 0 50px;
  text-align: left;
`;
const Image = styled.div`
  width: 100%;
  height: 100%:
`;
const Exp = ({ ...props }) => {
  return (
    <Wrapper
      {...props}
    >
      <Title top="70px">经历</Title>
      <Content>
        <Banner>
          <Left src="url(img/e_js.svg)" />
          <Right>
            <h4>兰途网络科技有限公司</h4>
            <p>2015年6月~至今</p>
            <p>{'<前端开发工程师>'}</p>
            <p>{'"less gulp angular1.x cordova 原生js及若干类库"'}</p>
            <ul>
              <li>负责快速构建高质量移动APP/PC/微信页面</li>
              <li>根据业务需求设计合适的工程项目</li>
              <li>高度组件化，模块化思维，拥有各平台调试能力</li>
              <li>同期学习ES6及vue,react,ng2,体会函数式编程思想</li>
            </ul>

          </Right>
        </Banner>
        <p>2014年初，放弃网络工程师职位，开始前端自学生涯</p>
      </Content>
    </Wrapper>
  );
};
export default Exp;
