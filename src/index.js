import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from './Carousel';
import './index.css';

const Slide = () => <img src="./dummy-slide.png" alt="" />;

ReactDOM.render(
<div>
  <h2>Normal</h2>
  <Carousel>
    <Slide /><Slide /><Slide /><Slide /><Slide />
  </Carousel>

  <h2>Cell padding</h2>
  <Carousel
    slidePadding={10}
  >
    <Slide /><Slide /><Slide /><Slide /><Slide />
  </Carousel>

  <h2>Multiple at once</h2>
  <Carousel
    autoplay={false}
    slidesToShow={2}
    slidesToScroll={2}
    slidePadding={10}
  >
    <Slide /><Slide /><Slide /><Slide /><Slide />
  </Carousel>
</div>
, document.getElementById('root'));
