import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SignInModal from '../components/SignInModal';
import './Forum.css';

const Forum = () => {
  const [showSignIn, setShowSignIn] = useState(false);

  const forumCategories = [
    { id: 1, title: 'Pregancy', image: '/forum/pregnancy.jpg', desc: 'Join forum to ask or share something' },
    { id: 2, title: 'Parenting', image: '/forum/parenting.webp', desc: 'Join forum to ask or share something' },
    { id: 3, title: 'Childcare', image: '/forum/childcare.jpg', desc: 'Join forum to ask or share something' },
    { id: 4, title: 'Product Reviews', image: '/forum/reviews.png', desc: 'Join forum to ask or share something' },
  ];

  const blogs = [
    {
      id: 1,
      title: 'The Story of My Rainbow Baby',
      image: '/forum/rainbow-baby.webp',
      excerpt: 'What does it mean when I say that my daughter is my "Rainbow Baby"? A "Rainbow Baby" is a baby that is born following a miscarriage or an infant loss. Just like a beautiful and...',
    },
    {
      id: 2,
      title: 'Baby Dry Skin: Symptoms, Causes and Treatment',
      image: '/forum/dry-skin.jpg',
      excerpt: 'For a parent, their baby\'s health is of utmost importance. This means taking care of their internal health by ensuring the right kind of nutrition and choosing products that not only secure their well-being but also their comfort...',
    },
    {
      id: 3,
      title: 'Raisins for babies- Health benefits and risks',
      image: '/forum/raisins.jpg',
      excerpt: 'Many of us love a good old raisin– they are small, wrinkled packets of energy that have been around since medieval times and are famous for being a natural source of minerals, vitamins, and carbohydrates...',
    },
    {
      id: 4,
      title: 'Hernia in Babies – Types, Causes, Signs and Treatment',
      image: '/forum/hernia.jpg',
      excerpt: 'A hernia is a lump that develops under the skin, in the tummy or groin region, and in variable sizes. When the muscles across the tummy area and the pelvic region weaken or develop a gap, it can lead to the protrusion of organs...',
    },
  ];

  return (
    <div className="forum-page">
      <div className="breadcrumb">
        <Link to="/">home</Link> / <span>Forum</span>
      </div>

      {/* Join Forum */}
      <div className="section-label">
        <span>Join Forum</span>
      </div>

      <div className="forum-categories">
        {forumCategories.map((cat) => (
          <div key={cat.id} className="forum-card">
            <div className="forum-card-img">
              <img src={cat.image} alt={cat.title} />
            </div>
            <div className="forum-card-info">
              <h3>{cat.title}</h3>
              <p>{cat.desc}</p>
              <button className="join-btn" onClick={() => setShowSignIn(true)}>Join</button>
            </div>
          </div>
        ))}
      </div>

      {/* Blogs */}
      <div className="blogs-header">
        <div className="section-label">
          <span>Blogs</span>
        </div>
        <a href="#" className="view-more-link">View more</a>
      </div>

      <div className="blogs-grid">
        {blogs.map((blog) => (
          <div key={blog.id} className="blog-card">
            <div className="blog-card-img">
              <img src={blog.image} alt={blog.title} />
            </div>
            <div className="blog-card-content">
              <h3>{blog.title}</h3>
              <p>{blog.excerpt}</p>
              <button className="read-more-btn">Read more</button>
            </div>
          </div>
        ))}
      </div>

      {/* Sign In Modal */}
      <SignInModal isOpen={showSignIn} onClose={() => setShowSignIn(false)} />
    </div>
  );
};

export default Forum;
