import styled from 'styled-components'

export const HeaderWrapper = styled.div`
&.Opened { 
    position: sticky;
    z-index: 200;
  ul {
    flex-direction: column;
    position: absolute;
    width: 100%;
    background: black;
    top:53px; 
  }
  div >div {
    flex-direction: column;
  }
  }
  button {
    display: none;
  }
  @media screen and (max-width: 1020px) {
  svg {
    display:none;
  }
  button {
    background: white;
    right: 14px;
    left: inherit;
    top: 0;
    width: 50px;
    margin: 0;
    display: block;
  }
  ul {
    display:none;
  }
  &.Closed {
    ul,
    .search {
      display:none;}
    }
  }
  img.palms {
    width: 100%;
    position: relative;
    top: -55px;
    min-height: 100vh;
  }
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
  }
  li {
    padding: 0 20px;
  }
  li a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-family: fantasy;
  }
  li a:hover {
    background-color: darkslategray;
  }
`
