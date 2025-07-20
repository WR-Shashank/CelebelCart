import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  stock: number;
}

interface CartState {
  items: CartItem[];
  total: number;
  itemsCount: number;
}

const loadCartFromStorage = (): CartItem[] => {
  try {
    const cart = localStorage.getItem('celebelcart');
    return cart ? JSON.parse(cart) : [];
  } catch {
    return [];
  }
};

const saveCartToStorage = (items: CartItem[]) => {
  localStorage.setItem('celebelcart', JSON.stringify(items));
};

const calculateTotal = (items: CartItem[]) => {
  return items.reduce((total, item) => total + (item.price * item.quantity), 0);
};

const calculateItemsCount = (items: CartItem[]) => {
  return items.reduce((count, item) => count + item.quantity, 0);
};

const initialState: CartState = {
  items: loadCartFromStorage(),
  total: 0,
  itemsCount: 0,
};

initialState.total = calculateTotal(initialState.items);
initialState.itemsCount = calculateItemsCount(initialState.items);

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Omit<CartItem, 'quantity'>>) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      
      if (existingItem) {
        if (existingItem.quantity < existingItem.stock) {
          existingItem.quantity += 1;
        }
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      
      state.total = calculateTotal(state.items);
      state.itemsCount = calculateItemsCount(state.items);
      saveCartToStorage(state.items);
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(item => item.id !== action.payload);
      state.total = calculateTotal(state.items);
      state.itemsCount = calculateItemsCount(state.items);
      saveCartToStorage(state.items);
    },
    updateQuantity: (state, action: PayloadAction<{ id: string; quantity: number }>) => {
      const item = state.items.find(item => item.id === action.payload.id);
      if (item && action.payload.quantity > 0 && action.payload.quantity <= item.stock) {
        item.quantity = action.payload.quantity;
      }
      state.total = calculateTotal(state.items);
      state.itemsCount = calculateItemsCount(state.items);
      saveCartToStorage(state.items);
    },
    clearCart: (state) => {
      state.items = [];
      state.total = 0;
      state.itemsCount = 0;
      localStorage.removeItem('celebelcart');
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;