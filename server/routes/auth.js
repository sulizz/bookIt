import express from "express";
import { login, register } from "../controllers/auth.js";

const router = express.Router();

//initial get route
//req whatever comes from user that is making a api request
//res is what the app returns to user after the api request
router.post("/register", register);
router.post("/login", login);

export default router;
