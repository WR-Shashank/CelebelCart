import React, { createContext, useContext, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loginSuccess, loginFailure } from '../store/slices/authSlice';
import { addToast } from '../store/slices/uiSlice';

interface AuthContextType {
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const dispatch = useDispatch();

  const login = async (email: string, password: string) => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock user data
      const user = {
        id: '1',
        name: email.split('@')[0],
        email,
        role: email.includes('admin') ? 'admin' as const : 'user' as const,
      };
      
      dispatch(loginSuccess(user));
      dispatch(addToast({ message: 'Login successful!', type: 'success' }));
    } catch (error) {
      dispatch(loginFailure('Invalid credentials'));
      dispatch(addToast({ message: 'Login failed. Please try again.', type: 'error' }));
    }
  };

  const register = async (name: string, email: string, password: string) => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const user = {
        id: Date.now().toString(),
        name,
        email,
        role: 'user' as const,
      };
      
      dispatch(loginSuccess(user));
      dispatch(addToast({ message: 'Registration successful!', type: 'success' }));
    } catch (error) {
      dispatch(loginFailure('Registration failed'));
      dispatch(addToast({ message: 'Registration failed. Please try again.', type: 'error' }));
    }
  };

  return (
    <AuthContext.Provider value={{ login, register }}>
      {children}
    </AuthContext.Provider>
  );
};