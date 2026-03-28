import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaMicrophone, FaShoppingCart, FaChevronDown } from 'react-icons/fa';
import './Navbar.css';

const megaMenuData = {
  'New Baby clothing': [
    'New born onesies & rompers', 'New born nightwear & sleepsuits', 'New born baby sets & suits',
    'New born baby dresses & frocks', 'New born baby leggings & shorts', 'New born baby t-shirts',
    'New born caps, gloves & mittens', 'New born inner wear', 'New born baby jackets',
    'New born baby sweaters',
  ],
  'Baby boys clothing': [
    'Baby boys t-shirts', 'Baby boys shirts', 'Baby boys jeans & trousers',
    'Baby boys shorts', 'Baby boys innerwear & thermals', 'Baby boys socks',
    'Baby boys sweat shirts & jackets', 'Baby boys sweaters', 'Baby boys swim wear',
    'Baby boys sets & suits',
  ],
  'Baby girls clothing': [],
  'Baby Footwear': ['Baby Booties'],
  'Kids Footwear': [
    'Kids colourful shoes', 'Kids sneakers & sports shoes', 'Kids bellies',
    'Kids sandals', 'Kids flip flops',
  ],
  'Fashion Accessories': [
    'Kids bags', 'Kids hair accessories', 'Kids caps & gloves', 'Kids scarfs',
  ],
  'Baby hair care': ['Baby shampoo', 'Baby conditioner', 'Baby hair oil'],
  'Baby grooming': ['Baby toothbrush & baby toothpaste'],
  'Breast Feeding': [
    'Electric breast pump', 'Manual breast pump', 'Feeding shawls',
    'Breast pads & nipple shields',
  ],
  'Maternity Pillows': ['Feeding Pillows', 'Pregnancy Pillows'],
  'Maternity clothing': [
    'Maternity lingerie', 'Maternity bottom wear', 'Maternity sleep wear',
    'Maternity tops', 'Maternity dresses',
  ],
  'Diaper bags': ['Diaper bags'],
  'Bath accessories': ['Baby bath tub', 'Baby bather & chair'],
  'Maternity clothing ': ['Stretch mark cream', 'Maternity pads', 'Disposable maternity panties', 'Maternity bed mats'],
  'Maternity clothing  ': ['Bibs & burp cloths', 'Feeding bottles', 'Muslins'],
  'Baby skincare': [
    'Baby body oil & baby massage Oil', 'Baby body wash', 'Baby cream & baby lotion',
    'Baby diaper rash cream', 'Baby powder', 'Baby wipes & tissues',
  ],
  'Health & Safety': [
    'Baby care equipments', 'Detergent & cleansers', 'Humidifiers & air purifiers',
    'Mosquito repellants', 'Sanitisers & hand cleansing gels', 'Thermometer',
  ],
  'Baby Bedding': [
    'Baby bedding sets', 'Baby cot sheets & crib sheets', 'Baby mattress',
  ],
};

const megaColumns = [
  {
    title: null,
    sections: [
      { heading: 'New Baby clothing', items: megaMenuData['New Baby clothing'] },
      { heading: 'Baby boys clothing', items: megaMenuData['Baby boys clothing'] },
      { heading: 'Baby girls clothing', items: [] },
    ],
  },
  {
    title: null,
    sections: [
      { heading: 'Baby Footwear', items: megaMenuData['Baby Footwear'] },
      { heading: 'Kids Footwear', items: megaMenuData['Kids Footwear'] },
      { heading: 'Fashion Accessories', items: megaMenuData['Fashion Accessories'] },
      { heading: 'Baby hair care', items: megaMenuData['Baby hair care'] },
      { heading: 'Baby grooming', items: megaMenuData['Baby grooming'] },
    ],
  },
  {
    title: null,
    sections: [
      { heading: 'Breast Feeding', items: megaMenuData['Breast Feeding'] },
      { heading: 'Maternity Pillows', items: megaMenuData['Maternity Pillows'] },
      { heading: 'Maternity clothing', items: megaMenuData['Maternity clothing'] },
      { heading: 'Diaper bags', items: megaMenuData['Diaper bags'] },
      { heading: 'Bath accessories', items: megaMenuData['Bath accessories'] },
    ],
  },
  {
    title: null,
    sections: [
      { heading: 'Maternity clothing', items: ['Stretch mark cream', 'Maternity pads', 'Disposable maternity panties', 'Maternity bed mats'] },
      { heading: 'Maternity clothing', items: ['Bibs & burp cloths', 'Feeding bottles', 'Muslins', 'Soothers & pacifiers', 'Teethers & nibblers'] },
      { heading: null, items: ['Baby food storage & milk storages', 'Baby slippers & cups', 'Wearing plates & bowls', 'Kids water bottles & lunch box', 'Bottle warmer & sterilizer'] },
      { heading: 'Baby feeding & Nursery essentials', items: ['Bibs & burp cloths', 'Feeding bottles', 'Feeding cloths', 'Muslins'] },
    ],
  },
  {
    title: null,
    sections: [
      { heading: 'Baby skincare', items: megaMenuData['Baby skincare'] },
      { heading: 'Health & Safety', items: megaMenuData['Health & Safety'] },
      { heading: 'Baby Bedding', items: megaMenuData['Baby Bedding'] },
    ],
  },
];

const Navbar = ({ cartCount = 0 }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showMegaMenu, setShowMegaMenu] = useState(false);

  const categories = [
    { name: 'All categories', hasDropdown: true, link: '#', isMega: true },
    { name: 'Baby fashion', hasDropdown: true, link: '/category/baby-fashion' },
    { name: 'Toys', hasDropdown: false, link: '/category/toys' },
    { name: 'Footwear & Accessories', hasDropdown: true, link: '/category/footwear' },
    { name: 'Moms & Baby care', hasDropdown: true, link: '/category/accessories' },
    { name: 'Furniture & Bedding', hasDropdown: true, link: '/category/beds' },
    { name: 'Rental Services', hasDropdown: false, link: '/rental-services' },
    { name: 'Offers', hasDropdown: false, link: '/' },
  ];

  return (
    <nav className="navbar">
      {/* Top Navbar */}
      <div className="navbar-top">
        <Link to="/" className="navbar-logo">
          <img src="/logo.png" alt="Baby Shop" className="logo-img" />
        </Link>

        <div className="search-bar">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search here"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <FaMicrophone className="mic-icon" />
        </div>

        <div className="navbar-links">
          <Link to="/" className="nav-link active">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
          <Link to="/forum" className="nav-link">Forum</Link>
          <Link to="/parenting-classes" className="nav-link">Parenting classes</Link>
          <div className="nav-link dropdown">
            Account <FaChevronDown size={10} />
          </div>
          <Link to="/cart" className="nav-link cart-link">
            Cart <FaShoppingCart />
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </Link>
        </div>
      </div>

      {/* Category Navbar */}
      <div className="navbar-categories">
        {categories.map((cat, index) => (
          cat.isMega ? (
            <div
              key={index}
              className="category-item"
              onMouseEnter={() => setShowMegaMenu(true)}
              onMouseLeave={() => setShowMegaMenu(false)}
              onClick={() => setShowMegaMenu(!showMegaMenu)}
            >
              {cat.name}
              {cat.hasDropdown && <FaChevronDown size={10} />}
            </div>
          ) : (
            <Link to={cat.link} key={index} className="category-item">
              {cat.name}
              {cat.hasDropdown && <FaChevronDown size={10} />}
            </Link>
          )
        ))}
      </div>

      {/* Mega Menu */}
      {showMegaMenu && (
        <div
          className="mega-menu"
          onMouseEnter={() => setShowMegaMenu(true)}
          onMouseLeave={() => setShowMegaMenu(false)}
        >
          <div className="mega-menu-content">
            {megaColumns.map((col, colIdx) => (
              <div key={colIdx} className="mega-col">
                {col.sections.map((section, secIdx) => (
                  <div key={secIdx} className="mega-section">
                    {section.heading && <h4 className="mega-heading">{section.heading}</h4>}
                    <ul>
                      {section.items.map((item, itemIdx) => (
                        <li key={itemIdx}><Link to="/category/baby-fashion">{item}</Link></li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
