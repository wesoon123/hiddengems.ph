// Vercel Serverless Function for Hotels API
const hotels = require('./data/hotels');

module.exports = (req, res) => {
  // Enable CORS with specific origins
  const allowedOrigins = [
    'http://localhost:1234',
    'http://localhost:3000',
    // Add your production domain below:
    // 'https://yourdomain.com',
  ];

  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Only allow GET requests
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { id, search } = req.query;

    // GET /api/hotels?id=xxx - Single hotel by ID
    if (id) {
      const parsedId = parseInt(id, 10);
      if (isNaN(parsedId)) {
        return res.status(400).json({ error: 'Invalid hotel ID' });
      }
      const hotel = hotels.find(h => h.id === parsedId);
      if (!hotel) {
        return res.status(404).json({ error: 'Hotel not found' });
      }
      return res.status(200).json(hotel);
    }

    // GET /api/hotels?search=keyword - Search hotels
    if (search) {
      const term = search.toLowerCase().trim();
      const filtered = hotels.filter(h =>
        h.name.toLowerCase().includes(term) ||
        h.location.toLowerCase().includes(term) ||
        h.category.toLowerCase().includes(term) ||
        h.amenities.some(a => a.toLowerCase().includes(term))
      );
      return res.status(200).json(filtered);
    }

    // GET /api/hotels - All hotels
    return res.status(200).json(hotels);
  } catch (err) {
    console.error('❌ Error:', err.message);
    return res.status(500).json({ error: 'Internal server error' });
  }
};
