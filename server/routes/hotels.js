import express from "express";
import {
    createHotel,
    deleteHotel,
    getAllHotels,
    getHotel,
    updateHotel,
} from "../controllers/hotel.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createHotel);
//UPDATE
router.put("/:id", verifyAdmin, updateHotel);
//DELETE
router.delete("/:id", verifyAdmin, deleteHotel);
//GET
router.get("/:id", getHotel);
//GET ALL
router.get("/", getAllHotels);

export default router;

// 62da0e70c06b76956aa59ba0
