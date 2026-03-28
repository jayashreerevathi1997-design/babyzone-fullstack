import React from 'react';
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';
import './CustomerReviews.css';

const CustomerReviews = () => {
  const reviews = [
    {
      id: 1,
      name: 'Bosky',
      avatar: '/avatars/bosky.png',
      rating: 5,
      review: 'Very fast service and products are genuine. Definitely I am satisfied !',
      likes: 5,
      dislikes: 0,
    },
    {
      id: 2,
      name: 'Tulip',
      avatar: '/avatars/tulip.png',
      rating: 5,
      review: 'Amazing products. Reasonable prices. Gr8 customer service. Cheers !!!',
      likes: 5,
      dislikes: 0,
    },
    {
      id: 3,
      name: 'Deepa',
      avatar: '/avatars/deepa.png',
      rating: 5,
      review: 'Great range of products right from new-born essentials .. Excellent product quality and delivery.',
      likes: 5,
      dislikes: 0,
    },
    {
      id: 4,
      name: 'Moshin',
      avatar: '/avatars/moshin.jpg',
      rating: 5,
      review: 'Great site for baby product. I m shopping here since 2012. The quality of product and services is never changed. Keep it up',
      likes: 5,
      dislikes: 0,
    },
  ];

  const renderStars = (count) => {
    return '★'.repeat(count) + '☆'.repeat(5 - count);
  };

  return (
    <section className="customer-reviews">
      <h2 className="section-title">Our happy customer</h2>
      <div className="reviews-grid">
        {reviews.map((review) => (
          <div key={review.id} className="review-card">
            <div className="review-avatar">
              <img src={review.avatar} alt={review.name} />
            </div>
            <h3 className="review-name">{review.name}</h3>
            <div className="review-stars">{renderStars(review.rating)}</div>
            <p className="review-text">{review.review}</p>
            <div className="review-actions">
              <span className="review-action">
                <FaThumbsDown /> {review.dislikes}
              </span>
              <span className="review-action">
                <FaThumbsUp /> {review.likes}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="view-more-wrapper">
        <button className="view-more-btn">View More</button>
      </div>
    </section>
  );
};

export default CustomerReviews;
