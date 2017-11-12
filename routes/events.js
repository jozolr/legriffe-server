const express = require('express');
const router = express.Router();
const event = require('../controllers/eventController');

router.get('/', function(req, res) {
    res.send('Birds home page');
});

router.post('/api/post/event', event.postEvent);
router.get('/api/get/events', event.listEvents);
router.get('/api/get/events/:placeId', event.listAllEventForOnePlace);
router.delete('/api/delete/event', event.deleteEventId);

module.exports = router;
