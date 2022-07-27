import { request, response } from "express";
import User from "../models/User.js";

export const deleteUser = async (request, response, next) => {
    try {
        const user = await User.findOneAndDelete(request.params.id);
        response.status(200).json("User has been deleted");
    } catch (err) {
        next(err);
    }
};

export const updateUser = async (request, response, next) => {
    try {
        const user = await User.findOneAndUpdate(
            request.params.id,
            {
                $set: request.body,
            },
            { new: true }
        );
        response.status(200).json(user);
    } catch (err) {
        next(err);
    }
};

export const getUser = async (request, response, next) => {
    try {
        const user = await User.findById(request.params.id);
        response.status(200).json(user);
    } catch (err) {
        next(err);
    }
};

export const getAllUser = async (request, response, next) => {
    try {
        const users = await User.find();
        response.status(200).send(users);
    } catch (err) {
        next(err);
    }
};
