// Places Routes
const express = require('express');
const router = express.Router();
const places = require('../data/places');

// GET all places (supports query params)
router.get('/', (req, res) => {
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
    thumbnail: place.thumbnail,
  }));
  res.json(simplifiedPlaces);
});

// GET all places with full details (legacy path support)
router.get('/full', (req, res) => {
  res.json(places);
});

// GET single place by ID (legacy path support)
router.get('/:id', (req, res) => {
  const place = places.find(p => p.id === req.params.id);

  if (!place) {
    return res.status(404).json({ error: 'Place not found' });
  }

  res.json(place);
});

module.exports = router;
