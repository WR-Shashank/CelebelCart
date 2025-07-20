import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  category: string;
  stock: number;
  ratings: number;
  numOfReviews: number;
  reviews: Review[];
}

export interface Review {
  id: string;
  user: string;
  rating: number;
  comment: string;
  date: string;
}

interface ProductsState {
  products: Product[];
  filteredProducts: Product[];
  loading: boolean;
  error: string | null;
  currentPage: number;
  totalPages: number;
  productsPerPage: number;
  filters: {
    category: string;
    priceRange: [number, number];
    rating: number;
    search: string;
  };
  viewMode: 'grid' | 'list';
}

const initialState: ProductsState = {
  products: [],
  filteredProducts: [],
  loading: false,
  error: null,
  currentPage: 1,
  totalPages: 1,
  productsPerPage: 12,
  filters: {
    category: '',
    priceRange: [0, 100000],
    rating: 0,
    search: '',
  },
  viewMode: 'grid',
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
      state.filteredProducts = action.payload;
      state.totalPages = Math.ceil(action.payload.length / state.productsPerPage);
    },
    setFilters: (state, action: PayloadAction<Partial<ProductsState['filters']>>) => {
      state.filters = { ...state.filters, ...action.payload };
      state.currentPage = 1;
      
      // Apply filters
      let filtered = state.products;
      
      if (state.filters.search) {
        filtered = filtered.filter(product =>
          product.name.toLowerCase().includes(state.filters.search.toLowerCase()) ||
          product.description.toLowerCase().includes(state.filters.search.toLowerCase())
        );
      }
      
      if (state.filters.category) {
        filtered = filtered.filter(product => product.category === state.filters.category);
      }
      
      filtered = filtered.filter(
        product => product.price >= state.filters.priceRange[0] && 
                  product.price <= state.filters.priceRange[1]
      );
      
      if (state.filters.rating > 0) {
        filtered = filtered.filter(product => product.ratings >= state.filters.rating);
      }
      
      state.filteredProducts = filtered;
      state.totalPages = Math.ceil(filtered.length / state.productsPerPage);
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    setViewMode: (state, action: PayloadAction<'grid' | 'list'>) => {
      state.viewMode = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const {
  setProducts,
  setFilters,
  setCurrentPage,
  setViewMode,
  setLoading,
  setError,
} = productsSlice.actions;

export default productsSlice.reducer;