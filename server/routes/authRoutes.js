import express from "express";
import { adminLogin, getCurrentAdmin, changePassword } from "../controllers/authController.js";
import { auth } from "../middleware/authMiddleware.js";
import { validate, sanitizeInput } from "../middleware/validateMiddleware.js";
import { loginSchema } from "../middleware/validateMiddleware.js";

const router = express.Router();

router.post("/login", validate(loginSchema), sanitizeInput, adminLogin);
router.get("/me", auth, getCurrentAdmin);
router.put("/password", auth, changePassword);

export default router;
