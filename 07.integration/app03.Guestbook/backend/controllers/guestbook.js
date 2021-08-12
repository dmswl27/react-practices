const model = require('../models/guestbook');

module.exports = {
    readAllMessage: async function(req, res, next) {
        try {
            const results = await model.findAllMessages();
            res
                .status(200)                
                .send({
                    result: 'success',
                    data: results,
                    message: null
                });
        } catch(err){
          next(err);
        }       
    },
    createMessage: async function(req, res, next){
        try {
            const message = req.body;

            // await model.insertTask(...) 성공했다 치고
            message.no = Date.now();
            res
                .status(200)
                .send({
                    result : "success",
                    data:task,
                    message: null
                })    
        } catch (error) {
            next(error);
        }
        
    }  
}
