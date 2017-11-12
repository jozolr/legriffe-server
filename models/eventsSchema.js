const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    name: {
        type: String,
    },
    date: {
        type: Date
    },
    place: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Place'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model('Event', eventSchema);