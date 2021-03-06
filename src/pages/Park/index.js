import React from 'react';
import BallDrop from './BallDrop';
import ProgressBarCircle from './ProgressBarCircle';
import ShootTheBall from './ShootTheBall';
import TheEye from './TheEye';
import TheGalaxy from './TheGalaxy.js';
import TheMovingBall from './TheMovingBall.js';
import TheWaves from './TheWaves.js';

export default class Park extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="park">
        <h4>Park</h4>

        <Block title="Move cursor around">
          <div className="d-flex">
            <TheEye width={100} height={50}/>
            <TheEye width={100} height={50}/>
          </div>
        </Block>

        <Block title="Click to drive the ball">
          <TheMovingBall width={300} height={400}/>
        </Block>

        <Block title="Keep cursor inside area">
          <TheGalaxy width={300} height={400} number={50}/>
        </Block>

        <Block title="Click in area to change wave style">
          <TheWaves width={300} height={400}/>
        </Block>

        <Block title="Auto change color">
          <ProgressBarCircle width={300} height={300}/>
        </Block>

        <Block title="Ball drop">
          <BallDrop width={300} height={400}/>
        </Block>

        <Block title="Shoot The Ball">
          <ShootTheBall width={300} height={400}/>
        </Block>
      </div>
    );
  }
}

const Block = ({title, children}) => (
  <div className="d-flex flex-column mb-3 align-items-center">
    <div className="">
      {title}
    </div>
    {children}
  </div>
);
