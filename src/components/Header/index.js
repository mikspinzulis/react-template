import React, { Component } from 'react';
import palms from '../../images/palms.jpg';
import { HeaderWrapper } from './HeaderStyle'

class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Gallery</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Blog</a></li>
                </ul>
                <img src={palms} className="palms"/>
            </HeaderWrapper>
        );
    }
}

export default Header;
