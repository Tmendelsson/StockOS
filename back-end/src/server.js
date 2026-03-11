const app = require("./app");
const { loadEnv } = require("./config/env");

const env = loadEnv();

app.listen(env.port, () => {
  console.log(`[server] StockOS API running on port ${env.port}`);
});
