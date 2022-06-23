import React from 'react';
import ReactDOM from 'react-dom/client';
import Carousel from './carousel.jsx';

const images = [
  {
    key: 0,
    imgUrl: './images/001.png'
  },
  {
    key: 1,
    imgUrl: './images/004.png'
  },
  {
    key: 2,
    imgUrl: './images/007.png'
  },
  {
    key: 3,
    imgUrl: './images/025.png'
  },
  {
    key: 4,
    imgUrl: './images/039.png'
  }
];

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Carousel images={images} />);
