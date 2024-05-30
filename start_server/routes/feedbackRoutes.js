const express = require('express');
const router = express.Router();
const feedbackController = require('../controllers/feedbackController');

router.get('/:id', feedbackController.getFeedbackByID);
router.post('/:userId', feedbackController.createFeedback);

module.exports = router;