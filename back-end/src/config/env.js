const requiredEnv = ["DATABASE_URL", "JWT_SECRET"];

function loadEnv() {
  requiredEnv.forEach((key) => {
    if (!process.env[key]) {
      console.warn(`[env] Missing environment variable: ${key}`);
    }
  });

  return {
    nodeEnv: process.env.NODE_ENV || "development",
    port: Number(process.env.PORT || 3000),
    databaseUrl: process.env.DATABASE_URL,
    jwtSecret: process.env.JWT_SECRET,
    jwtExpiresIn: process.env.JWT_EXPIRES_IN || "1d",
  };
}

module.exports = { loadEnv };
