import User from "../models/User.js";
import bcrypt from "bcrypt";
import { createError } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const register = async (req, res, next) => {
    const { username, password, email } = req.body;
    const salt = bcrypt.genSaltSync(10);
    const hashedpassword = bcrypt.hashSync(password, salt);
    try {
        const newUser = User({
            username,
            password: hashedpassword,
            email,
        });
        await newUser.save();
        res.status(201).send("User has been created");
    } catch (err) {
        next(err);
    }
};

export const login = async (req, res, next) => {
    console.log(req.body);
    try {
        const user = await User.findOne({ username: req.body.username });
        console.log(user);
        if (!user) return next(createError(404, "Username not found"));
        const isPassword = await bcrypt.compare(
            req.body.password,
            user.password
        );

        if (!isPassword)
            return next(createError(400, "Username and password doesnt match"));

        const token = jwt.sign(
            { id: user._id, isAdmin: user.isAdmin },
            process.env.JWT_TOKEN
        );
        const { password, isAdmin, ...otherProperties } = user._doc;
        res.cookie("access_token", token, {
            httpOnly: true, //doesnt allow any client secret to reach this cookie
        })
            .status(200)
            .json({ ...otherProperties });
    } catch (err) {
        next(err);
    }
};
