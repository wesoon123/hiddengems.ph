// Vercel Serverless Function for Places API
const places = require('./data/places');

module.exports = (req, res) => {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Parse the URL path
  const { id, full } = req.query;

  // GET /api/places?full=true - All places with full details
  if (full === 'true') {
    return res.status(200).json(places);
  }

  // GET /api/places?id=xxx - Single place by ID
  if (id) {
    const place = places.find(p => p.id === id);
    if (!place) {
      return res.status(404).json({ error: 'Place not found' });
    }
    return res.status(200).json(place);
  }

  // GET /api/places - List all places (simplified)
  const simplifiedPlaces = places.map(place => ({
    id: place.id,
    name: place.name,
    subtitle: place.subtitle,
    thumbnail: place.thumbnail
  }));
  
  return res.status(200).json(simplifiedPlaces);
};
