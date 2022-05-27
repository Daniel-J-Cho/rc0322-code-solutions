import React from 'react';

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false, counter: 0 };
    this.handleClick = this.handleClick.bind(this);
    this.timer = this.timer.bind(this);
    this.play = this.play.bind(this);
    this.reset = this.reset.bind(this);
    this.pause = this.pause.bind(this);
    this.playPause = this.playPause.bind(this);
  }

  handleClick() {
    this.setState({ isClicked: !this.state.isClicked });
    this.playPause();
  }

  playPause() {
    if (this.state.isClicked === false) {
      this.play();
    } else {
      this.pause();
    }
  }

  timer() {
    this.setState({ counter: this.state.counter + 1 });
  }

  play() {
    this.intervalId = setInterval(this.timer, 1000);
  }

  pause() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.setState({ counter: 0 });
  }

  render() {
    let btn;
    if (this.state.isClicked === false) {
      btn = <i className="fa-solid fa-play"></i>;
    } else {
      btn = <i className="fa-solid fa-pause"></i>;
    }
    return (
      <div>
        <div className="container">
          <button onClick={this.reset} className='circle'></button>
          <p>{this.state.counter}</p>
          <a onClick={this.handleClick}>{btn}</a>
        </div>
      </div>
    );
  }
}

export default Stopwatch;
