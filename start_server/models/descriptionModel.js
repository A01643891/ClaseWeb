const { db } = require('../config/db');

const getAllDescriptions = async() =>{
    const query = 'SELECT * FROM description ORDER BY id ASC;';
    const { rows } = await db.query(query);
    return rows;
}

const getDescriptionByID = async(id) =>{
    try {
        const query = 'SELECT U.name, d.description FROM users U JOIN description d ON U.id = d.user_id WHERE U.id = $1;';
        const { rows } = await db.query(query, [id]);
        return rows;
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

module.exports = { getAllDescriptions, getDescriptionByID };