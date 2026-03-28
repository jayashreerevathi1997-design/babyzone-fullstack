import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import './CategoryPage.css';
import './RentalServices.css';

const rentalProducts = [
  { id: 701, name: 'LuvLap Galaxy Baby Stroller for 03 Years, 5-Point Safety Harness', price: 199, rental: 'for One day', image: '/products/luvlap-stroller.webp', age: '0-12m, 3-4y, 4-5', colors: ['#e91e63', '#333', '#1565c0'] },
  { id: 702, name: 'Lightweight & Compact Tour Infant Travel Stroller with Compact Fold - Blue', price: 199, rental: 'for noe day', image: '/products/compact-stroller.webp', age: '0-12m, 3-4y, 4-5', colors: ['#e91e63', '#333', '#1565c0'] },
  { id: 703, name: 'Babyhug Lil Giffee Baby Stroller - Yellow', price: 200, rental: 'for one day', image: '/products/giffee-stroller.webp', age: '0-12m, 3-4y, 4-5', colors: ['#e91e63', '#333', '#1565c0'] },
  { id: 704, name: 'Chicco Unico Evo Car Seat -Black', price: 199, rental: 'for one day', image: '/products/chicco-carseat.webp', age: '0-12m, 3-4y, 4-5', colors: ['#e91e63', '#333', '#1565c0'] },
  { id: 705, name: 'Joie Car Seat Steadi R129 (Birth to 18 kg) Cobble Stone', price: 2409, rental: 'for one month', image: '/products/joie-carseat.webp', age: '0-12m, 3-4y, 4-5', colors: ['#e91e63', '#333', '#1565c0'] },
  { id: 706, name: 'Chinmay Kids Baby Carrier Bag Adjustable Hands Free 4 in 1 Baby Baby Safety Belt', price: 2509, rental: 'for one 40 days', image: '/products/baby-carrier.webp', age: '0-12m, 3-4y, 4-5', colors: ['#e91e63', '#333', '#1565c0'] },
  { id: 707, name: 'Philips Corded Baby Monitoring Camera SCD641 /00 | Live Two-Way Talk', price: 5609, rental: 'for one months', image: '/products/philips-camera.webp', age: '0-12m, 3-4y, 4-5', colors: ['#e91e63', '#333', '#1565c0'] },
  { id: 708, name: 'TP Link 4MP 2K QHD 1440p Pan/Tilt Wifi SecuritySmart AI Camera, SD Storage', price: 8999, rental: 'for 3onths', image: '/products/tp-link-camera.webp', age: '0-12m, 3-4y, 4-5', colors: ['#e91e63', '#333', '#1565c0'] },
  { id: 709, name: 'Lollipop Smart Baby Monitor Camera - Pistachio', price: 549, rental: 'for 10 days', image: '/products/lollipop-camera.webp', age: '0-12m, 3-4y, 4-5', colors: ['#e91e63', '#333', '#1565c0'] },
];

const RentalServices = () => {
  const navigate = useNavigate();
  const [period, setPeriod] = useState('Monthly');
  const [sortBy, setSortBy] = useState('new_arrivals');
  const [currentPage, setCurrentPage] = useState(1);
  const [wishlist, setWishlist] = useState([]);
  const [filters, setFilters] = useState({
    gender: [], ageGroup: [], brands: [], colors: [], discount: [], price: [], curated: [], premium: false,
  });

  const toggleWishlist = (id) => {
    setWishlist(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
  };

  const handleFilterChange = (type, value) => {
    setFilters(prev => {
      const current = prev[type];
      const updated = current.includes(value) ? current.filter(v => v !== value) : [...current, value];
      return { ...prev, [type]: updated };
    });
  };

  return (
    <div className="rental-page">
      <div className="breadcrumb">
        <Link to="/">Home</Link> / <span>Rental services</span>
      </div>

      <div className="category-layout">
        {/* Sidebar Filters */}
        <aside className="filter-sidebar">
          <h2>Filters</h2>
          <div className="filter-group">
            <h3>Gender</h3>
            {['Boy', 'Girl'].map(g => (
              <label key={g} className="filter-checkbox">
                <input type="checkbox" checked={filters.gender.includes(g)} onChange={() => handleFilterChange('gender', g)} /> {g}
              </label>
            ))}
          </div>
          <div className="filter-group">
            <h3>Age group</h3>
            {['0-6 months', '7-12 months', 'Kids', 'Adults'].map(a => (
              <label key={a} className="filter-checkbox">
                <input type="checkbox" checked={filters.ageGroup.includes(a)} onChange={() => handleFilterChange('ageGroup', a)} /> {a}
              </label>
            ))}
          </div>
          <div className="filter-group">
            <h3>Brands</h3>
            {['Babyhug', 'Babyoye', 'Kookie kids', "Carter's", 'Dapper Dudes'].map(b => (
              <label key={b} className="filter-checkbox">
                <input type="checkbox" checked={filters.brands.includes(b)} onChange={() => handleFilterChange('brands', b)} /> {b}
              </label>
            ))}
          </div>
          <div className="filter-group">
            <h3>Color</h3>
            {[{ name: 'Blue', color: '#1565c0' }, { name: 'White', color: '#fff' }, { name: 'Red', color: '#e91e63' }, { name: 'Multicolor', color: 'linear-gradient(90deg, red, orange, yellow, green, blue)' }, { name: 'Yellow', color: '#fdd835' }].map(c => (
              <label key={c.name} className="filter-checkbox color-filter">
                <input type="checkbox" checked={filters.colors.includes(c.name)} onChange={() => handleFilterChange('colors', c.name)} />
                <span className="color-dot" style={{ background: c.color, border: c.name === 'White' ? '1px solid #ccc' : 'none' }}></span> {c.name}
              </label>
            ))}
          </div>
          <div className="filter-group">
            <h3>Discount</h3>
            {['Upto 10%', '10%-20%', '20%-30%', '30%-40%'].map(d => (
              <label key={d} className="filter-checkbox">
                <input type="checkbox" checked={filters.discount.includes(d)} onChange={() => handleFilterChange('discount', d)} /> {d}
              </label>
            ))}
          </div>
          <div className="filter-group">
            <h3>Price</h3>
            {['₹ 0-250', '₹ 250-1000', '₹ 1000-3000', '₹ 3000-5000'].map(p => (
              <label key={p} className="filter-checkbox">
                <input type="checkbox" checked={filters.price.includes(p)} onChange={() => handleFilterChange('price', p)} /> {p}
              </label>
            ))}
          </div>
          <div className="filter-group">
            <h3>Curated collection</h3>
            {['Trending now', 'Fast moving', 'Extra warm'].map(c => (
              <label key={c} className="filter-checkbox">
                <input type="checkbox" checked={filters.curated.includes(c)} onChange={() => handleFilterChange('curated', c)} /> {c}
              </label>
            ))}
          </div>
          <div className="filter-group">
            <h3>Premium</h3>
            <label className="filter-checkbox">
              <input type="checkbox" checked={filters.premium} onChange={() => setFilters(prev => ({ ...prev, premium: !prev.premium }))} /> Show premium products
            </label>
          </div>
        </aside>

        {/* Main Content */}
        <main className="category-main">
          <div className="rental-header">
            <h1>Rental services</h1>
            <div className="rental-controls">
              <div className="period-wrapper">
                <span>Period</span>
                <select value={period} onChange={(e) => setPeriod(e.target.value)}>
                  <option value="Daily">Daily</option>
                  <option value="Weekly">Weekly</option>
                  <option value="Monthly">Monthly</option>
                  <option value="Yearly">Yearly</option>
                </select>
              </div>
              <div className="sort-wrapper">
                <span>Sort by</span>
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                  <option value="new_arrivals">New arrivals</option>
                  <option value="price_low">Price: Low to High</option>
                  <option value="price_high">Price: High to Low</option>
                </select>
              </div>
            </div>
          </div>

          <div className="category-products-grid">
            {rentalProducts.map((product) => (
              <div key={product.id} className="cat-product-card">
                <div className="cat-product-img-wrapper">
                  <button className="wishlist-btn" onClick={() => toggleWishlist(product.id)}>
                    {wishlist.includes(product.id) ? <FaHeart color="#e91e63" /> : <FaRegHeart color="#999" />}
                  </button>
                  <Link to={`/product/${product.id}`}>
                    <img src={product.image} alt={product.name} />
                  </Link>
                </div>
                <div className="cat-product-info">
                  <h3><Link to={`/product/${product.id}`}>{product.name}</Link></h3>
                  <p className="cat-product-price">Price : ₹{product.price.toLocaleString()} <span className="rental-period">{product.rental}</span></p>
                  <p className="cat-product-age">Age: {product.age}</p>
                  <div className="cat-product-colors">
                    <span>Color: </span>
                    {product.colors.map((color, i) => (
                      <span key={i} className="product-color-dot" style={{ backgroundColor: color }}></span>
                    ))}
                  </div>
                  <div className="cat-product-actions">
                    <button className="buy-now-btn" onClick={() => navigate(`/product/${product.id}`)}>Book Now</button>
                    <button className="add-to-cart-btn">Add to cart</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="pagination">
            <span>Page</span>
            {[1, 2, 3].map(p => (
              <button key={p} className={`page-btn ${currentPage === p ? 'active' : ''}`} onClick={() => setCurrentPage(p)}>{p}</button>
            ))}
            <span className="page-dots">. . . . . . . .</span>
            <button className="page-btn" onClick={() => setCurrentPage(10)}>10</button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default RentalServices;
