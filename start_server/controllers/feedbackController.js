const feedbackModel = require("../models/feedbackModel");

async function getFeedbackByID(req, res) {
    const { id } = req.params;
    try {
        const feedback = await feedbackModel.getFeedbackByID(id);
        res.status(200).json(feedback);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

async function createFeedback(req, res) {
    
    try{
        const { feedback } = req.body;
        const { userId } = req.params;
        const newFeedback = await feedbackModel.createFeedback(feedback, userId);
        res.status(201).json(newFeedback);
    }catch (error){
        console.log(error);
        res.status(500).send(error);
    }

}

module.exports = { getFeedbackByID, createFeedback };