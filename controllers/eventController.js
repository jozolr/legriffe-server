import eventSchema from '../models/eventsSchema';
import placesSchema from "../models/placesSchema";
import _ from "lodash";

exports.postEvent = async (req, res) => {
    const event = new eventSchema(req.body);
    const data = await event.save();
    res.send({"success": true, "data": data});
};

exports.listEvents = async (req, res) => {
    let eventsList = await eventSchema.find().sort({'createdAt': -1}).exec();
    let placesList = await placesSchema.find().sort({'createdAt': -1}).exec();
    let eventsListWithPlace = [];
    _.each(eventsList, event => {
        eventsListWithPlace.push({
            name: event.name,
            date: event.date,
            place: _.find(placesList, {_id: event.place})
        });
    });

    res.send({"success": true, "data": eventsList})
};

exports.listAllEventForOnePlace = async (req, res) => {
    const listEvents = await eventSchema.find({"place": req.params.placeId}).exec();
    res.send({"success": true, "data": listEvents})
};

exports.deleteEventId = async (req, res) => {
    const event = await eventSchema.remove({'_id': req.body._id}).exec();
    event.result.n === 1 ? res.send({
        "success": true,
        "message": "Place successfully delete"
    }) : res.send({"success": false}).status(404)
};