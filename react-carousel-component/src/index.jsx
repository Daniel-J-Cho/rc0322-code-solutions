import React from 'react';
import ReactDOM from 'react-dom/client';
import Carousel from './carousel.jsx';

const images = [
  { imgUrl: './images/001.png' },
  { imgUrl: './images/004.png' },
  { imgUrl: './images/007.png' },
  { imgUrl: './images/025.png' },
  { imgUrl: './images/039.png' }
];

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Carousel images={images} />);
