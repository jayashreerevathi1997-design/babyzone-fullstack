import React, { useState, useEffect } from 'react';
import HeroCarousel from '../components/HeroCarousel';
import CategorySection from '../components/CategorySection';
import NewArrivals from '../components/NewArrivals';
import TopSelling from '../components/TopSelling';
import TopBrands from '../components/TopBrands';
import CustomerReviews from '../components/CustomerReviews';
import './Home.css';

// Static data with actual images from Baby products website folder
const staticCategories = [
  { id: 1, name: 'Boys fashion', image: '/categories/boys-fashion.jpg', slug: 'boys-fashion' },
  { id: 2, name: 'Girls fashion', image: '/categories/girls-fashion.jpg', slug: 'girls-fashion' },
  { id: 3, name: 'Footwear', image: '/categories/footwear.webp', slug: 'footwear' },
  { id: 4, name: 'Accessories', image: '/categories/accessories.jpg', slug: 'accessories' },
  { id: 5, name: 'Toys', image: '/categories/toys.jpg', slug: 'toys' },
  { id: 6, name: 'Beds', image: '/categories/beds.jpg', slug: 'beds' },
];

const staticNewArrivals = [
  { id: 1, name: 'Cotton Seersucker Frill Dress', price: 2099, image: '/products/cotton-dress.jpg' },
  { id: 2, name: 'Cute Walk by Babyhug', price: 936, image: '/products/cute-walk.webp' },
  { id: 3, name: 'Babyoye Disney', price: 590, image: '/products/baby-disney.webp' },
  { id: 4, name: 'Bath Squeeze Toys', price: 257, image: '/products/bath-toys.webp' },
  { id: 5, name: 'Advanced Pant Style Diapers Extra Large (XL)', price: 1185, image: '/products/diapers.webp' },
  { id: 6, name: 'Comfy Ride Stroller With Reversible Handle', price: 3180, image: '/products/stroller-comfy.webp' },
  { id: 7, name: 'Runway Cabin Stroller in Linen Fabric', price: 9730, image: '/products/stroller-runway.webp' },
  { id: 8, name: 'Cocoon Stroller Mosquito Net & Reversible Handle', price: 3190, image: '/products/stroller-cocoon.webp' },
];

const staticTopSelling = [
  { id: 101, name: 'Cocoon Stroller Mosquito Net & Reversible Handle', price: 3190, image: '/products/stroller-cocoon.webp' },
  { id: 102, name: 'Comfy Ride Stroller With Reversible Handle', price: 3180, image: '/products/stroller-comfy.webp' },
  { id: 103, name: 'Cute Walk by Babyhug', price: 936, image: '/products/cute-walk.webp' },
  { id: 104, name: 'My Fun Dough Jumbo Return Gift Set Tub', price: 599, image: '/products/fun-dough.webp' },
];

const staticBanners = [
  { id: 1, title: 'Baby beds & Accessories', discount: 'Flat 30% Off', image: '/banners/banner1.jpg', link: '/category/beds' },
  { id: 2, title: 'Baby Fashion Collection', discount: 'Up to 50% Off', image: '/banners/banner2.jpg', link: '/category/girls-fashion' },
];

const staticBrands = [
  { id: 1, name: 'Kidlon', logo: '/brands/kidlon.png' },
  { id: 2, name: 'Fancy Fluff', logo: '/brands/fancy-fluff.jpg' },
  { id: 3, name: "Johnson's Baby", logo: '/brands/johnsons.jpg' },
  { id: 4, name: 'Pampers', logo: '/brands/pampers.png' },
  { id: 5, name: 'Babyhug', logo: '/brands/babyhug.webp' },
];

const Home = () => {
  const [newArrivals] = useState(staticNewArrivals);
  const [topSelling] = useState(staticTopSelling);
  const [categories] = useState(staticCategories);
  const [brands] = useState(staticBrands);
  const [banners] = useState(staticBanners);

  const handleBuy = (product) => {
    console.log('Add to cart:', product);
  };

  return (
    <div className="home-page">
      <HeroCarousel banners={banners} />
      <CategorySection categories={categories} />
      <NewArrivals products={newArrivals} onBuy={handleBuy} />
      <TopSelling products={topSelling} />
      <TopBrands brands={brands} />
      <CustomerReviews />
    </div>
  );
};

export default Home;
