import React from 'react';
import { Link } from 'react-router-dom';
import './CategorySection.css';

const CategorySection = ({ categories = [] }) => {
  const defaultCategories = [
    { id: 1, name: 'Boys fashion', image: '/categories/boys-fashion.jpg', slug: 'boys-fashion' },
    { id: 2, name: 'Girls fashion', image: '/categories/girls-fashion.jpg', slug: 'girls-fashion' },
    { id: 3, name: 'Footwear', image: '/categories/footwear.jpg', slug: 'footwear' },
    { id: 4, name: 'Accessories', image: '/categories/accessories.jpg', slug: 'accessories' },
    { id: 5, name: 'Toys', image: '/categories/toys.jpg', slug: 'toys' },
    { id: 6, name: 'Beds', image: '/categories/beds.jpg', slug: 'beds' },
  ];

  const displayCategories = categories.length > 0 ? categories : defaultCategories;

  return (
    <section className="category-section">
      <h2 className="section-title">Categories</h2>
      <div className="category-grid">
        {displayCategories.map((cat) => (
          <Link to={`/category/${cat.slug}`} key={cat.id} className="category-card">
            <div className="category-img-wrapper">
              <img src={cat.image} alt={cat.name} />
            </div>
            <p className="category-name">{cat.name}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
