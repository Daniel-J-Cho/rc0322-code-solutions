import React from 'react';
import ReactDOM from 'react-dom/client';
import Carousel from './carousel.jsx';

const images = [
  { id: 1, imgUrl: './images/001.png' },
  { id: 2, imgUrl: './images/004.png' },
  { id: 3, imgUrl: './images/007.png' },
  { id: 4, imgUrl: './images/025.png' },
  { id: 5, imgUrl: './images/039.png' }
];

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Carousel images={images} />);
