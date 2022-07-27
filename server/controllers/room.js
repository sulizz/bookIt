import Hotel from "../models/Hotel.js";
import Room from "../models/Room.js";
import { createError } from "../utils/error.js";

//create Room for a hotel
/* 
    get the hotel id from the params.hotelid
    get new Room details from  req.body 
    try to save the new room
    try to update the hotel schema with with new room details
*/
export const createRoom = async (req, res, next) => {
    const hotelId = req.params.hotelid;
    const newRoom = new Room(req.body);

    try {
        const savedRoom = await newRoom.save();
        try {
            await Hotel.findByIdAndUpdate(hotelId, {
                $push: { rooms: savedRoom._id },
            });
        } catch (err) {
            next(err);
        }
        res.status(200).json(savedRoom);
    } catch (err) {
        next(err);
    }
};
/* 
    get the hotel id from the params.hotelid
    get new Room details from  req.body 
    try to save the new room
    try to update the hotel schema with with new room details
*/
export const updateRoom = async (request, response, next) => {
    try {
        const updatedRoom = await Room.findByIdAndUpdate(
            request.params.id,
            {
                $set: request.body,
            },
            { new: true }
        );
        response.status(200).json(updatedRoom);
    } catch (err) {
        next(err);
    }
};

/* 
    get the hotel id from the params.hotelid 
    try to delete the new room with room id from req.params
    try to pull rooms off the array of hotelid with room id
*/

export const deleteRoom = async (request, response, next) => {
    const hotelId = request.params.hotelid;
    try {
        await Room.findByIdAndDelete(request.params.id);
        try {
            await Hotel.findByIdAndUpdate(hotelId, {
                $pull: { rooms: request.params.id },
            });
        } catch (err) {
            next(err);
        }
        response.status(200).json("Room has been deleted");
    } catch (err) {
        next(err);
    }
};

export const getAllRooms = async (request, response, next) => {
    try {
        const rooms = await Room.find();
        response.status(200).json(rooms);
    } catch (err) {
        next(err);
    }
};

export const getRoom = async (request, response, next) => {
    try {
        const room = await Room.findById(request.params.id);
        response.status(200).json(room);
    } catch (err) {
        next(err);
    }
};
