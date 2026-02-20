// CORS Middleware Configuration
const cors = require('cors');

const allowedOrigins = [
  'http://localhost:1234',  // Parcel dev server
  'http://localhost:3000',  // Alternative dev port
  // Add your production domain below:
  // 'https://yourdomain.com',
];

const corsMiddleware = cors({
  origin: allowedOrigins,
  methods: ['GET'],
  optionsSuccessStatus: 200,
});

module.exports = corsMiddleware;
