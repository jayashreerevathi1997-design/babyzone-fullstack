import React from 'react';
import ProductCard from './ProductCard';
import './NewArrivals.css';

const NewArrivals = ({ products = [], onBuy }) => {
  return (
    <section className="new-arrivals">
      <h2 className="section-title">New Arrivals</h2>
      <div className="products-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onBuy={onBuy} />
        ))}
      </div>
    </section>
  );
};

export default NewArrivals;
