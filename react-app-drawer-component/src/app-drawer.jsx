import React from 'react';
import Modal from './modal.jsx';

class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false, show: false };
    this.handleClick = this.handleClick.bind(this);
    this.showHideModal = this.showHideModal.bind(this);
    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
  }

  handleClick() {
    this.setState({ isClicked: !this.state.isClicked });
    this.showHideModal();
  }

  showHideModal() {
    if (this.state.isClicked === false) {
      this.show();
    } else {
      this.hide();
    }
  }

  show() {
    this.setState({ show: true });
  }

  hide() {
    this.setState({ show: false });
  }

  render() {
    return (
      <div className="main">
        <button className="btn" onClick={this.handleClick}>
          <i className="fa-solid fa-bars"></i>
        </button>
        <Modal show={this.state.show} onClose={this.handleClick} />
      </div>
    );
  }
}

export default AppDrawer;
