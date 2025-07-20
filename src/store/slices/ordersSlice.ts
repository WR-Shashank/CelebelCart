import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ShippingInfo {
  address: string;
  city: string;
  state: string;
  pincode: string;
  country: string;
  phoneNo: string;
}

export interface OrderItem {
  name: string;
  price: number;
  quantity: number;
  image: string;
  product: string;
}

export interface Order {
  id: string;
  shippingInfo: ShippingInfo;
  orderItems: OrderItem[];
  user: string;
  paymentInfo: {
    id: string;
    status: string;
  };
  paidAt: string;
  itemsPrice: number;
  taxPrice: number;
  shippingPrice: number;
  totalPrice: number;
  orderStatus: 'Processing' | 'Shipped' | 'Delivered' | 'Cancelled';
  deliveredAt?: string;
  createdAt: string;
}

interface OrdersState {
  orders: Order[];
  loading: boolean;
  error: string | null;
}

const initialState: OrdersState = {
  orders: [],
  loading: false,
  error: null,
};

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    setOrders: (state, action: PayloadAction<Order[]>) => {
      state.orders = action.payload;
    },
    addOrder: (state, action: PayloadAction<Order>) => {
      state.orders.unshift(action.payload);
    },
    updateOrderStatus: (state, action: PayloadAction<{ id: string; status: Order['orderStatus'] }>) => {
      const order = state.orders.find(order => order.id === action.payload.id);
      if (order) {
        order.orderStatus = action.payload.status;
      }
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const { setOrders, addOrder, updateOrderStatus, setLoading, setError } = ordersSlice.actions;
export default ordersSlice.reducer;