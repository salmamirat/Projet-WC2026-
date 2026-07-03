const errorHandler = (err, req, res, next)=>{
    console.error(err);

res.status(err.status || 500).json({
    message:err.message||"Error interne du serveur"
});
};

module.exports = errorHandler;
