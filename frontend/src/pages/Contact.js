import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaTruck, FaExchangeAlt } from 'react-icons/fa';
import LiveChat from '../components/LiveChat';
import './Contact.css';

const Contact = () => {
  const [chatOpen, setChatOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    queries: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', queries: '' });
  };

  const faqs = [
    {
      question: 'Where are the offices of BabyZone located?',
      answer: 'Currently our office is located in Madurai while the orders are shipped from our warehouses located across India.',
    },
    {
      question: 'How do I know my order has been confirmed?',
      answer: 'After checking out during the payment process, you will get a confirmation that your payment has been processed successfully. You will also get a mail in your registered email id, along with an SMS to your registered mobile number confirming the order.',
    },
    {
      question: 'Are there any other hidden charges like Octroi or Entry tax?',
      answer: 'You will get the final price during check out. Our prices are all inclusive and you need not pay anything extra.',
    },
    {
      question: 'How long will it take to receive my orders?',
      answer: 'For all areas serviced by reputed couriers, the delivery time would be within 3 to 4 business days after dispatch (business days exclude Sundays and other holidays). However items weighing over 2 kilos may take a couple of days longer to reach. For other areas the products will be shipped through Indian Postal Service and may take 1-2 weeks depending on the location.',
    },
    {
      question: 'Will my GST amount be refunded on Order Cancellation and Returns?',
      answer: 'Yes. GST amount collected will be returned to customer\'s source method at the time of Cancellation and Returns',
    },
  ];

  return (
    <div className="contact-page">
      <div className="breadcrumb">
        <Link to="/">Home</Link> / <span>Contact</span>
      </div>

      <div className="contact-layout">
        {/* Left - Reach Us */}
        <div className="reach-us">
          <h2>Reach us</h2>

          <div className="reach-card">
            <div className="reach-item">
              <FaPhone className="reach-icon" />
              <span>+123-456-7890</span>
            </div>
            <div className="reach-item">
              <FaEnvelope className="reach-icon" />
              <span>supporta@babyzone.com</span>
            </div>
          </div>

          <Link to="/track-order" className="reach-card reach-link">
            <div className="reach-item">
              <FaTruck className="reach-icon" />
              <div>
                <strong>Track order&</strong>
                <br />
                <strong>Cancel order</strong>
              </div>
            </div>
          </Link>

          <div className="reach-card">
            <div className="reach-item">
              <FaExchangeAlt className="reach-icon" />
              <div>
                <strong>Exchange and</strong>
                <br />
                <strong>refund policy</strong>
              </div>
            </div>
          </div>

          <button className="live-chat-btn" onClick={() => setChatOpen(true)}>Live Chat</button>
        </div>

        {/* Right - Contact Form */}
        <div className="contact-form-wrapper">
          <h2>Contact Form</h2>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-field">
              <label>Name</label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-field">
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="Email Id"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-field">
              <label>Phone Number</label>
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-field">
              <label>Queries</label>
              <textarea
                name="queries"
                placeholder="Your Message."
                rows="4"
                value={formData.queries}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="send-btn">Send</button>
          </form>
        </div>
      </div>

      {/* FAQs */}
      <div className="faqs-section">
        <h2>FAQ's</h2>
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <h3>{faq.question}</h3>
            <div className="faq-answer">
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Live Chat Modal */}
      <LiveChat isOpen={chatOpen} onClose={() => setChatOpen(false)} />
    </div>
  );
};

export default Contact;
