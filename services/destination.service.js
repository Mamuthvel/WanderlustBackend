import { Destination } from "../models/userModel.js"

const createDestination = async (data) => {
    return await Destination.create(data)
}
const getAlldestination = async ({ search, checkIn, checkOut, guests, location }) => {
    const filter = {};

    // Location filter
    if (location) {
        filter.location = new RegExp(location, 'i'); // case-insensitive match
    }

    // Guest filter
    const totalGuests = (guests?.adults || 0) + (guests?.children || 0);
    if (totalGuests > 0) {
        filter.maxGuests = { $gte: totalGuests };
    }

    // Search filter (name or location)
    if (search) {
        filter.$or = [
            { name: new RegExp(search, 'i') },
            { location: new RegExp(search, 'i') }
        ];
    }
    // Date filter
    if (checkIn && checkOut) {
        const start = new Date(checkIn);
        const end = new Date(checkOut);

        filter.$or = [
            { bookings: { $exists: false } }, // No bookings at all
            {
                bookings: {
                    $not: {
                        $elemMatch: {
                            $or: [
                                {
                                    startDate: { $lte: end },
                                    endDate: { $gte: start }
                                }
                            ]
                        }
                    }
                }
            }
        ];
    }

    return await Destination.find(filter);
};
const getdestinationById = async (ID) => {
    return await Destination.findOne({ _id: ID })
}
const updateDestinationById = async (ID, updatedData) => {
    return await Destination.findOneAndUpdate({ _id: ID }, updatedData, { new: true })
}
const deleteDestinationById = async (ID) => {
    return await Destination.findOneAndDelete({ _id: ID })
}

export default {
    createDestination,
    getAlldestination,
    getdestinationById,
    updateDestinationById,
    deleteDestinationById
}