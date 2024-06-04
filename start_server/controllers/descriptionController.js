const descriptionModel = require("../models/descriptionModel");

async function getDescriptionByID(req, res) {
    const { id } = req.params;
    try {
        const description = await descriptionModel.getDescriptionByID(id);
        res.status(200).json(description);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

async function getPrescriptionByID(req, res) {
    const { id } = req.params;
    try {
        const prescription = await descriptionModel.getPrescriptionByID(id);
        res.status(200).json(prescription);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

async function createDescription(req, res) {
    try {
        const {userId} = req.params;
        const {description, prescription} = req.body;
        const newDescription = await descriptionModel.createDescription(description, prescription, userId);
        res.status(201).json(newDescription);
    } catch (error){
        console.log(error);
        res.status(500).send(error);
    }
}

module.exports = { getDescriptionByID, createDescription, getPrescriptionByID };