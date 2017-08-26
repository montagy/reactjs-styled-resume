import React, { Component } from 'react';
import debounce from 'lodash/debounce';
//import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Header, SliderInstance, FixedNav } from '../components';
//import { switchLang } from '../actions';
import languages from '../i18n.js';

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
        <SliderInstance index={curPage} msg={languages[switchLeft ? 'cn' : 'en']} />
      </Root>
    );
  }
}
export default App;
