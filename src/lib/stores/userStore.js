// src/lib/stores/userStore.js
import { writable } from 'svelte/store';
import { login, logout, getCurrentUser } from '$lib/api/auth';

const userStore = writable({ isAuthenticated: false, data: null });

export const user = userStore;

export async function handleLogin(email, password) {
  try {
    const { user, token } = await login(email, password);
    userStore.set({ isAuthenticated: true, data: user });
  } catch (error) {
    console.error('Login failed:', error);
  }
}

export async function handleLogout() {
  await logout();
  userStore.set({ isAuthenticated: false, data: null });
}

export async function fetchCurrentUser() {
  try {
    const user = await getCurrentUser();
    userStore.set({ isAuthenticated: true, data: user });
  } catch (error) {
    console.error('Fetch current user failed:', error);
    userStore.set({ isAuthenticated: false, data: null });
  }
}
