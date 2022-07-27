import jwt from "jsonwebtoken";
import { createError } from "./error.js";

//Authentication
//get token from the cookies and verify if the token is same as the backend token.

export const verifyToken = (req, res, next) => {
    //get token from the cookies
    const token = req.cookies.access_token;

    //if there is no token present in cookie then create error
    if (!token) {
        return next(createError(401, "You are not autheniticated!"));
    }

    //if there is cookie then verify the token.
    //if there is error then send error
    //if the token is verified then add user to the req.user and call next middleware
    jwt.verify(token, process.env.JWT_TOKEN, (err, user) => {
        if (err) {
            return next(createError(403, "Token is not valid!"));
        }
        req.user = user;
        // console.log(req.user);
        next();
    });
};

//Authorization
export const verifyUser = (req, res, next) => {
    //verify the token
    console.log(req.user);
    console.log(req.params);
    verifyToken(req, res, () => {
        if (req.user.id === req.params.id || req.user.isAdmin) {
            next();
        } else {
            return next(createError(403, "You are not authroized"));
        }
    });
};

export const verifyAdmin = (req, res, next) => {
    //verify the token
    verifyToken(req, res, () => {
        if (req.user.isAdmin) {
            next();
        } else {
            return next(createError(403, "You are not authroized"));
        }
    });
};
