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

async function getUserByID(req, res) {
    const { id } = req.params;

    console.log(id);
    try {
        const user = await UserModel.getUserByID(id);
        res.json(user);
    } catch(error){
        res.status(500).send(error);
    }
}

async function createUser(req, res){
    const user = req.body;
    console.log(user);
    try {
        const newUser = await UserModel.createUser(user);
        res.json(newUser);
    } catch (error) {
        res.status(500).send(error);
        console.log(error);
    }
}

async function updateUser(req, res){
    const { id } = req.params
    const user = req.body;
    console.log(user);
    try {
        const updateUser = await UserModel.updateUser(id, user);
        res.json(updateUser);
    } catch (error) {
        res.status(500).send(error);
        console.log(error);
    }
}

module.exports = { getAllUsers, getUserByID, createUser, updateUser };