import { writable } from 'svelte/store';

export const authStore = writable({
  isAuthenticated: false,
  user: null,
});

export function loadAuthState() {
  if (typeof window !== 'undefined') { // Check if the code is running on the client side
    const authData = JSON.parse(localStorage.getItem('authToken'));
    if (authData) {
      authStore.set({
        isAuthenticated: true,
        user: authData,
      });
    }
  }
}
