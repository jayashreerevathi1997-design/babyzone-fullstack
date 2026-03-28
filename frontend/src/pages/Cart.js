import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaTrash, FaRegHeart } from 'react-icons/fa';
import Slider from 'react-slick';
import { useCart } from '../context/CartContext';
import './Cart.css';

const relatedProducts = [
  { id: 205, name: 'Cotton Knit Full Sleeves T-Shirt with Frock Floral Print -White & Green', price: 830, image: '/products/cotton-knit-frock.jpg', age: '0-12m, 3-4u, 4-5', colors: ['#333', '#e91e63', '#1565c0'] },
  { id: 209, name: 'Organic Cotton Knit Full Sleeves Sweater Sets with Cap & Tiger Design', price: 1599, image: '/products/organic-sweater-tiger.jpg', age: '0-12m, 3-4u, 4-5', colors: ['#333', '#e91e63', '#1565c0'] },
  { id: 206, name: 'Babyhug Sleeveless Kotta Printed Ethnic Dress Floral Embroidery - Orange', price: 890, image: '/products/babyhug-kotta-dress.jpg', age: '0-12m, 3-4u, 4-5', colors: ['#333', '#e91e63'] },
  { id: 207, name: 'Babyhug Organic Cotton Knit Full Sleeves Sweater Sets with Cap', price: 930, image: '/products/organic-cotton-sweater.jpg', age: '0-12m, 3-4u, 4-5', colors: ['#333', '#e91e63'] },
  { id: 208, name: 'Cotton Woven Full Sleeves Floral Printed Kurta & Pyjama Set - Red', price: 990, image: '/products/cotton-woven-kurta.jpg', age: '0-12m, 3-4u, 4-5', colors: ['#333', '#e91e63', '#1565c0'] },
];

const Cart = () => {
  const navigate = useNavigate();
  const { cartItems, removeFromCart, updateQuantity, addToCart } = useCart();

  const sliderSettings = {
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
    <div className="cart-page">
      <div className="breadcrumb">
        <Link to="/">Home</Link> / <span>Cart</span>
      </div>

      <h1 className="cart-title">Cart</h1>

      {/* Cart Table */}
      {cartItems.length > 0 ? (
        <div className="cart-table">
          <div className="cart-header">
            <span className="cart-col-img"></span>
            <span className="cart-col-name">Name</span>
            <span className="cart-col">Qty</span>
            <span className="cart-col">Age</span>
            <span className="cart-col">Price</span>
            <span className="cart-col">Remove</span>
            <span className="cart-col-action"></span>
          </div>

          {cartItems.map((item) => (
            <div key={item.id} className="cart-row">
              <div className="cart-col-img">
                <img src={item.image} alt={item.name} />
              </div>
              <div className="cart-col-name">
                <p>{item.name}</p>
              </div>
              <div className="cart-col">
                <select
                  value={item.quantity}
                  onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                  className="qty-select"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(n => (
                    <option key={n} value={n}>{n}</option>
                  ))}
                </select>
              </div>
              <div className="cart-col">
                <span>{item.age || '0-12M'}</span>
              </div>
              <div className="cart-col">
                <span>{item.price?.toLocaleString()}</span>
              </div>
              <div className="cart-col">
                <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
                  <FaTrash />
                </button>
              </div>
              <div className="cart-col-action">
                <button
                  className="checkout-btn"
                  onClick={() => navigate('/checkout', {
                    state: {
                      product: {
                        id: item.id,
                        name: item.name,
                        image: item.image,
                        price: item.price,
                        quantity: item.quantity,
                        age: item.age || '0-12M',
                      }
                    }
                  })}
                >
                  Checkout
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="empty-cart">
          <p>Your cart is empty</p>
        </div>
      )}

      {/* You might also like */}
      <div className="cart-related">
        <h2>You might also like</h2>
        <div className="cart-related-slider">
          <Slider {...sliderSettings}>
            {relatedProducts.map((rp) => (
              <div key={rp.id} className="cart-related-card">
                <div className="cart-related-img">
                  <Link to={`/product/${rp.id}`}>
                    <img src={rp.image} alt={rp.name} />
                  </Link>
                  <button className="cart-related-wishlist"><FaRegHeart color="#999" /></button>
                </div>
                <div className="cart-related-info">
                  <h3><Link to={`/product/${rp.id}`}>{rp.name}</Link></h3>
                  <p className="cart-related-price">Price : ₹{rp.price?.toLocaleString()}</p>
                  <p className="cart-related-age">Age: {rp.age}</p>
                  <div className="cart-related-colors">
                    <span>Color: </span>
                    {rp.colors?.map((c, i) => (
                      <span key={i} className="cart-color-dot" style={{ backgroundColor: c }}></span>
                    ))}
                  </div>
                  <div className="cart-related-actions">
                    <button className="cart-rel-buy" onClick={() => { addToCart(rp); }}>Buy Now</button>
                    <button className="cart-rel-add" onClick={() => addToCart(rp)}>Add to cart</button>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* Continue Shopping */}
      <div className="continue-shopping-wrapper">
        <Link to="/" className="continue-shopping-btn">Continue shopping</Link>
      </div>
    </div>
  );
};

export default Cart;
