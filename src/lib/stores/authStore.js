import { writable } from 'svelte/store';

export const authStore = writable({
  isAuthenticated: false,
  user: null,
});

export function loadAuthState() {
  if (typeof window !== 'undefined') { // Check if the code is running on the client side
    const authToken = JSON.parse(localStorage.getItem('authToken'));
    if (authToken) {
      authStore.set({
        isAuthenticated: true,
        user: authToken, // Adjust this based on what your authToken contains
      });
    }
  }
}
