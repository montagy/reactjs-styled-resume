import React, { Component } from 'react';
import debounce from 'lodash/debounce';
import { connect } from 'react-redux';
import 'normalize-css';
import PropTypes from 'prop-types';
import {
  Home,
  About,
  Skills,
  Header,
  Works,
  Contact,
  SliderTemplate,
} from '../components';
import { switchLang } from '../actions';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curPage: 0,
    };
    const PAGES = 5;
    this.updatePage = debounce(
      e => {
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
      },
      100,
    );
  }
  onClickLi = i => {
    this.setState({
      curPage: i,
    });
  };
  handleSwitch(lang) {
    this.props.dispatch(switchLang(lang));
  }
  handleWheel = event => {
    event.persist();
    this.updatePage(event);
  };
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
      <SliderTemplate
        header={
          <Header handleSwitch={lan => this.handleSwitch(lan)} lang={lang} />
        }
        handleClick={this.onClickLi}
        active={curPage}
        onWheel={this.handleWheel}
      >
        {pages}
      </SliderTemplate>
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
