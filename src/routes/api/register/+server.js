import { json } from '@sveltejs/kit';

// Mock database
const users = [];

export async function POST({ request }) {
  const { email, password } = await request.json();

  // Check if the user already exists
  const existingUser = users.find(user => user.email === email);
  if (existingUser) {
    return json({ error: 'User already exists' }, { status: 409 });
  }

  // Store the new user
  const newUser = { email, password };
  users.push(newUser);

  return json({ message: 'Registration successful' });
}
