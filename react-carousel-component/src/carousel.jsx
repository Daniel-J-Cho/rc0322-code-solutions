import React from 'react';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.revolver = this.revolver.bind(this);
    this.nextImg = this.nextImg.bind(this);
    this.prevImg = this.prevImg.bind(this);
  }

  revolver() {
    this.intervalId = setInterval(this.nextImg, 3000);
  }

  nextImg() {
    let activeIndex = this.state.activeIndex + 1;
    if (activeIndex >= this.props.images.length - 1) {
      activeIndex = 0;
    }
    this.setState({ activeIndex: activeIndex });
  }

  prevImg() {
    let activeIndex = this.state.activeIndex - 1;
    if (activeIndex < 0) {
      activeIndex = this.props.images.length - 1;
    }
    this.setState({ activeIndex: activeIndex });
  }

  componentDidMount() {
    this.revolver();
  }

  render() {
    const currentImg = this.props.images[this.state.activeIndex];

    return (
      <div className="container">
        <div className="row">
          <div className="col-third">
            <a onClick={this.prevImg} href="#">
              <i className="fa-solid fa-angle-left"></i>
            </a>
          </div>
          <div className="col-third">
            <div className="img-div">
              <img src={currentImg.imgUrl} alt="Pokemon-image"></img>
            </div>
            <div className="circ-row">
              <a href="#">
                <i className={`${this.state.activeIndex === 0 ? 'fas fa-circle' : 'far fa-circle'}`}></i>
              </a>
              <span>&nbsp;</span>
              <a href="#">
                <i className={`${this.state.activeIndex === 1 ? 'fas fa-circle' : 'far fa-circle'}`}></i>
              </a>
              <span>&nbsp;</span>
              <a href="#">
                <i className={`${this.state.activeIndex === 2 ? 'fas fa-circle' : 'far fa-circle'}`}></i>
              </a>
              <span>&nbsp;</span>
              <a href="#">
                <i className={`${this.state.activeIndex === 3 ? 'fas fa-circle' : 'far fa-circle'}`}></i>
              </a>
              <span>&nbsp;</span>
              <a href="#">
                <i className={`${this.state.activeIndex === 4 ? 'fas fa-circle' : 'far fa-circle'}`}></i>
              </a>
            </div>
          </div>
          <div className="col-third">
            <a onClick={this.nextImg} href="#">
              <i className="fa-solid fa-angle-right"></i>
            </a>
          </div>
        </div>
      </div>

    );
  }
}

export default Carousel;
