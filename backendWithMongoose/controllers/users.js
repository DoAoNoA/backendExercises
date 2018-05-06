const users = require('../models/users');

module.exports = {
    index: async (req, res, next) => {
        try{
            const user = await users.find({});
            res.status(200).json(user); 
        }catch (e){
            console.log(e);
        }           
    }
};