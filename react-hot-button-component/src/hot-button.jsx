import React from 'react';

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clickCount: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ clickCount: this.state.clickCount + 1 });
  }

  render() {
    let btnColor;

    if (this.state.clickCount < 3) {
      btnColor = 'btn-grey';
    } else if (this.state.clickCount < 6) {
      btnColor = 'btn-dark-blue';
    } else if (this.state.clickCount < 9) {
      btnColor = 'btn-purple';
    } else if (this.state.clickCount < 12) {
      btnColor = 'btn-pink';
    } else if (this.state.clickCount < 15) {
      btnColor = 'btn-orange';
    } else {
      btnColor = 'btn-white';
    }
    return (
      <button className = {`btn ${btnColor}`} onClick= {this.handleClick}>Hot Button</button>
    );
  }
}

export default CustomButton;
