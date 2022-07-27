import Hotel from "../models/Hotel.js";

export const createHotel = async (request, response, next) => {
    const newHotel = new Hotel(request.body);

    try {
        const savedHotel = await newHotel.save();
        response.status(200).json(savedHotel);
    } catch (err) {
        next(err);
    }
};

export const updateHotel = async (request, response, next) => {
    try {
        const updatedHotel = await Hotel.findByIdAndUpdate(
            request.params.id,
            {
                $set: request.body,
            },
            { new: true }
        );
        response.status(200).json(updatedHotel);
    } catch (err) {
        next(err);
    }
};

export const deleteHotel = async (request, response, next) => {
    try {
        await Hotel.findByIdAndDelete(request.params.id);
        response.status(200).json("Hotel has been deleted");
    } catch (err) {
        next(err);
    }
};

export const getAllHotels = async (request, response, next) => {
    try {
        const hotels = await Hotel.find();
        response.status(200).json(hotels);
    } catch (err) {
        next(err);
    }
};

export const getHotel = async (request, response, next) => {
    try {
        const hotel = await Hotel.findById(request.params.id);
        response.status(200).json(hotel);
    } catch (err) {
        next(err);
    }
};
