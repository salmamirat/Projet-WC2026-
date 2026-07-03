const validate = (req, res, next)=>{
    const data = req.body;

    for (const key in data){
        if(data[key] === null || data[key] === ""){
            return res.status(400).json({
                message:`${key} est obligatoire`
            });
        }
    }
    next();
};
module.exports = validate;