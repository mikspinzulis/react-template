import React, { Component } from 'react';
import palms from '../../images/palms.jpg';
import { HeaderWrapper } from './HeaderStyle'

import Sticky from 'react-sticky-el';
import styled from "styled-components";

const Navigation = styled(Sticky)`
  position: relative;
  z-index: 100;
  ul {
    background-color: transparent;
    display: flex;
    justify-content: center;
  }
  &.sticky {
    ul {
      background-color: black;
    }
  }
`

class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
        <Navigation>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Gallery</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </Navigation>
        <img src={palms} className="palms"/>
      </HeaderWrapper>
    );
  }
}
export default Header;
