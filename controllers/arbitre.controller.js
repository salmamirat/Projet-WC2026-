const { Arbitre, Match } = require("../models");

exports.createArbitre = async (req, res, next) => {
    try {
        const arbitre = await Arbitre.create(req.body);
        res.status(201).json(arbitre);
    } catch (err) {
        next(err);
    }
};

exports.getAllArbitres = async (req, res, next) => {
    try {
const arbitres = await Arbitre.findAll({
    include: [{ model: Match }]
});
res.status(200).json(arbitres);
 
    } catch (err) {
        next(err);
    }
};

exports.getArbitreById = async (req, res, next) => {
    try {
        const arbitre = await Arbitre.findByPk(req.params.id,{
                       include: [
                {
                    model: Match
                }
            ]
        });

        if (!arbitre) {
            return res.status(404).json({
                message: "Arbitre introuvable"
            });
        }

        res.status(200).json(arbitre);

    } catch (err) {
        next(err);
    }
};

exports.updateArbitre = async (req, res, next) => {
    try {
        const arbitre = await Arbitre.findByPk(req.params.id);

        if (!arbitre) {
            return res.status(404).json({
                message: "Arbitre introuvable"
            });
        }

        await arbitre.update(req.body);

       res.status(200).json(arbitre);

    } catch (err) {
        next(err);
    }
};

exports.deleteArbitre = async (req, res, next) => {
    try {
        const arbitre = await Arbitre.findByPk(req.params.id);

        if (!arbitre) {
            return res.status(404).json({
                message: "Arbitre introuvable"
            });
        }

        await arbitre.destroy();

        res.status(200).json({
            message: "Arbitre supprimé"
        });

    } catch (err) {
        next(err);
    }
};

exports.getArbitreMatchs = async (req, res, next) => {
    try {
        const arbitre = await Arbitre.findByPk(req.params.id, {
            include: [
                {
                    model: Match
                }
            ]
        });

        if (!arbitre) {
            return res.status(404).json({
                message: "Arbitre introuvable"
            });
        }

        res.status(200).json(arbitre);

    } catch (err) {
        next(err);
    }
};   