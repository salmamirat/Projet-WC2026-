const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Arbitre = sequelize.define("Arbitre", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nom: {
        type: DataTypes.STRING,
        allowNull: false
    },
    prenom: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nationalite: {
        type: DataTypes.STRING,
        allowNull: false
    },
    confederation: {
        type: DataTypes.ENUM(
            "CAF",
            "UEFA",
            "AFC",
            "CONMEBOL",
            "OFC",
            "CONCACAF"
        ),
        allowNull: false
    },
    categorie: {
        type: DataTypes.ENUM(
            "Referee",
            "Assistant",
            "Fourth Official",
            "VAR",
            "AVAR",
        ),
        allowNull: false
    },
    experience: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    statut: {
        type: DataTypes.ENUM(
            "actif",
            "suspendu",
            "blesse",
            "retraite"
        ),
        allowNull: false
    }
},
    {
        tableName: "arbitres",
        timestamps: true,
    });

module.exports = Arbitre;