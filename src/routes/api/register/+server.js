import { json } from '@sveltejs/kit';
import { users } from '$lib/db';

export async function POST({ request }) {
  const { email, password } = await request.json();

  const existingUser = users.find(user => user.email === email);
  if (existingUser) {
    return json({ error: 'User already exists' }, { status: 409 });
  }

  const newUser = { email, password };
  users.push(newUser);

  return json({ message: 'Registration successful' });
}
