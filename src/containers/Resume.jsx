import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import ResumeHome from '../components/ResumeHome';
import ResumeAbout from '../components/ResumeAbout';
import ResumeSkills from '../components/ResumeSkills';
import ResumeExp from '../components/ResumeExp';

const fullScreen = css`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
const FixedWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
`;
const NavBar = styled.div`
  width: 100%;
  min-height: 60px;
  background-color: red;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const NewNavBar = styled(NavBar)`
  background-color: transparent;
`;
const NavBarItem = styled.div`
  padding: 0 3%;
  min-height: 60px;
  display: flex;
  align-items: center;
`;
const FixedNav = styled.div`
  position: fixed;
  right: 40px;
  top: 50%;
  z-index: 999;
`;
const HomeLink = styled.a`
  text-decoration: none;
  background: url('./img/logo.jpg') center center no-repeat;
  background-size: contain;
  display: block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;
const DoubleSwitch = styled.div`
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 25px;
  position: relative;
  span {
    width: 30px;
    line-height: 30px;
    display: inline-block;
    text-align: center;
  }
  &:after {
    content: "";
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.75);
    z-index: -1;
    position: absolute;
    top: 0;
    left: 0;
    transform: ${props =>
      props.curLan === 'EN' ? 'translateX(100%)' : 'translateX(0)'};
    transition: transform .3s ease;
  }
`;
const SelectableSpan = styled.span`
  color: ${props => (props.selected ? '#fff' : 'rgba(0, 0, 0, 0.3)')};
  transition: color 0.3s ease;
`;
const ResumeContainer = styled.div`
  height: 100vh;
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
  position: absolute;
`;
const ColorDiv = styled('div')`
  ${fullScreen}
  background-color: ${props => props.bgc || 'transparent'};
  background-image: ${props => props.bgi || 'none'};
  position: absolute;
  z-index: ${props => (props.current ? 998 : -1)};
  text-align: center;
  overflow: hidden;
  transform: ${props =>
    props.upPage
      ? 'translateY(-100%)'
      : props.downPage ? 'translateY(100%)' : 'translateY(0)'};
  transition: all 0.3s linear;
`;
const StyledUl = styled.ul`
  display: block;
  list-style: none;
  padding: 0;
  margin: 0;
`;
const StyledLi = styled.li`
  font-size: 20px;
  width: 24px;
  height: 24px;
  position: relative;
  margin: 12px auto;
  em {
    position: absolute;
    top 50%;
    left: 20px;
    width: 12px;
    height: 12px;
    cursor: pointer;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, .7);
    &:hover {
      transform: scale(3);
    }
    &:hover + span {
      opacity: 1;
    }
    &:hover img {
      opacity: 1;
    }
    img {
      position: absolute;
      width: 100%;
      opacity: ${props => (props.current ? 1 : 0)};
    }
    transition: transform .3s ease;
  }
`;
const Indicator = styled.span`
  border-radius: 3px 0 0 3px;
  position: absolute;
  display: inline-block;
  width: 60px;
  left: -70px;
  text-align: center;
  background-color: rgba(0, 0, 0, .7);
  color: #fff;
  font-weight: 700;
  opacity: 0;
  &:after {
    content: "";
    position: absolute;
    right: -12px;
    width: 0;
    height: 0;
    border-top: 12px solid transparent;
    border-left: 12px solid rgba(0, 0, 0, 0.7);
    border-bottom: 12px solid transparent;
  }
`;
class Page {
  constructor(tmp, bgc, bgi) {
    this.tmp = tmp;
    this.bgc = bgc;
    this.bgi = bgi;
  }
}
class Resume extends Component {
  constructor() {
    super();
    this.state = {
      curPage: 1,
      curLan: 'CN',
    };
  }
  onClickLi(i) {
    this.setState({
      ...this.state,
      curPage: i,
    });
  }
  handleSelectedSpan(lan) {
    this.setState({
      ...this.state,
      curLan: lan,
    });
  }
  render() {
    //const bgcs = ['#87b0a5', '#109085', '#4d5e8f', '#945c4c'];
    const page1 = new Page(<ResumeHome />, '#87b0a5', 'url(img/bg.png)');
    const page2 = new Page(<ResumeAbout />, '#109085', 'url(img/bg.png)');
    const page3 = new Page(<ResumeSkills />, '#4d5e8f', 'url(img/bg.png)');
    const page4 = new Page(<ResumeExp />, '#945c4c', 'url(img/bg.png)');
    const pages = [page1, page2, page3, page4].map((page, i) =>
      <ColorDiv
        bgc={page.bgc}
        bgi={page.bgi}
        current={i === this.state.curPage}
        prePage={this.state.curPage > 0 && this.state.curPage - 1 === i}
        nextPage={this.state.curPage < 3 && this.state.curPage + 1 === i}
        upPage={this.state.curPage > i}
        downPage={this.state.curPage < i}
      >
        {page.tmp}
      </ColorDiv>,
    );
    const lis = [0, 1, 2, 3].map((color, i) =>
      <StyledLi
        current={i === this.state.curPage}
        onClick={() => this.onClickLi(i)}
        role="button"
      >
        <em>
          <img alt="home" src="img/d_home.svg" />
        </em>
        <Indicator>
          Home
        </Indicator>
      </StyledLi>,
    );
    return (
      <div>
        <FixedWrapper>
          <NewNavBar>
            <NavBarItem>
              <HomeLink href="http://www.github.com/montagy" target="_blank" />
            </NavBarItem>
            <NavBarItem>
              <DoubleSwitch curLan={this.state.curLan}>
                <SelectableSpan
                  selected={this.state.curLan === 'CN'}
                  onClick={() => this.handleSelectedSpan('CN')}
                >
                  CN
                </SelectableSpan>
                <SelectableSpan
                  selected={this.state.curLan === 'EN'}
                  onClick={() => this.handleSelectedSpan('EN')}
                >
                  EN
                </SelectableSpan>
              </DoubleSwitch>
            </NavBarItem>
            <FixedNav>
              <StyledUl>
                {lis}
              </StyledUl>
            </FixedNav>
          </NewNavBar>
        </FixedWrapper>
        <ResumeContainer>
          {pages}
        </ResumeContainer>
      </div>
    );
  }
}

export default Resume;
