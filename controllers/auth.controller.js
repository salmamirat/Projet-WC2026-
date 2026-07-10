const bcrypt = require ("bcrypt");
const jwt = require("jsonwebtoken");
const { User } = require("../models");


exports.register = async(req, res)=>{
    try{
        const {nom, email, password, role} = req.body ;
        const userExist = await User.findOne({
            where :{email}
        });
        if (userExist){
            return res.status(400).json({
                message: "Email déjà utilisé"
            });
        }
        const hashepassword = await bcrypt.hash(password, 10);
        const newuser = await User.create({
            nom,
            email,
            password:hashepassword,
            role
        });
        res.status(201).json({
            id:newuser.id,
            nom:newuser.nom,
            email:newuser.email,
            role:newuser.role
        });
    }catch (err){
        res.status(500).json({
            message:err.message
        });
    }
};


exports.login = async (req,res)=>{
    try{
        const{email, password}= req.body;
        const user = await User.findOne({
            where:{email}
        });
        if(!user){
            return res.status(401).json({
                message:"Email ou mot de passe incorrect"
            });
        }
 const isPasswordValid = await bcrypt.compare(
    password,
    user.password
);

if (!isPasswordValid) {
            return res.status(401).json({
                message:"Email ou mot de passe incorrect"
            });
        }
        const token = jwt.sign(
            {
                id:user.id,
                role:user.role
            },
            process.env.JWT_SECRET,
            {
             expiresIn: process.env.JWT_EXPIRES_IN
            }
        );
        return res.json({
            token
        });
    }catch(err){
        res.status(500).json({
            message: err.message
        });
    }
};
 

exports.me = async(req,res)=>{
    try{
        const user = await User.findByPk(req.auth.id,{
            attributes:{
                exclude:["password"]
            }
             
        });

        if (!user) {
    return res.status(404).json({
        message: "Utilisateur introuvable"
    });
}
      return  res.json(user);
    } catch ( err ) {
        res.status(500).json({
            message:err.message
        });
    }
};