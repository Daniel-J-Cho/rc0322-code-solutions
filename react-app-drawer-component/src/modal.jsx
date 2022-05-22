import React from 'react';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.stopProp = this.stopProp.bind(this);
  }

  handleChange() {
    this.props.onClose();
  }

  stopProp(event) {
    event.stopPropagation();
  }

  render() {

    if (!this.props.show) {
      return null;
    }

    return (
      <div className="modal" onClick={this.handleChange}>
        <div className="modal-body" onClick={this.stopProp}>
          <h3>Menu</h3>
          <p>
            <a href="#" onClick={this.handleChange}>About</a>
          </p>
          <p>
            <a href="#" onClick={this.handleChange}>Get Started</a>
          </p>
          <p>
            <a href="#" onClick={this.handleChange}>Sign In</a>
          </p>
        </div>
      </div>
    );
  }
}

export default Modal;
