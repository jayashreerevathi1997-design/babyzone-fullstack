import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaShoppingCart, FaShippingFast, FaTruck, FaBoxOpen } from 'react-icons/fa';
import './TrackOrder.css';

const TrackOrder = () => {
  const location = useLocation();
  const order = location.state?.order || {
    id: '2345CD67890227',
    product: {
      name: 'Luv Lap LuvLap Galaxy Baby Stroller for 03 Years, 5-Point Safety Harness',
      image: '/products/stroller-comfy.webp',
      price: 3050,
    },
    paymentMethod: 'Cash on Delivery',
    expectedDelivery: 'sun, Aug 31',
  };

  const trackingSteps = [
    {
      icon: <FaShoppingCart />,
      title: 'Order Placed',
      detail: 'May 21,2025 | 03:45 pm',
      completed: true,
    },
    {
      icon: <FaShippingFast />,
      title: 'OrderDispatched',
      detail: 'May 22,2025 | 11:45 am',
      completed: true,
    },
    {
      icon: <FaTruck />,
      title: 'Order in transit',
      detail: 'Reached at Tenkasi,Post office',
      completed: true,
    },
    {
      icon: <FaBoxOpen />,
      title: 'Delivered successfully',
      detail: 'Not delivered yet',
      completed: false,
    },
  ];

  return (
    <div className="track-order-page">
      <div className="breadcrumb">
        <Link to="/">Home</Link> / <Link to="/contact">Contact</Link> / <span>Track order</span>
      </div>

      <div className="track-order-card">
        <h2>Your Order</h2>

        {/* Order Info */}
        <div className="order-info">
          <img src={order.product.image} alt={order.product.name} className="order-product-img" />
          <div className="order-details">
            <div className="order-meta">
              <span>Order no #{order.id}</span>
              <span>{order.paymentMethod} ₹{order.product.price.toLocaleString()}</span>
            </div>
            <h3>{order.product.name}</h3>
            <p className="order-delivery">Exp : Delivery by {order.expectedDelivery}</p>
          </div>
        </div>

        {/* Tracking Timeline */}
        <div className="tracking-timeline">
          {trackingSteps.map((step, index) => (
            <div key={index} className={`timeline-step ${step.completed ? 'completed' : 'pending'}`}>
              <div className="timeline-icon-wrapper">
                <div className={`timeline-icon ${step.completed ? 'completed' : 'pending'}`}>
                  {step.icon}
                </div>
                {index < trackingSteps.length - 1 && (
                  <div className={`timeline-line ${step.completed ? 'completed' : 'pending'}`}></div>
                )}
              </div>
              <div className="timeline-content">
                <h4>{step.title}</h4>
                <p>{step.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrackOrder;
