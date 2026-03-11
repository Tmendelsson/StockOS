const { Router } = require("express");
const { getHealth } = require("../controllers/health.controller");
const authRoutes = require("./auth.routes");

const router = Router();

/**
 * @swagger
 * /health:
 *   get:
 *     summary: Health check da API
 *     tags:
 *       - Health
 *     responses:
 *       200:
 *         description: API operando normalmente
 */
router.get("/health", getHealth);
router.use("/auth", authRoutes);

module.exports = router;
