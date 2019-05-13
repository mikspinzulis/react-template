import React, { Fragment } from 'react';
import posed from 'react-pose';
import { tween } from 'popmotion';
import { interpolate } from 'flubber';
import './styles.css';

const paths = {
  plane:
   'M510,255c0-20.4-17.85-38.25-38.25-38.25H331.5L204,12.75h-51l63.75,204H76.5l-38.25-51H0L25.5,255L0,344.25h38.25 ' +
   'l38.25-51h140.25l-63.75,204h51l127.5-204h140.25C492.15,293.25,510,275.4,510,255z',
  circle:
    'M255,0C114.75,0,0,114.75,0,255s114.75,255,255,255s255-114.75,255-255S395.25,0,255,0z',
  guitar:
    'M459,114.75H357v-51l-51-51H204l-51,51v51H51c-28.05,0-51,22.95-51,51v280.5c0,28.05,22.95,51,51,51h408 ' +
    '   c28.05,0,51-22.95,51-51v-280.5C510,137.7,487.05,114.75,459,114.75z M306,114.75H204v-51h102V114.75z',
  bookmark:
    'M357,0H102C73.95,0,51,22.95,51,51v408l178.5-76.5L408,459V51C408,22.95,385.05,0,357,0z'
};

const pathIds = Object.keys(paths);

const morphTransition = ({ from, to }) =>
  tween({
    from: 0,
    to: 1
  }).pipe(interpolate(from, to));

const Icon = posed.path(
  pathIds.reduce((config, id) => {
    config[id] = {
      d: paths[id],
        transition: morphTransition
      };
    return config;
  }, {})
);

const NextButton = posed.button({
  hoverable: true,
  pressable: true,
  init: { scale: 1 },
  hover: { scale: 1.1 },
  press: { scale: 0.8 }
});

class Example extends React.Component {
  state = { pathIndex: 0 };
    gotoNext = () => {
      const { pathIndex } = this.state;
      const nextIndex = pathIndex + 1;
      this.setState({
        pathIndex: nextIndex > pathIds.length - 1 ? 0 : nextIndex
      });
    };

    render() {
      return (
        <Fragment>
          <svg width="300" height="300" viewBox="0 0 520 500" className={"icons"}>
             <Icon pose={pathIds[this.state.pathIndex]} />
          </svg>
          <NextButton onClick={this.gotoNext}>Next icon!</NextButton>
        </Fragment>
      );
    }
}

export default Example;
