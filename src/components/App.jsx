import React, { Component } from 'react';
import debounce from 'lodash/debounce';
import styled, { keyframes } from 'styled-components';
import { Header, SliderInstance, FixedNav } from '../components';
import languages from '../i18n.js';
const arrow = keyframes`
  0% {
    opacity: 0.8;
    bottom: 10px;
  }
  50% {
    bottom: 20px;
    opacity: 1;
  }
  80% {
    bottom: 22px;
    opacity: 0.4;
  }
  100% {
    bottom: 22px;
    opacity: 0;
  }
`;
const Arrow = styled.div`
  display: ${props => props.active ? 'block' : 'none'};
  position: absolute;
  bottom: 20px;
  width: 20px;
  height: 35px;
  left: 50%;
  background-image: url(${require('../../public/img/arrow.svg')});
  background-repeat: no-repeat;
  background-size: contain;
  animation: ${arrow} 1.5s ease-in-out infinite;
  z-index: 999;
`;
const Root = styled.div`
  height: 100%;
`;
const PAGES = 5;
class App extends Component {
  state = {
    curPage: 0,
    switchLeft: true,
  };
  updatePage = debounce(e => {
    if (e.deltaY > 0) {
      this.setState(prevState => ({
        curPage: Math.min(PAGES - 1, prevState.curPage + 1),
      }));
    }
    if (e.deltaY < 0) {
      this.setState(prevState => ({
        curPage: Math.max(0, prevState.curPage - 1),
      }));
    }
  }, 100);
  handleWheel = event => {
    event.persist();
    this.updatePage(event);
  };
  handleIndicate = i => {
    this.setState({
      curPage: i,
    });
  };
  handleSwitchChange = () => {
    this.setState(prev => ({
      switchLeft: !prev.switchLeft,
    }));
  };
  render() {
    const { curPage, switchLeft } = this.state;
    return (
      <Root onWheel={this.handleWheel}>
        <Header handleSwitch={this.handleSwitchChange} switchLeft={switchLeft} />
        <FixedNav index={curPage} handleClick={this.handleIndicate} />
        <Arrow active={curPage < PAGES - 1} />
        <SliderInstance index={curPage} msg={languages[switchLeft ? 'cn' : 'en']} />
      </Root>
    );
  }
}
export default App;
