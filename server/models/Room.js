import mongoose from "mongoose";
const RoomSchema = new mongoose.Schema({
    title: {
        type: String,
        requried: true,
    },
    price: {
        type: Number,
        requried: true,
    },
    description: {
        type: String,
        requried: true,
    },
    maxPeople: {
        type: Number,
        requried: true,
    },
    roomNumbers: [
        {
            number: Number,
            unavailableDates: [{ type: [Date] }],
        },
    ],
});
/* 
roomNumbers: [
    {
        number:101,
        unavailableDates:[01.05.2022]
     }
     {
        number:102,
        unavailableDates:[01.05.2022,01,23,2022]
     }
]
*/

export default mongoose.model("Room", RoomSchema);
