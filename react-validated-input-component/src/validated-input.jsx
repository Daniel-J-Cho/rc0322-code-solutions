import React from 'react';

class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { password: '' };
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  render() {
    let icon;
    let errMsg;
    if (this.state.password.length === 0) {
      errMsg = <p>A password is required.</p>;
      icon = <i className="fa-solid fa-xmark"></i>;
    } else if (this.state.password.length < 8) {
      errMsg = <p>Your password is too short.</p>;
      icon = <i className="fa-solid fa-xmark"></i>;
    } else {
      icon = <i className="fa-solid fa-check"></i>;
    }
    return (
      <div className="container">
        <label className="password">Password</label>
        <input type="password" value={this.state.password} onChange={this.handlePasswordChange}></input>
        <a>{icon}</a>
        <label className="error">{errMsg}</label>
      </div>
    );
  }
}

export default ValidatedInput;
