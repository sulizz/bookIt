//add "type": "module" in package.json to use imports rather than require.
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";

import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import hotelsRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";

const app = express();
dotenv.config();

//initial connection to mongoDB.
const connectMongo = () => {
    try {
        mongoose.connect(process.env.MONGODB_URI, () =>
            console.log("connected to mongo")
        );
    } catch (error) {
        //on intial connect if there is any problem then the function will throw error and exit.
        // it will not try to connect again and again.....
        throw error;
    }
};

// if there is a disconnection after the initial connect by any means mongoose will console.log
mongoose.connection.on("disconnected", () => {
    console.log("mongoDB disconnected");
});

// if there is a discconected after the initial connect mongoose will try to connect again
mongoose.connection.on("connnected", () => {
    console.log("mongoDB connnected");
});

//middlewares
app.use(cookieParser());
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);

//error handling middleware
app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong";

    return res.status(errorStatus).json({
        sucess: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack,
    });
});

app.listen(5000, () => {
    connectMongo();
    console.log("connected to 5000");
});
