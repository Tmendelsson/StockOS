function notFoundHandler(req, res) {
  res.status(404).json({
    message: `Route not found: ${req.method} ${req.originalUrl}`,
  });
}

function errorHandler(err, _req, res, _next) {
  if (err.name === "ZodError") {
    return res.status(400).json({
      message: "Validation error",
      issues: err.issues,
    });
  }

  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    message: err.message || "Internal server error",
    details: process.env.NODE_ENV === "production" ? undefined : err,
  });
}

module.exports = { notFoundHandler, errorHandler };
