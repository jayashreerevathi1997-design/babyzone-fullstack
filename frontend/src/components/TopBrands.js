import React from 'react';
import './TopBrands.css';

const TopBrands = ({ brands = [] }) => {
  const defaultBrands = [
    { id: 1, name: 'Kidlon', logo: '/brands/kidlon.png' },
    { id: 2, name: 'Fancy Fluff', logo: '/brands/fancy-fluff.jpg' },
    { id: 3, name: "Johnson's Baby", logo: '/brands/johnsons.jpg' },
    { id: 4, name: 'Pampers', logo: '/brands/pampers.png' },
    { id: 5, name: 'Babyhug', logo: '/brands/babyhug.webp' },
  ];

  const displayBrands = brands.length > 0 ? brands : defaultBrands;

  return (
    <section className="top-brands">
      <h2 className="section-title">Top Brands</h2>
      <div className="brands-strip">
        {displayBrands.map((brand) => (
          <div key={brand.id} className="brand-item">
            <img src={brand.logo} alt={brand.name} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopBrands;
