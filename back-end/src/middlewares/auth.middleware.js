const { AppError } = require("../utils/app-error");
const { verifyAccessToken } = require("../utils/jwt");

function ensureAuth(req, _res, next) {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      throw new AppError("Missing or invalid authorization header", 401);
    }

    const token = authHeader.slice(7);
    const payload = verifyAccessToken(token);

    req.auth = payload;
    next();
  } catch (error) {
    if (error.name === "JsonWebTokenError" || error.name === "TokenExpiredError") {
      return next(new AppError("Invalid or expired token", 401));
    }

    return next(error);
  }
}

module.exports = { ensureAuth };
