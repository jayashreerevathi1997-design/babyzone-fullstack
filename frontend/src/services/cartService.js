import api from './api';

const cartService = {
  // Get cart items
  getCart: async () => {
    const response = await api.get('/cart/');
    return response.data;
  },

  // Add item to cart
  addToCart: async (productId, quantity = 1) => {
    const response = await api.post('/cart/', { product_id: productId, quantity });
    return response.data;
  },

  // Update item quantity
  updateQuantity: async (itemId, quantity) => {
    const response = await api.patch(`/cart/${itemId}/`, { quantity });
    return response.data;
  },

  // Remove item from cart
  removeItem: async (itemId) => {
    const response = await api.delete(`/cart/${itemId}/`);
    return response.data;
  },
};

export default cartService;
