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

module.exports = { getDescriptionByID };