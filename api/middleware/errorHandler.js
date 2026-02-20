// Global Error Handling Middleware
// Must have 4 parameters for Express to recognize it as an error handler
const errorHandler = (err, req, res, next) => {
  console.error(`❌ Error: ${err.message}`);
  console.error(err.stack);

  const statusCode = err.statusCode || 500;
  const message = err.statusCode ? err.message : 'Internal server error';

  res.status(statusCode).json({
    error: message,
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
  });
};

module.exports = errorHandler;
