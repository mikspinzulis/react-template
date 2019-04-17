import { Link } from 'gatsby'
import styled, { css } from 'styled-components'
import StickyHeader from 'react-sticky-header'
import breakpoint from 'styled-components-breakpoint'
import {DropdownContent} from "react-simple-dropdown";

export const StickyNav = styled(StickyHeader)`
  div div >div {
    z-index: 2;
  }
  &.is-sticky div div >div:first-child {
    background: ${props => props.theme.colorBlue};
    justify-content: center;
    display: block;
    z-index: 2;
    transition-property: all;
    transition-duration: 0.2s;
    transition-timing-function: cubic-bezier(0.64, 0.14, 0.97, -0.03);
  }
  &.is-sticky {
    .dropdown >div {
      a {
        height: ${props => props.theme.spacing.xl};
        display: block;
        text-decoration: none;
        text-transform: uppercase;
        color: ${props => props.theme.colorWhite};
        line-height: 0.7;
        font-weight: 600;
        font-family: ${props => props.theme.fontHeadingSemiBold};
        font-size: ${props => props.theme.navFontSize};
        letter-spacing: 0.17rem;
        white-space: nowrap;
        padding: ${props => props.theme.spacing.base};
        &:active {
          border-bottom: 1px ${props => props.theme.colorWhite};
        }
      }
    }
  }
`
export const MobileSticky = styled.div`
  >header{
    height: 150px;
    ${breakpoint('lg')`
      height: 80px;
    `}
  }
  ul{
    justify-content: center;
  }
  ${breakpoint('lg')`
    flex-wrap: unset;
    justify-content: normal;
    margin: 0 auto;
    max-width: 72rem;
    display: flex;
    align-items: flex-start;
    padding: 3px 1px;
  `}
  header.ReactStickyHeader_root.is-sticky div div div div >li{
    height:auto;
    padding: 0px 10px;
  }
  header.ReactStickyHeader_root.is-sticky div div div a >img{
    padding: ${props => props.theme.spacing.none};
    max-height: 60px;
    margin: ${props => props.theme.spacing.none};
    max-width: 100%;
    width: 100%;
  }
`
export const NavWrapper = styled.div`
  z-index: 100;
  height: 140px;
`
export const DropToggle = styled.div`
  height: 100%;
  width: 40px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;
`
export const BrandWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  position: relative;
  z-index: 10;
  padding: .34883rem 1.0465rem 0 1.0465rem;
  background: transparent;
  transition-property: all;
  transition-duration: 0.4s;
  transition-timing-function: cubic-bezier(0.64, 0.14, 0.96, -0.23);
  ${props => props.isOpen && css`
    background: ${props.theme.colorNavy};
    transition-property: all;
    transition-duration: 0.3s;
    transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  `}
  a {
    height: 66px;
    display: block;
  }
`
export const MenuToggler = styled.div`
  z-index: 10;
  border: none;
  cursor: pointer;
  width: 60px;
  position: absolute;
  top: 5px;
  right: ${props => props.theme.spacing.none};
  text-align: center;
  display: flex;
`
export const MobileBackground = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background: transparent;
  z-index: 1;
  ${props => props.isOpen && css`
    background: rgba(2,27,53,.3);
  `}
`
export const TogglerIcon = styled.img`
  margin: ${props => props.theme.spacing.none};
`
export const WunderLogo = styled.img`
  width: 30px;
  height: 60px;
  margin: ${props => props.theme.spacing.none};
`
export const ModalOpen = styled.div`
  position: absolute;
  width: 100%;
  background: ${props => props.theme.colorNavy};
  z-index: 100;
  right: ${props => props.theme.spacing.none};
  top: ${props => props.theme.spacing.none};
  height: 100%;
  max-width: 375px;
`
export const NavLinks = styled.ul`
  text-align: left;
  list-style-type: none;
  margin: 0.7rem 0 35px;
  .dropdown {
    padding: ${props => props.theme.spacing.none};
  }
  .dropdown.is-active{
    &:hover > div span {
      transform: rotate(180deg);
      transition: transform .3s,-webkit-transform .3s;
    }     
    &:hover > div {
      border-bottom: none;
    }
    .dropdown__content {
      display: block;
      position: relative;
      width: 100%;
      top: ${props => props.theme.spacing.none};
      left: ${props => props.theme.spacing.none};
      ul {
        margin: ${props => props.theme.spacing.none};
        padding: 0 0 8px;
      }
      li {
        border-bottom: none;
      }
      a {
        font-size: .83rem;
        text-transform: capitalize;
        font-family: ${props => props.theme.fontHeadingRegular};
        letter-spacing: 0;
        height: ${props => props.theme.spacing.none};
        padding: .69rem 0;
        }
      }
    }
  }
  li { 
    border-bottom: 1px solid hsla(0,0%,88.2%,.5);
    margin: 0 1.0465rem;
  }
  a {
    height: ${props => props.theme.spacing.xl};
    display: block;
    text-decoration: none;
    text-transform: uppercase;
    color: ${props => props.theme.colorWhite};
    line-height: 0.7;
    font-weight: 600;
    font-family: ${props => props.theme.fontHeadingSemiBold};
    font-size: ${props => props.theme.navFontSize};
    letter-spacing: 0.17rem;
    white-space: nowrap;
    padding: ${props => props.theme.spacing.base};
    ${props => props.theme.spacing.sm};
  }
  a.active {
    border-bottom: 3px solid ${props => props.theme.colorWhite};
    width: fit-content;
  }
`
export const LangLinks = styled.div`
  display: flex;
  justify-content: center;
  padding: 2px 1.0465rem;
  ul {
    list-style-type: none;
    padding: ${props => props.theme.spacing.none};
    display: flex;
    width: 100%;
    margin: 1.0465rem 0 40px;
    justify-content: space-evenly;
  }
  li { 
    margin: 0 14px;
  }
  a {
    height: ${props => props.theme.spacing.xl};
    display: block;
    text-decoration: none;
    text-transform: uppercase;
    color: ${props => props.theme.colorWhite};
    line-height: 1;
    font-weight: 600;
    font-family: ${props => props.theme.fontHeadingRegular};
    font-size: ${props => props.theme.navFontSize};
    letter-spacing: 0.17rem;
    padding: 1.045rem .5635rem;
  } 
`
export const DropdownList = styled(DropdownContent)`
  ul li{
    font-family: ${props => props.theme.fontHeadingRegular};
    font-weight: 600;
    letter-spacing: 0;
    display: block;
    font-size: ${props => props.theme.navFontSize};
    line-height: 1;
    text-transform: uppercase;
    white-space: nowrap;
  }
`
export const DropdownLink = styled(Link)`
  color: ${props => props.theme.colorWhite};
  text-decoration: none;
  text-transform: uppercase;
  display: block;
  font-size: ${props => props.theme.navFontSize};
  line-height: 1;
  height: ${props => props.theme.spacing.xl};
  letter-spacing: .17rem;
  white-space: nowrap;
  outline: 0;
  cursor: pointer;
  font-family: ${props => props.theme.fontHeadingSemiBold};
`
export const DropdownMenuLink = styled.div`
  margin: 0 1.0465rem;
  display: block;
  width: 90%;
  position: relative;
  border-bottom: 1px solid hsla(0,0%,88.2%,.5);
`
export const DropdownListLink = styled(Link)`
  color: black;
  text-decoration: none;
  text-transform: capitalize;
  padding: 1.045rem ${props => props.theme.spacing.none};
  font-family: ${props => props.theme.fontHeadingRegular};
  &:hover {
    border-bottom: none;
    ${breakpoint('sm')`
      width: fit-content;
      border-bottom: 1px solid ${props => props.theme.colorWhite};
    `}
  }
  &.dropdown-active {
    width: fit-content;
    border-bottom: 1px solid ${props => props.theme.colorWhite};
  }
`
export const ArrowDown = styled.span`
  border-color: #fffcfc transparent transparent;
  border-style: solid;
  border-width: 5px 5px 0;
  content: ' ';
  display: block;
  height: ${props => props.theme.spacing.none};
  position: absolute;
  right: 15px;
  top: 16px;
  width: ${props => props.theme.spacing.none};
  transition: transform .3s,-webkit-transform .3s;
`
export const Button = styled.button`
  position: absolute;
  border: 0;
  width: 40px;
  height: 36px;
  right: 5px;
  top: 5px;
  background-color: transparent;
  cursor: pointer;
`