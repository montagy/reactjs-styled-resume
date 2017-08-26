import React, { Component } from 'react';
import debounce from 'lodash/debounce';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  Home,
  About,
  Skills,
  Header,
  Works,
  Contact,
  SliderTemplate,
  FixedNav
} from '../components';
import { switchLang } from '../actions';

const Root = styled.div`
  height: 100%;
`;
const PAGES = 5;
class App extends Component {
  state = {
    curPage: 0,
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
  handleSwitch = (lang) => {
    this.props.dispatch(switchLang(lang));
  }
  render() {
    const { curPage } = this.state;
    const { lang } = this.props;
    const pages = [
      {
        component: Home,
        bgc: '#87b0a5',
      },
      {
        component: About,
        bgc: '#109085',
      },
      {
        component: Skills,
        bgc: '#4d5e8f',
      },
      {
        component: Works,
        bgc: '#945c4c',
      },
      {
        component: Contact,
        bgc: '#4b85a0',
      },
    ].map((page, i) => <page.component key={i} bgc={page.bgc} lang={lang} />);
    return (
      <Root
        onWheel={this.handleWheel}
      >
        <Header handleSwitch={this.handleSwitch} lang={lang} />
        <FixedNav index={curPage} handleClick={this.handleIndicate} />
        <SliderTemplate
          active={curPage}
        >
          {pages}
        </SliderTemplate>
    </Root>
    );
  }
}
App.propTypes = {
  lang: PropTypes.string,
};
const mapStateToProps = state => ({
  lang: state.lang,
});
export default connect(mapStateToProps)(App);
