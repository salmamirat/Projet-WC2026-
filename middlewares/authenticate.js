const jwt = require("jsonwebtoken");

exports.autenticate =(req,res,next)=>{
    const authHeader = req.headers.authorization;
    if(!authHeader){
        return res.status(401).json({
            message : "Token manquant"
        });
    }
    const token = authHeader.split("")[1];
    try{
        const decoded = jwt.verify(
            token,
            process.envJWT_SECRET
        );
        req.auth = decoded;
        next();
    }catch (err){
        return res.status(401).json({
            message:"Token invalide"
        });
    }
};