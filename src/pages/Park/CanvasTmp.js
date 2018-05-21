import React from 'react';
import {offset} from '../../helper.js';

export default class CanvasTmp extends React.Component {
  static defaultProps = {
    width: 200,
    height: 100,
  };

  name = 'theCanvas';
  mouse = null;
  canvas = null;
  offset = {
    x: 0,
    y: 0,
  };

  constructor(props) {
    super(props);

    this.onMouseMove = this.onMouseMove.bind(this);
    this.draw = this.draw.bind(this);
  }

  componentDidMount() {
    document.addEventListener('mousemove', this.onMouseMove, false);
    this.canvas = this.refs.canvas;

    const canvasOffset = offset(this.canvas);
    this.offset.x = canvasOffset.offsetLeft;
    this.offset.y = canvasOffset.offsetTop;

    requestAnimationFrame(this.draw);
  }

  onMouseMove(e) {
    this.mouse = {
      x: e.clientX,
      y: e.clientY,
    };
  };

  draw() {
  }

  render() {
    const {width, height} = this.props;

    return (
      <div className={this.name}>
        <canvas
          ref="canvas"
          width={width}
          height={height}
          style={{
            display: 'block',
            border: '1px solid #333',
          }}
        />
      </div>
    );
  }
}
