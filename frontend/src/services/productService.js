import api from './api';

const productService = {
  // Get all products
  getProducts: async () => {
    const response = await api.get('/products/');
    return response.data;
  },

  // Get single product by ID
  getProductById: async (id) => {
    const response = await api.get(`/products/${id}/`);
    return response.data;
  },

  // Get products by category slug
  getProductsByCategory: async (categorySlug) => {
    const response = await api.get(`/products/?category=${categorySlug}`);
    return response.data;
  },

  // Get new arrivals
  getNewArrivals: async () => {
    const response = await api.get('/products/?tag=new_arrival');
    return response.data;
  },

  // Get top selling products
  getTopSelling: async () => {
    const response = await api.get('/products/?tag=top_selling');
    return response.data;
  },

  // Get all categories
  getCategories: async () => {
    const response = await api.get('/categories/');
    return response.data;
  },

  // Get all brands
  getBrands: async () => {
    const response = await api.get('/brands/');
    return response.data;
  },

  // Get banners
  getBanners: async () => {
    const response = await api.get('/banners/');
    return response.data;
  },

  // Search products
  searchProducts: async (query) => {
    const response = await api.get(`/products/?search=${query}`);
    return response.data;
  },
};

export default productService;
