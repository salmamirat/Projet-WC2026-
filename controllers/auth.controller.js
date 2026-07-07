const bcrypt = require ("bcrypt");
const jwt = require("jsonwebtoken");
const { User } = require("../models");

exports.register = async(req, res)=>{
    try{
        const {nom, email, passeword, role} = req.body ;
        const existingUser = await User.findOne({
            where :{email}
        });
        if (existingUser){
            return res.status(400).json({
                message: "Email déjà utilisé"
            })
        }
    }
}