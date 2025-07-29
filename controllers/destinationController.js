import destinationService from "../services/destination.service.js";

const CreateDestination = async (req, res) => {
    try {
        const { data } = req.body;
        if (!data) throw new Error("Data is not available");
        const result = await destinationService.createDestination(data);
        res.status(200).json({
            message: "Destination Created Successfully",
            destination: result
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Destination not created"
        })
    }
};

const GetAllDestination = async (req, res) => {
    try {
        const { search="", checkIn, checkOut, location, adults = 0, children = 0, rooms = 1 } = req.query;

        const guests = {
            adults: parseInt(adults),
            children: parseInt(children),
            rooms: parseInt(rooms)
        };

        const properties = await destinationService.getAlldestination({
            search,
            checkIn,
            checkOut,
            guests,
            location
        });
    
        res.status(200).json(properties);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }

}

const UpdateDestinationById = async (req, res) => {
    try {
        const { id } = req.data;
        const result = await destinationService.updateDestinationById(id);
        return res.status(200).json({
            data: `Updated destination, ${result}`,
            message: `Destination ${id} updated successfully`
        })
    } catch (error) {
        res.status(500).json({ message: "Failed to update Destination" })
    }
}

const DeleteDestinationById = async (req, res) => {
    try {
        const { id } = re.data;
        const result = await destinationService.deleteDestinationById(id);
        return res.status.json({
            data: `Deleted destination, ${result}`,
            message: `Destination ${id} deleted successfully`
        })
    } catch (error) {

    }
}
export default {
    CreateDestination,
    GetAllDestination,
    UpdateDestinationById,
    DeleteDestinationById
}