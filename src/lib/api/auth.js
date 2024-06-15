// src/lib/api/auth.js
let mockUser = { id: 1, name: 'John Doe', email: 'john.doe@example.com', password: 'password' };
let isAuthenticated = false;

export async function login(email, password) {
  if (email === mockUser.email && password === mockUser.password) {
    isAuthenticated = true;
    return { user: mockUser, token: 'mock-jwt-token' };
  } else {
    throw new Error('Invalid credentials');
  }
}

export async function logout() {
  isAuthenticated = false;
  return { message: 'Logged out' };
}

export async function register(name, email, password) {
  mockUser = { id: Date.now(), name, email, password };
  isAuthenticated = true;
  return { user: mockUser, token: 'mock-jwt-token' };
}

export async function getCurrentUser() {
  if (isAuthenticated) {
    return mockUser;
  } else {
    throw new Error('Not authenticated');
  }
}
