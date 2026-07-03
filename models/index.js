const Affectation = require("./affectation.model");
const Arbitre = require("./arbitre.model");
const Match = require("./match.model");

Arbitre.belongsToMany(Match,{
    through:Affectation,
    foreignKey:"arbitreId",
    otherKey: "matchId"
});

Match.belongsToMany(Arbitre,{
    through:Affectation,
    foreignKey:"matchId",
    otherKey: "arbitreId"
});

Affectation.belongsTo(Arbitre, {
    foreignKey: "arbitreId",
});

Arbitre.hasMany(Affectation, {
    foreignKey: "arbitreId",
});

Affectation.belongsTo(Match, {
    foreignKey: "matchId",
});

Match.hasMany(Affectation, {
    foreignKey: "matchId",
});

module.exports = { Arbitre, Match, Affectation };
