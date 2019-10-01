import React, { Component } from 'react';
import main from '../../images/main.jpg';
import { HeaderWrapper } from './HeaderStyle'
import stars from '../../images/main.jpg'
import App from '../Animations/pulse'
import App2 from '../Animations/pulse2'
import App3 from '../Animations/pulse3'
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
    @media screen and (max-width: 1020px) {
      display: none;
    }
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
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }
  render() {
    return (
      <HeaderWrapper className={this.state.isToggleOn ? 'Closed' : 'Opened'} >
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
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        </Navigation>
        <div>
          <img src={main} className="palms" />
          <div className={"svg"}>
          <App />
          <App2 />
          <App3 />
          </div>
        </div>
      </HeaderWrapper>
    );
  }
}

export default Header;
