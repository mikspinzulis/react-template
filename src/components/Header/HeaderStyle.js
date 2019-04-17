import styled from 'styled-components'

export const HeaderWrapper = styled.div`
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
