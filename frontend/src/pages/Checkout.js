import React, { useState } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { FaCheckCircle } from 'react-icons/fa';
import './Checkout.css';

const Checkout = () => {
  const location = useLocation();
  const product = location.state?.product || {
    name: 'Baby Product',
    price: 999,
    image: '/products/cotton-dress.jpg',
    quantity: 1,
    age: '0-12m',
  };

  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    phone: '',
    country: '',
    saveInfo: false,
    sendUpdates: false,
    paymentMethod: 'secure',
  });

  const navigate = useNavigate();
  const [discountCode, setDiscountCode] = useState('');
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [orderId] = useState('2345CD67890227');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const subtotal = product.price * (product.quantity || 1);
  const shipping = 99;
  const cgst = 25.62;
  const total = subtotal + shipping;

  const handleOrder = () => {
    if (formData.paymentMethod === 'cod') {
      setOrderConfirmed(true);
      return;
    }

    // Razorpay Payment
    const options = {
      key: 'rzp_test_ST1w5W7DlqVXnV',
      amount: total * 100, // Amount in paise
      currency: 'INR',
      name: 'BabyZone',
      description: product.name,
      image: '/logo.png',
      handler: function (response) {
        // Payment successful
        setOrderConfirmed(true);
        console.log('Payment ID:', response.razorpay_payment_id);
      },
      prefill: {
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        contact: formData.phone,
      },
      notes: {
        address: `${formData.address}, ${formData.city}, ${formData.state} - ${formData.pincode}`,
      },
      theme: {
        color: '#E91E63',
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.on('payment.failed', function (response) {
      alert('Payment failed. Please try again.');
      console.error(response.error);
    });
    rzp.open();
  };

  return (
    <div className="checkout-page">
      {/* Order Confirmation Modal */}
      {orderConfirmed && (
        <div className="order-modal-overlay">
          <div className="order-modal">
            <h2>Your Order is confirmed</h2>
            <div className="order-modal-icon">
              <FaCheckCircle size={80} color="#fdd835" />
            </div>
            <h3>Thank you for shopping with us</h3>
            <p>Your order will be delivered at 7 working days</p>
            <p className="order-id">Your order Id: {orderId}</p>
            <div className="order-modal-actions">
              <button className="track-order-btn" onClick={() => navigate('/track-order', { state: { order: { id: orderId, product: { name: product.name, image: product.image, price: product.price }, paymentMethod: 'Cash on Delivery', expectedDelivery: 'sun, Aug 31' } } })}>Track order</button>
              <button className="back-btn" onClick={() => navigate('/')}>Back</button>
            </div>
          </div>
        </div>
      )}

      <div className="breadcrumb">
        <Link to="/">Home</Link> / <Link to="/category/baby-fashion">baby fashion</Link> / <Link to={`/product/${product.id}`}>{product.name}</Link> / Cart / <span>Checkout/</span>
      </div>

      <h1 className="checkout-title">Checkout</h1>

      <div className="checkout-layout">
        {/* Left - Form */}
        <div className="checkout-form-section">
          {/* Contact */}
          <div className="form-group-section">
            <h2>Contact</h2>
            <input
              type="email"
              name="email"
              placeholder="Email (for order updates)"
              value={formData.email}
              onChange={handleChange}
              className="form-input full"
            />
            <label className="checkbox-label">
              <input
                type="checkbox"
                name="sendUpdates"
                checked={formData.sendUpdates}
                onChange={handleChange}
              />
              Send me order updates, news and offers on Email and WhatsApp
            </label>
          </div>

          {/* Delivery Address */}
          <div className="form-group-section">
            <h2>Delivery address</h2>
            <input
              type="text"
              name="country"
              placeholder="Country/Region"
              value={formData.country}
              onChange={handleChange}
              className="form-input full"
            />
            <div className="form-row">
              <input
                type="text"
                name="firstName"
                placeholder="First name"
                value={formData.firstName}
                onChange={handleChange}
                className="form-input half"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last name"
                value={formData.lastName}
                onChange={handleChange}
                className="form-input half"
              />
            </div>
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
              className="form-input full"
            />
            <div className="form-row three">
              <input
                type="text"
                name="city"
                placeholder="City"
                value={formData.city}
                onChange={handleChange}
                className="form-input"
              />
              <input
                type="text"
                name="state"
                placeholder="State"
                value={formData.state}
                onChange={handleChange}
                className="form-input"
              />
              <input
                type="text"
                name="pincode"
                placeholder="Pincode"
                value={formData.pincode}
                onChange={handleChange}
                className="form-input"
              />
            </div>
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="form-input full"
            />
            <label className="checkbox-label">
              <input
                type="checkbox"
                name="saveInfo"
                checked={formData.saveInfo}
                onChange={handleChange}
              />
              Save this information for next time
            </label>
          </div>

          {/* Payment Method */}
          <div className="form-group-section">
            <h2>Choose your payment method</h2>
            <div className="payment-options">
              <label className="payment-option">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="secure"
                  checked={formData.paymentMethod === 'secure'}
                  onChange={handleChange}
                />
                <span>Secure transaction(UPI, cards, wallete, net banking)</span>
                <div className="payment-icons">
                  <span className="pay-icon visa"></span>
                  <span className="pay-icon master"></span>
                  <span className="pay-icon rupay"></span>
                  <span className="pay-icon upi"></span>
                </div>
              </label>
              <label className="payment-option">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="cod"
                  checked={formData.paymentMethod === 'cod'}
                  onChange={handleChange}
                />
                <span>Cash on delivery</span>
              </label>
            </div>
          </div>
        </div>

        {/* Right - Order Summary */}
        <div className="order-summary">
          <h2>Ordert Summary</h2>
          <div className="summary-product">
            <img src={product.image} alt={product.name} />
            <div className="summary-product-info">
              <h3>{product.name}</h3>
              <p>Qty:{product.quantity || 1}</p>
              <p>Age : {product.age || '0-12m'}</p>
              <p>Price:{product.price?.toLocaleString()}</p>
            </div>
          </div>

          <div className="discount-input">
            <input
              type="text"
              placeholder="Discount code or gift card"
              value={discountCode}
              onChange={(e) => setDiscountCode(e.target.value)}
            />
          </div>

          <div className="summary-row">
            <span>Sub total</span>
            <span>₹{subtotal.toLocaleString()}</span>
          </div>
          <div className="summary-row">
            <span></span>
            <span className="flat-rate">Flat rate : ₹{shipping}.00</span>
          </div>
          <div className="summary-row">
            <span>Shipping</span>
            <span className="shipping-info">Shipping to Madhya Pradesh.</span>
          </div>

          <div className="summary-row total-row">
            <span>Total</span>
            <span className="total-amount">₹ {total.toLocaleString()}</span>
          </div>
          <div className="tax-info">
            (Includes ₹{cgst} CGST, ₹{cgst} CGST)
          </div>

          <button className="order-now-btn" onClick={handleOrder}>Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
