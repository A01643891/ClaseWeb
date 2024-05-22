const { db } = require('../config/db');

const getFeedbackByID = async(id) =>{
    try {
        const query = 'SELECT U.name, f.feedback FROM users U JOIN feedback f ON U.id = f.user_id WHERE U.id = $1;';
        const { rows } = await db.query(query, [id]);
        return rows;
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

module.exports = { getFeedbackByID };