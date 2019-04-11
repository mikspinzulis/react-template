import React, { Component } from 'react';
import palms from '../../images/palms.jpg';
import { HeaderWrapper } from './HeaderStyle'

class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
        <img src={palms} className="palms"/>
      </HeaderWrapper>
    );
  }
}

export default Header;
