import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import './TopSelling.css';

const TopSelling = ({ products = [] }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="top-selling">
      <h2 className="section-title">Top selling</h2>
      <div className="top-selling-slider">
        <Slider {...settings}>
          {products.map((product) => (
            <div key={product.id} className="top-selling-card">
              <Link to={`/product/${product.id}`}>
                <div className="top-selling-img">
                  <img src={product.image} alt={product.name} />
                </div>
                <p className="top-selling-name">{product.name}</p>
              </Link>
              <Link to={`/product/${product.id}`} className="shop-now-btn">
                Shop Now
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TopSelling;
