import { Property } from "../models/userModel.js";

const createProperty = async (data) => {
    return await Property.create(data)
}

const getAllProperty = async ({
    start,
    end,
    guests,
    minPrice = 0,
    maxPrice = 0,
    type,
    sort = "recommended"
}) => {
    const filter = {
        price: { $gte: Number(minPrice), $lte: Number(maxPrice) }
    };

    // Filter by property type
    if (type && type !== "all") {
        filter.type = new RegExp(`^${type}$`, 'i');;
    }

    // Filter by availability and guest count
    if (start && end && guests) {
        const startDate = new Date(start);
        const endDate = new Date(end);
        const guestCount = parseInt(guests);

        filter.maxGuests = { $gte: guestCount };
        filter.$or = [
            { bookings: { $exists: false } },
            {
                bookings: {
                    $not: {
                        $elemMatch: {
                            $or: [
                                {
                                    startDate: { $lte: endDate },
                                    endDate: { $gte: startDate }
                                }
                            ]
                        }
                    }
                }
            }
        ];
    }

    // Sorting options
    let sortOption = {};
    switch (sort) {
        case "price_low":
            sortOption.price = 1;
            break;
        case "price_high":
            sortOption.price = -1;
            break;
        case "rating":
            sortOption.rating = -1;
            break;
        case "recommended":
        default:
            sortOption.featured = -1;
            sortOption.rating = -1;
            break;
    }

    return await Property.find(filter).sort(sortOption);
};

const getPropertyById = async (ID) => {
    return await Property.findOne({ _id: ID })
}
const updatePropertyById = async (ID, updatedData) => {
    return await Property.findOneAndUpdate({ _id: ID }, updatedData, { new: true })
}
const deletePropertyById = async (ID) => {
    return await Property.findOneAndDelete({ _id: ID })
}
const getAvailabilRoomsById = async ({ propertyId, guests, start, end }) => {
    const guestCount = parseInt(guests);
    const startDate = start ? new Date(start) : null;
    const endDate = end ? new Date(end) : null;

    const property = await Property.findById(propertyId);

    if (!property) throw new Error("Property not found");

    let filteredRooms = property.rooms;

    // Filter by max guests
    if (guestCount) {
        filteredRooms = filteredRooms.filter(room => room.maxGuests >= guestCount);
    }

    // Filter by date availability
    if (startDate && endDate) {
        filteredRooms = filteredRooms.filter(room => {
            if (!room.bookings || room.bookings.length === 0) return true;

            return room.bookings.every(booking => {
                const bookingStart = new Date(booking.startDate);
                const bookingEnd = new Date(booking.endDate);
                return bookingEnd < startDate || bookingStart > endDate;
            });
        });
    }

    return filteredRooms;
};
export default {
    createProperty,
    getAllProperty,
    getPropertyById,
    updatePropertyById,
    deletePropertyById,
    getAvailabilRoomsById
}