import React from 'react';

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = { openId: null };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(id) {
    if (this.state.openId === id) {
      return this.setState({ openId: null });
    }

    this.setState({ openId: id });
  }

  render() {
    const topics = this.props.topics.map(topic => (
      <div key={topic.id}>
        <div onClick={() => this.handleClick(topic.id)}>
          <button className='btn'>{topic.title}</button>
        </div>
        {
          this.state.openId === topic.id ? <div className='popup'>{topic.desc}</div> : null
        }
      </div>
    ));

    return (
      <div>
        {topics}
      </div>
    );
  }
}

export default Accordion;
