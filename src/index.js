const express = require('express');
const cors = require('cors');

const app = express();

// Configure CORS
const corsOptions = {
  origin: 'https://deshratna-devendra-e3180769-nagp-svelte-js-and-svelt-ri8iz25ip.vercel.app',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204
};

app.use(cors(corsOptions));

app.use(express.json());

// Define your routes...

const PORT = process.env.PORT || 5184;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
