const { Match, Arbitre } = require("../models");

exports.createMatch = async (req, res, next) => {
    try {
        const match = await Match.create(req.body);
        res.status(201).json(match);
    } catch (err) {
        next(err);
    }
};

exports.getAllMatchs = async (req, res, next) => {
    try {
        const matchs = await Match.findAll({
        include:[
            {
                model:Arbitre
            }
        ]
    });
        res.status(200).json(matchs);
    } catch (err) {
        next(err);
    }
};

exports.getMatchById = async (req, res, next) => {
    try {
        const match = await Match.findByPk(req.params.id , {

            include:[
            {
                model:Arbitre
            }
        ]
    });

        if (!match) {
            return res.status(404).json({
                message: "Match introuvable"
            });
        }

        res.status(200).json(match);

    } catch (err) {
        next(err);
    }
};

exports.updateMatch = async (req, res, next) => {
    try {
        const match = await Match.findByPk(req.params.id);

        if (!match) {
            return res.status(404).json({
                message: "Match introuvable"
            });
        }

        await match.update(req.body);

   res.status(200).json(match);

    } catch (err) {
        next(err);
    }
};

exports.deleteMatch = async (req, res, next) => {
    try {
        const match = await Match.findByPk(req.params.id);

        if (!match) {
            return res.status(404).json({
                message: "Match introuvable"
            });
        }

        await match.destroy();

        res.status(200).json({
            message: "Match supprimé"
        });

    } catch (err) {
        next(err);
    }
};

exports.getMatchArbitres = async (req, res, next) => {
    try {

        const match = await Match.findByPk(req.params.id, {
            include: [
                {
                    model: Arbitre
                }
            ]
        });

        if (!match) {
            return res.status(404).json({
                message: "Match introuvable"
            });
        }

        res.status(200).json(match);

    } catch (err) {
        next(err);
    }
};