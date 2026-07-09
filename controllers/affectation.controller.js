const { Affectation, Arbitre, Match } = require("../models");

exports.createAffectation = async (req, res, next) => {
    try {
        const affectation = await Affectation.create(req.body);
        res.status(201).json(affectation);
    } catch (err) {
           if(err.name==="SequelizeUniqueConstraintError"){

            return res.status(400).json({
                message:"Cette affectation existe déjà"
            });

        }
        next(err);
    }
};

exports.getAllAffectations = async (req, res, next) => {
    try {
        const affectations = await Affectation.findAll({
            include: [
                {
                    model: Arbitre
                },
                {
                    model: Match
                }
            ]
        });
        res.status(200).json(affectations);
    } catch (err) {
        next(err);
    }
};

exports.getAffectationById = async (req, res, next) => {
    try {
        const affectation = await Affectation.findByPk(req.params.id, {
            include: [
                {
                    model: Arbitre
                },
                {
                    model: Match
                }
            ]
        });

        if (!affectation) {
            return res.status(404).json({
                message: "Affectation introuvable"
            });
        }

        res.status(200).json(affectation);

    } catch (err) {
        next(err);
    }
};

exports.updateAffectation = async (req, res, next) => {
    try {
        const affectation = await Affectation.findByPk(req.params.id);

        if (!affectation) {
            return res.status(404).json({
                message: "Affectation introuvable"
            });
        }

        await affectation.update(req.body);

        res.status(200).json(affectation);

    } catch (err) {
        next(err);
    }
};

exports.deleteAffectation = async (req, res, next) => {
    try {
        const affectation = await Affectation.findByPk(req.params.id);

        if (!affectation) {
            return res.status(404).json({
                message: "Affectation introuvable"
            });
        }

        await affectation.destroy();

        res.status(200).json({
            message: "Affectation supprimée"
        });

    } catch (err) {
        next(err);
    }
};