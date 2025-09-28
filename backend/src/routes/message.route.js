import express from "express";
import { getAllContacts } from "../controllers/message.controller.js";
import { protectRoute } from "../middleware/auth.midddleware.js";
import { arcjetProtection } from "../middleware/arcjet.middleware.js";

const router = express.Router();

router.get("/contacts", protectRoute, getAllContacts);
router.get("/:id", getMessagesByUserId);
// router.get("/chats", getAllChatPartners);

// router.post("/send/:id", sendMessage);

export default router;
