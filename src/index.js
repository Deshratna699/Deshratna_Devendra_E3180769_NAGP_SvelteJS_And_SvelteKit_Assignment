import { handler } from '@sveltejs/kit/node'; // Adjust import according to your setup
import { createServer } from 'http';
import { handle } from './middleware.js';

const server = createServer(async (req, res) => {
  try {
    await handle({ request: req, resolve: handler });
    handler(req, res);
  } catch (err) {
    res.statusCode = 500;
    res.end('Internal Server Error');
  }
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
