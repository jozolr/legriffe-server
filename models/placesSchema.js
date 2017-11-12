const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const placeSchema = new Schema({
    name: {
        type: String
    },
    lat: {
        type: String
    },
    long: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});
export default mongoose.model('Place', placeSchema);