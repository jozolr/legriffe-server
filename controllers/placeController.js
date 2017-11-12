import placeSchema from '../models/placesSchema';

exports.insertPlace = async (req, res) => {
    try {
        const placeObject = new placeSchema(req.body);
        const insert = await placeObject.save();
        res.send({"success": true, "data": insert}).status(200)
    } catch(e) {
        res.send({"success": false, "Error": e}).status(500)
    }
};

exports.getPlaces = async(req, res) => {
    try {
        const data = await placeSchema.find().exec();
            res.send({"success": true, "data": data})
    } catch(e) {
        res.send({"success": false, "Error": e}).status(500)
    }
};

exports.updatePlace = async (req, res) => {
    try {
    const updatePlace = await placeSchema.update({'_id': req.body._id}, req.body).exec();
    updatePlace.nModified === 1 ? res.send({ "success": true }) : res.send({ "success": false }).status(404)
    } catch(e) {
        res.send({"success": false, "Error": e}).status(500)
    }
};

exports.deletePlace = async (req, res) => {
    try {
        const removeObjectId = await placeSchema.remove({'_id': req.body._id}).exec();
        removeObjectId.result.n === 1 ? res.send({"success": true, "message":"Place successfully delete"}) : res.send({"success": false}).status(404)
    } catch(e) {
        res.send({"success": false, "Error": e}).status(500)
    }
};

