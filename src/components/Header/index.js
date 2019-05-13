import React, { Component } from 'react';
import main from '../../images/main.jpg';
import { HeaderWrapper } from './HeaderStyle'
import stars from '../../images/main.jpg'
import App from './pulse'
import App2 from './pulse2'
import App3 from './pulse3'
import Sticky from 'react-sticky-el';
import styled from "styled-components";


const Navigation = styled(Sticky)`
  position: relative;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  ul {
    background-color: transparent;
    display: flex;
    justify-content: center;
  }
  &.sticky {
     background-image: url(${stars});
     background-position-y: 535px;
  }
  .site-slogan {
    color: white;
    padding: 14px 30px 16px;
    text-decoration: none;
    font-size: 20px;
  }
  .search {
    color: white;
    padding: 12px 30px;
    text-decoration: none;
  }
  input {
    background: transparent;
    height: 24px;
    border-radius: 5px;
    &::placeholder {
      color: white;
      padding-left: 5px;
    }
  }
`

class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
        <Navigation>
            <div className={'site-slogan'}>Site Slogan</div>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Gallery</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
            <div className={'search'}><input placeholder={'Search...'}/></div>
        </Navigation>
        <div>
        <img src={main} className="palms" />
        <App />
          <App2 />
          <App3 />
        </div>
      </HeaderWrapper>
    );
  }
}

export default Header;
