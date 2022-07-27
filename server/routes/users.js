import express from "express";
import {
    deleteUser,
    getAllUser,
    getUser,
    updateUser,
} from "../controllers/user.js";
import { verifyUser, verifyAdmin, verifyToken } from "../utils/verifyToken.js";

const router = express.Router();

// router.get("/checkAuth", verifyToken, (req, res, next) => {
//     res.json("hello");
// });

router.get("/checkuser/:id", verifyUser, (req, res, next) => {
    res.send("hello user you are logged in");
});

//UPDATE
router.put("/:id", verifyUser, updateUser);
//DELETE
router.delete("/:id", verifyUser, deleteUser);
//GET
router.get("/:id", verifyUser, getUser);
//GET ALL
router.get("/", verifyAdmin, getAllUser);
export default router;
