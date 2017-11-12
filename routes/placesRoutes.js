const express = require('express');
const router = express.Router();
const places = require('../controllers/placeController');


router.post('/api/post/place', places.insertPlace);
router.get('/api/get/places', places.getPlaces);
router.delete('/api/delete/place', places.deletePlace);
router.put('/api/put/place', places.updatePlace);

module.exports = router;
