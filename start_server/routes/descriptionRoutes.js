const express = require('express');
const router = express.Router();
const descriptionController = require('../controllers/descriptionController');

router.get('/:id', descriptionController.getDescriptionByID);

module.exports = router;