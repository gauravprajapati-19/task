const { Router } = require("express");

const { createEntry, getEntries, editEntry, deleteEntry } = require("../controllers/listControllers");
const authMiddleware = require("../middleware/authMiddleware");

const router = Router();

router.post("/", authMiddleware, createEntry);
router.get("/", getEntries);
router.patch("/:id", authMiddleware, editEntry);
router.delete("/:id", authMiddleware, deleteEntry);

module.exports = router;
