import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { FaRegHeart, FaHeart, FaStar } from 'react-icons/fa';
import Slider from 'react-slick';
import './ProductDetail.css';

// All products data
const productsData = {
  201: {
    name: 'Mothercare Junior Boys Game Day Everley Striped Polo Shirt - Blue',
    price: 1699,
    images: ['/products/boys-polo-shirt.jpg', '/products/boys-polo-shirt.jpg'],
    colors: ['#1565c0', '#e91e63', '#333'],
    ageGroups: ['0-12m', '3-4y', '4-5y'],
    category: 'baby fashion',
    description: {
      atGlance: 'This sporty polo is made from responsibly sourced cotton which makes it cool, airy and perfect for playtime.',
      features: [
        '100% responsibly sourced cotton',
        'Sports style V-neck collar for comfort during play',
        'Covered back-neck seams to prevent irritation',
      ],
      careInstruction: 'Machine Wash',
    },
    reviews: [
      { name: 'Arya', avatar: '/avatars/bosky.png', rating: 5, text: 'Really amazing and best shirt for hot weather.' },
      { name: 'Marsha', avatar: '/avatars/tulip.png', rating: 5, text: 'Amazing product and great quality...delivered product before time thats why like to purchase again and again' },
      { name: 'Snehal Lad', avatar: '/avatars/deepa.png', rating: 5, text: 'Best Fashion store for my Little boy...We luv to shop from Firstcry....' },
    ],
    related: [205, 209, 206, 207],
  },
  202: {
    name: 'Full Sleeves Solid Colour Shirt & Trouser Set with Hot Air Balloon Embroidery Bow',
    price: 1124,
    images: ['/products/full-sleeves-shirt.jpg', '/products/full-sleeves-shirt.jpg'],
    colors: ['#333', '#e91e63', '#1565c0'],
    ageGroups: ['0-12m', '3-4y', '4-5y'],
    category: 'baby fashion',
    description: {
      atGlance: 'Elegant full sleeves shirt and trouser set with adorable hot air balloon embroidery and bow detail.',
      features: ['Premium cotton blend fabric', 'Cute embroidery details', 'Comfortable fit for all-day wear'],
      careInstruction: 'Machine Wash',
    },
    reviews: [
      { name: 'Priya', avatar: '/avatars/bosky.png', rating: 5, text: 'Beautiful set for my baby boy!' },
    ],
    related: [201, 203, 207, 209],
  },
  203: {
    name: 'Single Jersey Knit Half Sleeves T-Shirt & Short Set With Avenger Graphics',
    price: 1699,
    images: ['/products/jersey-knit-set.jpg', '/products/jersey-knit-set.jpg'],
    colors: ['#333', '#e91e63'],
    ageGroups: ['0-12m', '3-4y', '4-5y'],
    category: 'baby fashion',
    description: {
      atGlance: 'Cool Avenger graphic t-shirt and shorts set made from soft jersey knit fabric.',
      features: ['Single jersey knit', 'Avenger graphics print', 'Elastic waist shorts'],
      careInstruction: 'Machine Wash',
    },
    reviews: [
      { name: 'Rahul', avatar: '/avatars/moshin.jpg', rating: 5, text: 'My son loves the Avenger print!' },
    ],
    related: [201, 202, 207, 210],
  },
  204: {
    name: 'Woven Half Puff Sleeves Ethnic Dress With Floral & Sequin Embroidery - Pink',
    price: 1699,
    images: ['/products/woven-ethnic-dress.webp', '/products/woven-ethnic-dress.webp'],
    colors: ['#333', '#1565c0'],
    ageGroups: ['0-12m', '3-4y', '4-5y'],
    category: 'girls fashion',
    description: {
      atGlance: 'Beautiful ethnic dress with puff sleeves, floral and sequin embroidery. Perfect for festive occasions.',
      features: ['Woven fabric', 'Floral & sequin embroidery', 'Puff sleeves design', 'Lined for comfort'],
      careInstruction: 'Hand Wash',
    },
    reviews: [
      { name: 'Deepa', avatar: '/avatars/deepa.png', rating: 5, text: 'Gorgeous dress for my little princess!' },
    ],
    related: [205, 206, 214, 216],
  },
  205: {
    name: 'Cotton Knit Full Sleeves T-Shirt with Frock Floral Print - White & Green',
    price: 830,
    images: ['/products/cotton-knit-frock.jpg', '/products/cotton-knit-frock.jpg'],
    colors: ['#333', '#e91e63', '#1565c0'],
    ageGroups: ['0-12m', '3-4y', '4-5y'],
    category: 'girls fashion',
    description: {
      atGlance: 'Adorable cotton knit t-shirt with frock style floral print in fresh white and green colors.',
      features: ['100% cotton knit', 'Floral print pattern', 'Full sleeves for comfort'],
      careInstruction: 'Machine Wash',
    },
    reviews: [],
    related: [204, 206, 207, 209],
  },
  206: {
    name: 'Babyhug Sleeveless Kotta Printed Ethnic Dress Floral Embroidery - Orange',
    price: 890,
    images: ['/products/babyhug-kotta-dress.jpg', '/products/babyhug-kotta-dress.jpg'],
    colors: ['#333', '#e91e63'],
    ageGroups: ['0-12m', '3-4y', '4-5y'],
    category: 'girls fashion',
    description: {
      atGlance: 'Stunning sleeveless Kotta printed ethnic dress with beautiful floral embroidery in vibrant orange.',
      features: ['Kotta fabric', 'Floral embroidery', 'Sleeveless design', 'Perfect for festivals'],
      careInstruction: 'Hand Wash',
    },
    reviews: [],
    related: [204, 205, 214, 207],
  },
  207: {
    name: 'Babyhug Organic Cotton Knit Full Sleeves Sweater Sets with Cap',
    price: 930,
    images: ['/products/organic-cotton-sweater.jpg', '/products/organic-cotton-sweater.jpg'],
    colors: ['#333', '#e91e63'],
    ageGroups: ['0-12m', '3-4y', '4-5y'],
    category: 'baby fashion',
    description: {
      atGlance: 'Warm and cozy organic cotton knit sweater set with matching cap. Perfect for winter.',
      features: ['Organic cotton', 'Includes matching cap', 'Soft knit fabric'],
      careInstruction: 'Hand Wash',
    },
    reviews: [],
    related: [209, 201, 208, 205],
  },
  208: {
    name: 'Cotton Woven Full Sleeves Floral Printed Kurta & Pyjama Set - Red',
    price: 990,
    images: ['/products/cotton-woven-kurta.jpg', '/products/cotton-woven-kurta.jpg'],
    colors: ['#333', '#e91e63', '#1565c0'],
    ageGroups: ['0-12m', '3-4y', '4-5y'],
    category: 'baby fashion',
    description: {
      atGlance: 'Traditional cotton woven kurta and pyjama set with beautiful floral print in vibrant red.',
      features: ['Cotton woven fabric', 'Floral print', 'Comfortable pyjama with elastic waist'],
      careInstruction: 'Machine Wash',
    },
    reviews: [],
    related: [207, 210, 201, 203],
  },
  209: {
    name: 'Organic Cotton Knit Full Sleeves Sweater Sets with Cap & Tiger Design',
    price: 1599,
    images: ['/products/organic-sweater-tiger.jpg', '/products/organic-sweater-tiger.jpg'],
    colors: ['#333', '#e91e63', '#1565c0'],
    ageGroups: ['0-12m', '3-4y', '4-5y'],
    category: 'baby fashion',
    description: {
      atGlance: 'Adorable organic cotton sweater set with cute tiger design and matching cap.',
      features: ['Organic cotton knit', 'Tiger design', 'Includes cap', 'Warm and soft'],
      careInstruction: 'Hand Wash',
    },
    reviews: [],
    related: [207, 201, 205, 206],
  },
  210: {
    name: 'Boys Kurta Pajama Set Pink Floral Print',
    price: 1250,
    images: ['/products/boys-kurta.jpg', '/products/boys-kurta.jpg'],
    colors: ['#e91e63', '#333'],
    ageGroups: ['0-12m', '3-4y', '4-5y'],
    category: 'boys fashion',
    description: {
      atGlance: 'Stylish boys kurta pajama set with pink floral print. Ideal for festivals and celebrations.',
      features: ['Cotton fabric', 'Floral print', 'Comfortable fit'],
      careInstruction: 'Machine Wash',
    },
    reviews: [],
    related: [201, 208, 203, 207],
  },
};

// Fallback for products not in the detailed data
const getProduct = (id) => {
  return productsData[id] || {
    name: 'Baby Product',
    price: 999,
    images: ['/products/cotton-dress.jpg'],
    colors: ['#333', '#e91e63'],
    ageGroups: ['0-12m', '3-4y', '4-5y'],
    category: 'baby fashion',
    description: {
      atGlance: 'High quality baby product made with care.',
      features: ['Premium quality materials', 'Safe for babies', 'Comfortable design'],
      careInstruction: 'Machine Wash',
    },
    reviews: [],
    related: [201, 205, 206, 207],
  };
};

// Related products lookup
const relatedProductsData = {
  201: { name: 'Mothercare Junior Boys Polo Shirt', price: 1699, image: '/products/boys-polo-shirt.jpg', age: '0-12m, 3-4y, 4-5', colors: ['#e91e63', '#1565c0'] },
  205: { name: 'Cotton Knit Full Sleeves T-Shirt with Frock Floral Print -White & Green', price: 830, image: '/products/cotton-knit-frock.jpg', age: '0-12m, 3-4y, 4-5', colors: ['#333', '#e91e63', '#1565c0'] },
  206: { name: 'Babyhug Sleeveless Kotta Printed Ethnic Dress Floral Embroidery - Orange', price: 890, image: '/products/babyhug-kotta-dress.jpg', age: '0-12m, 3-4y, 4-5', colors: ['#333', '#e91e63'] },
  207: { name: 'Babyhug Organic Cotton Knit Full Sleeves Sweater Sets with Cap', price: 930, image: '/products/organic-cotton-sweater.jpg', age: '0-12m, 3-4y, 4-5', colors: ['#333', '#e91e63'] },
  209: { name: 'Organic Cotton Knit Full Sleeves Sweater Sets with Cap & Tiger Design', price: 1599, image: '/products/organic-sweater-tiger.jpg', age: '0-12m, 3-4y, 4-5', colors: ['#333', '#e91e63', '#1565c0'] },
  210: { name: 'Boys Kurta Pajama Set Pink Floral Print', price: 1250, image: '/products/boys-kurta.jpg', age: '0-12m, 3-4y, 4-5', colors: ['#e91e63', '#333'] },
  214: { name: 'Cotton Seersucker Frill Dress', price: 2099, image: '/products/cotton-dress.jpg', age: '0-12m, 3-4y, 4-5', colors: ['#e91e63', '#1565c0'] },
  216: { name: 'Traditional Maroon Bandhani Print Layered Outfit', price: 1299, image: '/products/woven-ethnic-dress.webp', age: '0-12m, 3-4y, 4-5', colors: ['#e91e63', '#333'] },
};

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = getProduct(id);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedAge, setSelectedAge] = useState('0-12m');
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const [pincode, setPincode] = useState('');
  const [reviewText, setReviewText] = useState('');
  const [wishlisted, setWishlisted] = useState(false);

  const relatedIds = product.related || [205, 209, 206, 207];
  const relatedProducts = relatedIds.map(rid => ({ id: rid, ...relatedProductsData[rid] })).filter(p => p.name);

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  const renderStars = (count) => {
    return Array(5).fill(0).map((_, i) => (
      <FaStar key={i} color={i < count ? '#ffc107' : '#ddd'} size={14} />
    ));
  };

  return (
    <div className="product-detail-page">
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <Link to="/">Home</Link> / <Link to={`/category/baby-fashion`}>{product.category}</Link> / <span>{product.name}</span>
      </div>

      {/* Product Main Section */}
      <div className="product-detail-main">
        {/* Image Gallery */}
        <div className="product-gallery">
          <div className="main-image">
            <img src={product.images[selectedImage]} alt={product.name} />
          </div>
          <div className="thumbnail-row">
            {product.images.map((img, i) => (
              <div
                key={i}
                className={`thumbnail ${selectedImage === i ? 'active' : ''}`}
                onClick={() => setSelectedImage(i)}
              >
                <img src={img} alt={`View ${i + 1}`} />
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="product-info">
          <h1>{product.name}</h1>
          <div className="product-price-row">
            <span className="price-label">MRP : </span>
            <span className="price-value">₹{product.price.toLocaleString()}</span>
          </div>
          <p className="price-inclusive">Price inclusive of all taxes</p>

          {/* Color */}
          <div className="product-option">
            <span className="option-label">Color</span>
            <div className="color-options">
              {product.colors.map((color, i) => (
                <span
                  key={i}
                  className={`color-circle ${selectedColor === i ? 'selected' : ''}`}
                  style={{ backgroundColor: color }}
                  onClick={() => setSelectedColor(i)}
                ></span>
              ))}
            </div>
          </div>

          {/* Age Group */}
          <div className="product-option">
            <span className="option-label">Age Group</span>
            <div className="age-options">
              {product.ageGroups.map((age) => (
                <button
                  key={age}
                  className={`age-btn ${selectedAge === age ? 'active' : ''}`}
                  onClick={() => setSelectedAge(age)}
                >
                  {age}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="product-option">
            <span className="option-label">Quantity</span>
            <div className="quantity-control">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>−</button>
              <span>{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="product-actions">
            <button className="add-cart-btn">Add to cart</button>
            <button className="buy-now-btn" onClick={() => navigate('/checkout', { state: { product: { id, name: product.name, price: product.price, image: product.images[0], quantity, age: selectedAge } } })}>Buy Now</button>
          </div>

          {/* Check Pincode */}
          <div className="pincode-section">
            <h3>Check Pincode</h3>
            <div className="pincode-input">
              <input
                type="text"
                placeholder="Enter pincode"
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}
              />
              <button className="check-btn">Check</button>
            </div>
          </div>
        </div>
      </div>

      {/* Description Tabs */}
      <div className="product-tabs">
        <div className="tabs-header">
          {['description', 'specification', 'expert', 'delivery'].map(tab => (
            <button
              key={tab}
              className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab === 'description' && 'Description'}
              {tab === 'specification' && 'Specification'}
              {tab === 'expert' && 'Expert advice'}
              {tab === 'delivery' && 'Delivery & return'}
            </button>
          ))}
        </div>

        <div className="tab-content">
          {activeTab === 'description' && (
            <div className="description-content">
              <div className="desc-col">
                <h4>AT A GLANCE</h4>
                <p>{product.description.atGlance}</p>
              </div>
              <div className="desc-col">
                <h4>FEATURES AND BENEFITS</h4>
                <ul>
                  {product.description.features.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
              </div>
              <div className="desc-col">
                <h4>CARE INSTRUCTION</h4>
                <p>{product.description.careInstruction}</p>
              </div>
            </div>
          )}
          {activeTab === 'specification' && (
            <div className="spec-content">
              <p><strong>Material:</strong> 100% Cotton</p>
              <p><strong>Sleeve:</strong> Full Sleeves</p>
              <p><strong>Neck:</strong> Round Neck</p>
              <p><strong>Fit:</strong> Regular</p>
            </div>
          )}
          {activeTab === 'expert' && (
            <div className="spec-content">
              <p>Our experts recommend this product for everyday wear. The breathable fabric keeps your baby comfortable all day.</p>
            </div>
          )}
          {activeTab === 'delivery' && (
            <div className="spec-content">
              <p><strong>Delivery:</strong> 3-5 business days</p>
              <p><strong>Returns:</strong> 15-day easy return policy</p>
              <p><strong>Exchange:</strong> Available within 15 days</p>
            </div>
          )}
        </div>
      </div>

      {/* Reviews Section */}
      <div className="reviews-section">
        <div className="reviews-header">
          <h2>Reviews</h2>
          <span className="write-review-label">Write Review</span>
        </div>

        <div className="reviews-body">
          <div className="reviews-list">
            {product.reviews.map((review, i) => (
              <div key={i} className="review-item">
                <div className="review-user">
                  <img src={review.avatar} alt={review.name} />
                  <span className="review-username">{review.name}</span>
                </div>
                <div className="review-stars">{renderStars(review.rating)}</div>
                <p className="review-body-text">{review.text}</p>
              </div>
            ))}
          </div>

          <div className="write-review-form">
            <textarea
              placeholder="Type here..."
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              rows={5}
            />
            <button className="submit-review-btn">Submit</button>
          </div>
        </div>
      </div>

      {/* You might also like */}
      <div className="related-products">
        <h2>You might also like</h2>
        <div className="related-slider">
          <Slider {...sliderSettings}>
            {relatedProducts.map((rp) => (
              <div key={rp.id} className="related-card">
                <div className="related-img">
                  <Link to={`/product/${rp.id}`}>
                    <img src={rp.image} alt={rp.name} />
                  </Link>
                  <button className="related-wishlist">
                    <FaRegHeart color="#999" />
                  </button>
                </div>
                <div className="related-info">
                  <h3><Link to={`/product/${rp.id}`}>{rp.name}</Link></h3>
                  <p className="related-price">Price : ₹{rp.price?.toLocaleString()}</p>
                  <p className="related-age">Age: {rp.age}</p>
                  <div className="related-colors">
                    <span>Color: </span>
                    {rp.colors?.map((c, i) => (
                      <span key={i} className="rel-color-dot" style={{ backgroundColor: c }}></span>
                    ))}
                  </div>
                  <div className="related-actions">
                    <Link to={`/product/${rp.id}`} className="rel-buy-btn">Buy Now</Link>
                    <button className="rel-cart-btn">Add to cart</button>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
