import React from 'react';
import Home from '../Home';
import About from '../About';
import Contact from '../Contact';
import Skills from '../Skills';
import Works from '../Works';
import Slider from '../../molecules/Slider';

class SliderInstance extends React.PureComponent {
  render() {
    const { index, msg } = this.props;
    return (
      <Slider index={index}>
        <Home msg={msg} bgc="#87b0a5" />
        <About msg={msg} bgc="#109085" />
        <Skills msg={msg} bgc="#4d5e8f" />
        <Works bgc="#945c4c" />
        <Contact bgc="#4b85a0" />
      </Slider>
    );
  }
}

export default SliderInstance;
