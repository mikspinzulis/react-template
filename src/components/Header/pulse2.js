import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components'

const pulse = keyframes`
0%{
  fill:#10aded;
  stroke-width:50px
}
40% {
  fill:#4091d0;
  stroke-width:50px
}
80% {
  fill:#050035;
  stroke-width:2px
}
100%{
  fill:#10aded;
  stroke-width:50px
}
`;
const StyledCircle = styled.svg`
  height: 19rem;
  width: 19rem;
  display: block;
  margin: auto;
  position: absolute;
  top: 30%;
  left:70%;
`;
const StyledInnerCircle = styled.circle`
  animation: ${pulse} infinite 4s linear;
  fill: blue;
`;

const circle = (
  <StyledCircle height="200" width="200" className={"pulse"}>
    <StyledInnerCircle cx="150" cy="150" r="120" stroke="black" stroke-width="3" />
  </StyledCircle>
);

class App extends Component {
  render() {
    return (
      <div>{circle}</div>
    );
  }
}

export default App;
