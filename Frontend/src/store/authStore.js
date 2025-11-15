import { create } from 'zustand';

const useAuthStore = create((set, get) => ({
  user: null,
  isAuthenticated: false,
  isLoading: false,

  setUser: (user) => {
    set({ user, isAuthenticated: !!user });
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
  },
  
  setLoading: (isLoading) => set({ isLoading }),

  login: (user) => {
    set({ user, isAuthenticated: true });
    localStorage.setItem('user', JSON.stringify(user));
  },

  logout: () => {
    set({ user: null, isAuthenticated: false });
    localStorage.removeItem('user');
  },

  checkAuth: () => {
    // Check if user is authenticated by checking localStorage
    try {
      const userStr = localStorage.getItem('user');
      if (userStr) {
        const user = JSON.parse(userStr);
        set({ user, isAuthenticated: true });
        return true;
      }
    } catch (error) {
      console.error('Error checking auth:', error);
      localStorage.removeItem('user');
    }
    set({ user: null, isAuthenticated: false });
    return false;
  },
}));

export default useAuthStore;

