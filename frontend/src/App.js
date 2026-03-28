import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider, useCart } from './context/CartContext';
import AnnouncementBar from './components/AnnouncementBar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import CategoryPage from './pages/CategoryPage';
import Checkout from './pages/Checkout';
import TrackOrder from './pages/TrackOrder';
import Forum from './pages/Forum';
import ParentingClasses from './pages/ParentingClasses';
import RentalServices from './pages/RentalServices';
import './App.css';

function AppContent() {
  const { cartCount } = useCart();

  return (
    <div className="App">
      <AnnouncementBar />
      <Navbar cartCount={cartCount} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/category/:slug" element={<CategoryPage />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/track-order" element={<TrackOrder />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/parenting-classes" element={<ParentingClasses />} />
        <Route path="/rental-services" element={<RentalServices />} />
      </Routes>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <CartProvider>
        <AppContent />
      </CartProvider>
    </Router>
  );
}

export default App;
