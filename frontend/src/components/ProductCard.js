import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './ProductCard.css';

const ProductCard = ({ product, onBuy }) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`} className="product-link">
        <div className="product-img-wrapper">
          <img src={product.image} alt={product.name} />
        </div>
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">MRP: ₹ {product.price?.toLocaleString()}</p>
      </Link>
      <button className="buy-btn" onClick={() => { addToCart(product); navigate('/cart'); }}>
        Buy
      </button>
    </div>
  );
};

export default ProductCard;
