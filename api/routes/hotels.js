// Hotels Routes
const express = require('express');
const router = express.Router();
const hotels = require('../data/hotels');

// GET all hotels (supports search query)
router.get('/', (req, res, next) => {
  try {
    const { search } = req.query;

    // If search query provided, filter results
    if (search) {
      const term = search.toLowerCase().trim();
      const filtered = hotels.filter(h =>
        h.name.toLowerCase().includes(term) ||
        h.location.toLowerCase().includes(term) ||
        h.category.toLowerCase().includes(term) ||
        h.amenities.some(a => a.toLowerCase().includes(term))
      );
      return res.json(filtered);
    }

    // Return all hotels
    res.json(hotels);
  } catch (err) {
    next(err);
  }
});

// GET single hotel by ID
router.get('/:id', (req, res, next) => {
  try {
    const id = parseInt(req.params.id, 10);

    if (isNaN(id)) {
      return res.status(400).json({ error: 'Invalid hotel ID' });
    }

    const hotel = hotels.find(h => h.id === id);

    if (!hotel) {
      return res.status(404).json({ error: 'Hotel not found' });
    }

    res.json(hotel);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
