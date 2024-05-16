// Este archivo obtiene toda la información de nuestros modelos (queries) y las funciones nos retorna el el request
const UserModel = require('../models/userModel');

async function getAllUsers(req, res){
    try {
        const users = await UserModel.getAllUsers();
        res.json(users);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);

    }
}

module.exports = { getAllUsers };