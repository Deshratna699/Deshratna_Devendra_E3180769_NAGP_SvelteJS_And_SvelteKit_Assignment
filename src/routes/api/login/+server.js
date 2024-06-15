import { json } from '@sveltejs/kit';
import { users, tokens } from '$lib/db';

export async function POST({ request }) {
  const { email, password } = await request.json();

  const user = users.find(user => user.email === email && user.password === password);

  if (user) {
    const token = { email, token: Date.now().toString() };
    tokens.push(token);
    return json(token);
  }

  return json({ error: 'Invalid credentials' }, { status: 401 });
}
