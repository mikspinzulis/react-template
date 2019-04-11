import React, { Component } from 'react';
import palms from '../../images/palms.jpg';
import { HeaderWrapper } from './HeaderStyle'

import { StickyContainer } from 'react-sticky';

class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
        <StickyContainer>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Gallery</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </StickyContainer>
        <img src={palms} className="palms"/>
      </HeaderWrapper>
    );
  }
}

export default Header;
