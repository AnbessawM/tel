import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  products: [],
  status: 'idle',
  error: null,
  filters: {
    size: '',
    category: '',
    priceRange: '',
  },
};

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const response = await axios.get('https://fakestoreapi.com/products');
  // Add mock sizes and variants
  const productsWithVariants = response.data.map(product => ({
    ...product,
    sizes: ['S', 'M', 'L', 'XL'],
    variants: ['Red', 'Black', 'White', 'Blue'],
    reviews: [],
  }));
  return productsWithVariants;
});

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setFilter(state, action) {
      state.filters = { ...state.filters, ...action.payload };
    },
    addReview(state, action) {
      const { productId, review } = action.payload;
      const product = state.products.find(p => p.id === productId);
      if (product) {
        product.reviews.push(review);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { setFilter, addReview } = productSlice.actions;
export default productSlice.reducer;