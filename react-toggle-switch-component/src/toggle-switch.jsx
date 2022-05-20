import React from 'react';

class CustomToggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ isClicked: !this.state.isClicked });
  }

  render() {
    let togTxt;
    let toggle;
    let circPos;

    if (this.state.isClicked === false) {
      togTxt = 'OFF';
      toggle = 'tgl-off';
      circPos = 'circ-off';
    } else {
      togTxt = 'ON';
      toggle = 'tgl-on';
      circPos = 'circ-on';
    }

    return (
      <div>
        <button className={`${toggle}`} onClick={this.handleClick}></button>
        <button className={`${circPos}`} onClick={this.handleClick}></button>
        <span onClick={this.handleClick}>{togTxt}</span>
      </div>
    );
  }
}

export default CustomToggle;
