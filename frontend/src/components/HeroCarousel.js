import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './HeroCarousel.css';

const HeroCarousel = ({ banners = [] }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  const defaultBanners = [
    {
      id: 1,
      title: 'Baby beds & Accessories',
      discount: 'Flat 30% Off',
      image: '/banners/banner1.jpg',
      link: '/category/beds',
    },
    {
      id: 2,
      title: 'Baby Fashion Collection',
      discount: 'Up to 50% Off',
      image: '/banners/banner2.jpg',
      link: '/category/fashion',
    },
  ];

  const displayBanners = banners.length > 0 ? banners : defaultBanners;

  return (
    <div className="hero-carousel">
      <Slider {...settings}>
        {displayBanners.map((banner) => (
          <div key={banner.id} className="hero-slide">
            <div className="hero-slide-content" style={{ backgroundImage: `url(${banner.image})` }}>
              <div className="hero-text">
                <span className="hero-discount">{banner.discount}</span>
                <h2>{banner.title}</h2>
                <a href={banner.link} className="shop-now-btn">Shop Now</a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroCarousel;
