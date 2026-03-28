import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import './CategoryPage.css';

const allProducts = {
  'boys-fashion': [
    { id: 201, name: 'Mothercare Junior Boys Game Day Everley Striped Polo Shirt - Blue', price: 1699, image: '/products/boys-polo-shirt.jpg', age: '0-12m, 3-4u, 4-5', colors: ['#e91e63', '#1565c0'] },
    { id: 202, name: 'Full Sleeves Solid Colour Shirt & Trouser Set with Hot Air Balloon Embroidery Bow', price: 1124, image: '/products/full-sleeves-shirt.jpg', age: '0-12m, 3-4u, 4-5', colors: ['#333', '#e91e63', '#1565c0'] },
    { id: 203, name: 'Single Jersey Knit Half Sleeves T-Shirt & Short Set With Avenger Graphics', price: 1699, image: '/products/jersey-knit-set.jpg', age: '0-12m, 3-4u, 4-5', colors: ['#333', '#e91e63'] },
    { id: 207, name: 'Babyhug Organic Cotton Knit Full Sleeves Sweater Sets with Cap', price: 930, image: '/products/organic-cotton-sweater.jpg', age: '0-12m, 3-4u, 4-5', colors: ['#333', '#e91e63'] },
    { id: 208, name: 'Cotton Woven Full Sleeves Floral Printed Kurta & Pyjama Set - Red', price: 990, image: '/products/cotton-woven-kurta.jpg', age: '0-12m, 3-4u, 4-5', colors: ['#333', '#e91e63', '#1565c0'] },
    { id: 210, name: 'Boys Kurta Pajama Set Pink Floral Print', price: 1250, image: '/products/boys-kurta.jpg', age: '0-12m, 3-4u, 4-5', colors: ['#e91e63', '#333'] },
    { id: 211, name: 'Cotton Knit Full Sleeves T-Shirt with Frock Floral Print - White & Green', price: 830, image: '/products/cotton-knit-frock.jpg', age: '0-12m, 3-4u, 4-5', colors: ['#333', '#e91e63', '#1565c0'] },
    { id: 212, name: 'Organic Cotton Knit Full Sleeves Sweater Sets with Cap & Tiger Design', price: 1599, image: '/products/organic-sweater-tiger.jpg', age: '0-12m, 3-4u, 4-5', colors: ['#333', '#e91e63', '#1565c0'] },
    { id: 213, name: 'Baby Winter Sweater Set with Bear Design - Navy/Red 3-Piece', price: 1450, image: '/products/boys-sweater-bear.jpg', age: '0-12m, 3-4u, 4-5', colors: ['#333', '#e91e63'] },
  ],
  'girls-fashion': [
    { id: 204, name: 'Woven Half Puff Sleeves Ethnic Dress With Floral & Sequin Embroidery - Pink', price: 1699, image: '/products/woven-ethnic-dress.webp', age: '0-12m, 3-4u, 4-5', colors: ['#333', '#1565c0'] },
    { id: 205, name: 'Cotton Knit Full Sleeves T-Shirt with Frock Floral Print - White & Green', price: 830, image: '/products/cotton-knit-frock.jpg', age: '0-12m, 3-4u, 4-5', colors: ['#333', '#e91e63', '#1565c0'] },
    { id: 206, name: 'Babyhug Sleeveless Kotta Printed Ethnic Dress Floral Embroidery - Orange', price: 890, image: '/products/babyhug-kotta-dress.jpg', age: '0-12m, 3-4u, 4-5', colors: ['#333', '#e91e63'] },
    { id: 214, name: 'Cotton Seersucker Frill Dress', price: 2099, image: '/products/cotton-dress.jpg', age: '0-12m, 3-4u, 4-5', colors: ['#e91e63', '#1565c0'] },
    { id: 215, name: 'Girls Party Dress with Embroidery', price: 1550, image: '/products/girls-party-dress.jpg', age: '0-12m, 3-4u, 4-5', colors: ['#e91e63', '#333'] },
    { id: 207, name: 'Babyhug Organic Cotton Knit Full Sleeves Sweater Sets with Cap', price: 930, image: '/products/organic-cotton-sweater.jpg', age: '0-12m, 3-4u, 4-5', colors: ['#333', '#e91e63'] },
    { id: 208, name: 'Cotton Woven Full Sleeves Floral Printed Kurta & Pyjama Set - Red', price: 990, image: '/products/cotton-woven-kurta.jpg', age: '0-12m, 3-4u, 4-5', colors: ['#333', '#e91e63', '#1565c0'] },
    { id: 209, name: 'Organic Cotton Knit Full Sleeves Sweater Sets with Cap & Tiger Design', price: 1599, image: '/products/organic-sweater-tiger.jpg', age: '0-12m, 3-4u, 4-5', colors: ['#333', '#e91e63', '#1565c0'] },
    { id: 216, name: 'Traditional Maroon Bandhani Print Layered Outfit', price: 1299, image: '/products/woven-ethnic-dress.webp', age: '0-12m, 3-4u, 4-5', colors: ['#e91e63', '#333'] },
  ],
  'baby-fashion': [
    { id: 201, name: 'Mothercare Junior Boys Game Day Everley Striped Polo Shirt - Blue', price: 1699, image: '/products/boys-polo-shirt.jpg', age: '0-12m, 3-4u, 4-5', colors: ['#e91e63', '#1565c0'] },
    { id: 202, name: 'Full Sleeves Solid Colour Shirt & Trouser Set with Hot Air Balloon Embroidery Bow', price: 1124, image: '/products/full-sleeves-shirt.jpg', age: '0-12m, 3-4u, 4-5', colors: ['#333', '#e91e63', '#1565c0'] },
    { id: 203, name: 'Single Jersey Knit Half Sleeves T-Shirt & Short Set With Avenger Graphics', price: 1699, image: '/products/jersey-knit-set.jpg', age: '0-12m, 3-4u, 4-5', colors: ['#333', '#e91e63'] },
    { id: 207, name: 'Babyhug Organic Cotton Knit Full Sleeves Sweater Sets with Cap', price: 930, image: '/products/organic-cotton-sweater.jpg', age: '0-12m, 3-4u, 4-5', colors: ['#333', '#e91e63'] },
    { id: 208, name: 'Cotton Woven Full Sleeves Floral Printed Kurta & Pyjama Set - Red', price: 990, image: '/products/cotton-woven-kurta.jpg', age: '0-12m, 3-4u, 4-5', colors: ['#333', '#e91e63', '#1565c0'] },
    { id: 204, name: 'Woven Half Puff Sleeves Ethnic Dress With Floral & Sequin Embroidery - Pink', price: 1699, image: '/products/woven-ethnic-dress.webp', age: '0-12m, 3-4u, 4-5', colors: ['#333', '#1565c0'] },
    { id: 205, name: 'Cotton Knit Full Sleeves T-Shirt with Frock Floral Print - White & Green', price: 830, image: '/products/cotton-knit-frock.jpg', age: '0-12m, 3-4u, 4-5', colors: ['#333', '#e91e63', '#1565c0'] },
    { id: 209, name: 'Organic Cotton Knit Full Sleeves Sweater Sets with Cap & Tiger Design', price: 1599, image: '/products/organic-sweater-tiger.jpg', age: '0-12m, 3-4u, 4-5', colors: ['#333', '#e91e63', '#1565c0'] },
    { id: 206, name: 'Babyhug Sleeveless Kotta Printed Ethnic Dress Floral Embroidery - Orange', price: 890, image: '/products/babyhug-kotta-dress.jpg', age: '0-12m, 3-4u, 4-5', colors: ['#333', '#e91e63'] },
  ],
  'toys': [
    { id: 301, name: 'Yellow and Green Dino Slide for Kids at Home(L 4.43 x B 1.48 x H 2.46) ft', price: 1700, image: '/products/dino-slide.jpg', age: '0-12m, 3-4u, 4-5', colors: ['#e91e63', '#333', '#1565c0'] },
    { id: 302, name: 'Premium Magnetic Building Sticks 32 Pieces Toy for Kids | 32 pcs|', price: 500, image: '/products/magnetic-sticks.jpg', age: '0-12m, 3-4u, 4-5', colors: ['#e91e63', '#1565c0'] },
    { id: 303, name: 'Premium Baby Kick and Play Piano Blue Play Gym', price: 749, image: '/products/kick-play-piano.jpg', age: '0-12m, 3-4u, 4-5', colors: ['#e91e63', '#1565c0'] },
    { id: 304, name: 'Musical Keyboard Mat Piano | Baby Gym & Fitness Rack | Baby Play Mat', price: 548, image: '/products/keyboard-mat.jpg', age: '0-12m, 3-4u, 4-5', colors: ['#e91e63', '#333', '#1565c0'] },
    { id: 305, name: 'Musical Duck Track Slide and Climb Stairs Toys with 3 Duck - Multicolor', price: 350, image: '/products/duck-track.jpg', age: '0-12m, 3-4u, 4-5', colors: ['#e91e63', '#1565c0'] },
    { id: 306, name: '37 Key Piano Keyboard Toy with Power Option, Recording and Mic,', price: 1699, image: '/products/piano-keyboard.jpg', age: '0-12m, 3-4u, 4-5', colors: ['#e91e63', '#333', '#1565c0'] },
    { id: 307, name: 'Toysire Toy Kitchen Sets, Simulated Spray Kitchen Toys, Kids Kitchen Pretend', price: 1100, image: '/products/kitchen-set.jpg', age: '0-12m, 3-4u, 4-5', colors: ['#e91e63', '#333', '#1565c0'] },
    { id: 308, name: 'Nylon One Click Folding Bike with Wheel Bearing Rotation & Rotatable Handlebar', price: 4999, image: '/products/folding-bike.jpg', age: '0-12m, 3-4u, 4-5', colors: ['#e91e63', '#1565c0'] },
    { id: 309, name: 'Wooden Magnetic Board Puzzle Toys 2 In 1 Magnetic Board Puzzle Games Animal', price: 510, image: '/products/magnetic-puzzle.jpg', age: '0-12m, 3-4u, 4-5', colors: ['#e91e63', '#333', '#1565c0'] },
  ],
  'footwear': [
    { id: 401, name: 'Clogs with Backstrap Mickey Mouse & Daisy Duck Applique', price: 599, image: '/products/clogs-mickey.jpg', age: '0-12m, 3-4u, 4-5', colors: ['#e91e63', '#333', '#1565c0'] },
    { id: 402, name: 'Cute Walk by Babyhug Velcro Closure PU Sandal with Sport Patch', price: 930, image: '/products/cute-walk.webp', age: '0-12m, 3-4u, 4-5', colors: ['#e91e63', '#333', '#1565c0'] },
    { id: 403, name: 'Swimming Bag with Shark Print Blue| Wet Dry Separation| Transparent', price: 490, image: '/products/shark-bag.jpg', age: '0-12m, 3-4u, 4-5', colors: ['#e91e63', '#333', '#1565c0'] },
    { id: 404, name: 'Mothercare Boys Striped Keppi Embroidered Hat', price: 1699, image: '/products/striped-hat.png', age: '0-12m, 3-4u, 4-5', colors: ['#e91e63', '#333'] },
    { id: 405, name: 'Mothercare Boys Dinosaur Knitted Flip Mitts - Green', price: 1409, image: '/products/beanie-hat.png', age: '0-12m, 3-4u, 4-5', colors: ['#e91e63', '#333', '#1565c0'] },
    { id: 406, name: 'Mothercare Boys Rocket Knitted Beanie Hat - Orange', price: 909, image: '/products/rocket-hat.png', age: '0-12m, 3-4u, 4-5', colors: ['#e91e63', '#333', '#1565c0'] },
    { id: 407, name: 'Girls Straw Sun Hat With Bow Accent - Multicolor', price: 1609, image: '/products/straw-hat.png', age: '0-12m, 3-4u, 4-5', colors: ['#e91e63', '#333', '#1565c0'] },
    { id: 408, name: 'Mothercare Girls Fringe Mane Beanie- Purple', price: 4199, image: '/products/fringe-beanie.png', age: '0-12m, 3-4u, 4-5', colors: ['#e91e63', '#333', '#1565c0'] },
    { id: 409, name: 'Girls 100% Cotton slip - resist Socktop- Multicolor|', price: 349, image: '/products/cotton-socks.png', age: '0-12m, 3-4u, 4-5', colors: ['#e91e63', '#333', '#1565c0'] },
  ],
  'accessories': [
    { id: 501, name: 'Abracadabra Face Washers - D for Dino - Pack of 5 - Multicolor', price: 1499, image: '/products/face-washers.png', age: '0-12m, 3-4u, 4-5', colors: ['#e91e63', '#333', '#1565c0'] },
    { id: 502, name: '99% Pure Water Baby Wipes with Lid - Fragrance Free, Paraben Free & Ultra-Gentle', price: 129, image: '/products/baby-wipes.png', age: '0-12m, 3-4u, 4-5', colors: ['#e91e63', '#333', '#1565c0'] },
    { id: 503, name: 'Mothercare All We Know Baby Shampoo 300ml - Orange', price: 292, image: '/products/baby-shampoo.png', age: '0-12m, 3-4u, 4-5', colors: ['#e91e63', '#333', '#1565c0'] },
    { id: 504, name: 'Skip Hop Moby Smart Sling 3 Stage Tub - Blue', price: 4349, image: '/products/baby-tub.png', age: '0-12m, 3-4u, 4-5', colors: ['#e91e63', '#333', '#1565c0'] },
    { id: 505, name: 'Mothercare Boys Potty Training Pants (Small) - Pack of 3 - Multicolor', price: 1299, image: '/products/potty-pants.webp', age: '0-12m, 3-4u, 4-5', colors: ['#e91e63', '#333', '#1565c0'] },
    { id: 506, name: 'Shooting Star Space and Rocket Diaper Changing Mat Waterproof - Multicolor', price: 799, image: '/products/diaper-mat.png', age: '0-12m, 3-4u, 4-5', colors: ['#e91e63', '#333', '#1565c0'] },
    { id: 507, name: 'Cotton Maternity Wedge Pillow With Quilted Cover - Dark Blue| Soft yet Firm', price: 599, image: '/products/maternity-pillow.jpg', age: '0-12m, 3-4u, 4-5', colors: ['#e91e63', '#333', '#1565c0'] },
    { id: 508, name: 'Chicco Natural Feeling Fast Flow Feeding Bottle Blue - 330 ml', price: 699, image: '/products/feeding-bottle1.webp', age: '0-12m, 1-3y', colors: ['#e91e63', '#333', '#1565c0'] },
    { id: 509, name: 'Babyhug Sterilizable Steel Feeding Bottle - 410 ml', price: 620, image: '/products/feeding-bottle2.webp', age: '0-12m, 3-4u, 4-5', colors: ['#e91e63', '#333', '#1565c0'] },
  ],
  'beds': [
    { id: 601, name: 'Filymore 8 Pieces Star unicorn Diwan Set for Kids Room', price: 7599, image: '/products/unicorn-diwan.jpg', age: '0-12m, 3-4u, 4-5', colors: ['#e91e63', '#333'] },
    { id: 602, name: 'Purple Solid Warm Blanket & Sheep Patchwork Pillow Set Ultra-Soft Fabric', price: 3500, image: '/products/purple-blanket.jpg', age: '0-12m, 3-4u, 4-5', colors: ['#e91e63', '#333', '#1565c0'] },
    { id: 603, name: 'Filymore Kids Unicorn Elastic Fitted Bedsheet for Single Bed (72x36 inches)', price: 5050, image: '/products/unicorn-bedsheet.jpg', age: '0-12m, 3-4u, 4-5', colors: ['#e91e63', '#333', '#1565c0'] },
    { id: 604, name: 'Laugh & Learn Multi-functional 2 in 1 Baby Walker With anti Fall Protection', price: 6699, image: '/products/baby-walker.webp', age: '0-12m, 3-4u, 4-5', colors: ['#e91e63', '#333', '#1565c0'] },
    { id: 605, name: 'Baybee Dinning Chair Study Table Chair with Cushion Seat & Feeding Tray- Green', price: 2409, image: '/products/dinning-chair.webp', age: '0-12m, 3-4u, 4-5', colors: ['#e91e63', '#333', '#1565c0'] },
    { id: 606, name: 'Panda High Quality Kids Chair-Blue| Easy Tool Free Assembly| Durable', price: 2509, image: '/products/kids-chair.jpg', age: '0-12m, 3-4u, 4-5', colors: ['#e91e63', '#333'] },
    { id: 607, name: 'Premium Bedding Super Saver Combo Set of 3 Bunny Print- Blue', price: 5609, image: '/products/bedding-combo.jpg', age: '0-12m, 3-4u, 4-5', colors: ['#e91e63', '#1565c0'] },
    { id: 608, name: 'Fancy Fluff 7 Pc Organic Baby Cot Bedding Set - Sea Fantasy', price: 8999, image: '/products/cot-bedding.jpg', age: '0-12m, 3-4u, 4-5', colors: ['#e91e63', '#333', '#1565c0'] },
    { id: 609, name: 'Baby Hugging Pillow for Head Shaping|Neck Support New Born Baby Infant Soft', price: 549, image: '/products/hugging-pillow.jpg', age: '0-12m, 3-4u, 4-5', colors: ['#e91e63', '#333'] },
  ],
};

const CategoryPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [sortBy, setSortBy] = useState('new_arrivals');
  const [currentPage, setCurrentPage] = useState(1);
  const [wishlist, setWishlist] = useState([]);
  const [filters, setFilters] = useState({
    gender: [],
    ageGroup: [],
    brands: [],
    colors: [],
    discount: [],
    price: [],
    curated: [],
    premium: false,
  });

  const products = allProducts[slug] || allProducts['baby-fashion'] || [];
  const totalPages = 10;

  const formatSlug = (s) => s.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
  const titleMap = {
    'baby-fashion': 'Baby Fashions',
    'footwear': 'Footwear & Accessories',
    'accessories': 'Moms & baby care',
    'beds': 'Furniture & bedding',
    'boys-fashion': 'Boys Fashion',
    'girls-fashion': 'Girls Fashion',
  };
  const categoryTitle = titleMap[slug] || formatSlug(slug);

  const toggleWishlist = (productId) => {
    setWishlist(prev =>
      prev.includes(productId) ? prev.filter(id => id !== productId) : [...prev, productId]
    );
  };

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => {
      const current = prev[filterType];
      const updated = current.includes(value)
        ? current.filter(v => v !== value)
        : [...current, value];
      return { ...prev, [filterType]: updated };
    });
  };

  return (
    <div className="category-page">
      <div className="breadcrumb">
        <Link to="/">Home</Link> / <span>{categoryTitle.toLowerCase()}</span>
      </div>

      <div className="category-layout">
        {/* Sidebar Filters */}
        <aside className="filter-sidebar">
          <h2>Filters</h2>

          <div className="filter-group">
            <h3>Gender</h3>
            {['Boy', 'Girl'].map(g => (
              <label key={g} className="filter-checkbox">
                <input type="checkbox" checked={filters.gender.includes(g)} onChange={() => handleFilterChange('gender', g)} />
                {g}
              </label>
            ))}
          </div>

          <div className="filter-group">
            <h3>Age group</h3>
            {['0-6 months', '7-12 months', 'Kids', 'Adults'].map(a => (
              <label key={a} className="filter-checkbox">
                <input type="checkbox" checked={filters.ageGroup.includes(a)} onChange={() => handleFilterChange('ageGroup', a)} />
                {a}
              </label>
            ))}
          </div>

          <div className="filter-group">
            <h3>Brands</h3>
            {['Babyhug', 'Babyoye', 'Kookie kids', "Carter's", 'Dapper Dudes'].map(b => (
              <label key={b} className="filter-checkbox">
                <input type="checkbox" checked={filters.brands.includes(b)} onChange={() => handleFilterChange('brands', b)} />
                {b}
              </label>
            ))}
          </div>

          <div className="filter-group">
            <h3>Color</h3>
            {[
              { name: 'Blue', color: '#1565c0' },
              { name: 'White', color: '#fff' },
              { name: 'Red', color: '#e91e63' },
              { name: 'Multicolor', color: 'linear-gradient(90deg, red, orange, yellow, green, blue)' },
              { name: 'Yellow', color: '#fdd835' },
            ].map(c => (
              <label key={c.name} className="filter-checkbox color-filter">
                <input type="checkbox" checked={filters.colors.includes(c.name)} onChange={() => handleFilterChange('colors', c.name)} />
                <span className="color-dot" style={{ background: c.color, border: c.name === 'White' ? '1px solid #ccc' : 'none' }}></span>
                {c.name}
              </label>
            ))}
          </div>

          <div className="filter-group">
            <h3>Discount</h3>
            {['Upto 10%', '10%-20%', '20%-30%', '30%-40%'].map(d => (
              <label key={d} className="filter-checkbox">
                <input type="checkbox" checked={filters.discount.includes(d)} onChange={() => handleFilterChange('discount', d)} />
                {d}
              </label>
            ))}
          </div>

          <div className="filter-group">
            <h3>Price</h3>
            {['₹ 0-250', '₹ 250-1000', '₹ 1000-3000', '₹ 3000-5000'].map(p => (
              <label key={p} className="filter-checkbox">
                <input type="checkbox" checked={filters.price.includes(p)} onChange={() => handleFilterChange('price', p)} />
                {p}
              </label>
            ))}
          </div>

          <div className="filter-group">
            <h3>Curated collection</h3>
            {['Trending now', 'Fast moving', 'Extra warm'].map(c => (
              <label key={c} className="filter-checkbox">
                <input type="checkbox" checked={filters.curated.includes(c)} onChange={() => handleFilterChange('curated', c)} />
                {c}
              </label>
            ))}
          </div>

          <div className="filter-group">
            <h3>Premium</h3>
            <label className="filter-checkbox">
              <input type="checkbox" checked={filters.premium} onChange={() => setFilters(prev => ({ ...prev, premium: !prev.premium }))} />
              Show premium products
            </label>
          </div>
        </aside>

        {/* Product Grid */}
        <main className="category-main">
          <div className="category-header">
            <h1>{categoryTitle}</h1>
            <div className="sort-wrapper">
              <span>Sort by</span>
              <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                <option value="new_arrivals">New arrivals</option>
                <option value="price_low">Price: Low to High</option>
                <option value="price_high">Price: High to Low</option>
                <option value="popular">Popularity</option>
              </select>
            </div>
          </div>

          <div className="category-products-grid">
            {products.map((product) => (
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
                  <p className="cat-product-price">Price : ₹{product.price.toLocaleString()}</p>
                  <p className="cat-product-age">Age: {product.age}</p>
                  <div className="cat-product-colors">
                    <span>Color: </span>
                    {product.colors.map((color, i) => (
                      <span key={i} className="product-color-dot" style={{ backgroundColor: color }}></span>
                    ))}
                  </div>
                  <div className="cat-product-actions">
                    <button className="buy-now-btn" onClick={() => { addToCart(product); navigate('/cart'); }}>Buy Now</button>
                    <button className="add-to-cart-btn" onClick={() => { addToCart(product); alert(`${product.name} added to cart!`); }}>Add to cart</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="pagination">
            <span>Page</span>
            {[1, 2, 3].map(p => (
              <button
                key={p}
                className={`page-btn ${currentPage === p ? 'active' : ''}`}
                onClick={() => setCurrentPage(p)}
              >
                {p}
              </button>
            ))}
            <span className="page-dots">. . . . . . . .</span>
            <button className="page-btn" onClick={() => setCurrentPage(totalPages)}>
              {totalPages}
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default CategoryPage;
