import propertyService from "../services/property.service.js";

const CreateProperty = async (req, res) => {
    try {
        const { data } = req.body;
        if (!data) throw new Error("Data is not available");
        const result = await propertyService.createProperty(data);
        res.status(200).json({
            message: "Property Created Successfully",
            property: result
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Property not created"
        })
    }
};

export const GetAllProperty = async (req, res) => {
    try {
        const {
            start,
            end,
            guests,
            minPrice = 0,
            maxPrice = 300,
            type,
            sort = "recommended"
        } = req.query;

        const result = await propertyService.getAllProperty({
            start,
            end,
            guests,
            minPrice,
            maxPrice,
            type,
            sort
        });

        res.status(200).json(result);
    } catch (error) {
        console.error("❌ Property fetch failed:", error.message);
        return res.status(500).json({ message: "Failed to get Property" });
    }
};

const UpdatePropertyById = async (req, res) => {
    try {
        const { id } = req.data;
        const result = await propertyService.updatePropertyById(id);
        return res.status(200).json({
            data: `Updated property, ${result}`,
            message: `property ${id} updated successfully`
        })
    } catch (error) {
        res.status(500).json({ message: "Failed to update property" })
    }
}

const DeletePropertyById = async (req, res) => {
    try {
        const { id } = re.data;
        const result = await propertyService.deletePropertyById(id);
        return res.status.json({
            data: `Deleted Property, ${result}`,
            message: `Property ${id} deleted successfully`
        })
    } catch (error) {

    }
}

const GetAvailableRoomsByPropertyId = async (req, res) => {

    const { id } = req.params;
    const { guests, start, end } = req.query;
    try {
        const rooms = await propertyService.getAvailabilRoomsById({
            propertyId: id,
            guests,
            start,
            end
        });

        return res.status(200).json({ rooms });
    } catch (err) {
        console.error("Error:", err.message);
        return res.status(err.message === "Property not found" ? 404 : 500).json({
            message: err.message
        });
    }
}
export default {
    CreateProperty,
    GetAllProperty,
    UpdatePropertyById,
    DeletePropertyById,
    GetAvailableRoomsByPropertyId,
}