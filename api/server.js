// Express.js API Server for HiddenGemsPH
const express = require('express');
const { corsMiddleware, errorHandler } = require('./middleware');
const placesRouter = require('./routes/places');
const hotelsRouter = require('./routes/hotels');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(corsMiddleware);
app.use(express.json());

// Routes
app.use('/api/places', placesRouter);
app.use('/api/hotels', hotelsRouter);

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Error handling (must be registered last)
app.use(errorHandler);

// Start server
const server = app.listen(PORT, () => {
  console.log(`🚀 HiddenGemsPH API running on http://localhost:${PORT}`);
  console.log(`📍 Places endpoint: http://localhost:${PORT}/api/places`);
});

// Graceful shutdown
const shutdown = (signal) => {
  console.log(`\n🛑 ${signal} received. Shutting down gracefully...`);
  server.close(() => {
    console.log('✅ Server closed.');
    process.exit(0);
  });

  // Force close after 5 seconds if connections hang
  setTimeout(() => {
    console.error('⚠️ Forcing shutdown after timeout.');
    process.exit(1);
  }, 5000);
};

process.on('SIGTERM', () => shutdown('SIGTERM'));
process.on('SIGINT', () => shutdown('SIGINT'));
