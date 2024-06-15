import cors from 'cors';

export const handle = async ({ request, resolve }) => {
  const corsHandler = cors({
    origin: 'https://deshratna-devendra-e3180769-nagp-svelte-js-and-svelt-ahdeetka9.vercel.app',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
  });

  return new Promise((resolve, reject) => {
    corsHandler(request, {}, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve(resolve(request));
      }
    });
  });
};
