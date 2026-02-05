// Express.js API Server for HiddenGemsPH
const express = require('express');
const cors = require('cors');
const places = require('./data/places');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Routes

// GET all places (supports both /places/full and /places?full=true)
app.get('/api/places', (req, res) => {
  // If full query param, return full details
  if (req.query.full === 'true') {
    return res.json(places);
  }
  
  // If id query param, return single place
  if (req.query.id) {
    const place = places.find(p => p.id === req.query.id);
    if (!place) {
      return res.status(404).json({ error: 'Place not found' });
    }
    return res.json(place);
  }
  
  // Return simplified list for cards
  const simplifiedPlaces = places.map(place => ({
    id: place.id,
    name: place.name,
    subtitle: place.subtitle,
    thumbnail: place.thumbnail
  }));
  res.json(simplifiedPlaces);
});

// GET all places with full details (legacy path support)
app.get('/api/places/full', (req, res) => {
  res.json(places);
});

// GET single place by ID (legacy path support)
app.get('/api/places/:id', (req, res) => {
  const place = places.find(p => p.id === req.params.id);
  
  if (!place) {
    return res.status(404).json({ error: 'Place not found' });
  }
  
  res.json(place);
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 HiddenGemsPH API running on http://localhost:${PORT}`);
  console.log(`📍 Places endpoint: http://localhost:${PORT}/api/places`);
});
