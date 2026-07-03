const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Affectation = sequelize.define("Affectation", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    arbitreId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "arbitres",
            key: "id"
        }
    },

    matchId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "matchs",
            key: "id"
        }
    },
    role: {
        type: DataTypes.ENUM(
            "central",
            "assistant",
            "VAR",
            "AVAR",
            "4e"
        ),
        allowNull: false
    }
},
    {
        tableName: "affectations",
        timestamps: true,
        indexes: [
            {
                unique: true,
                fields: ["arbitreId", "matchId", "role"]
            },
            {
                fields: ["arbitreId"]
            },
            {
                fields: ["matchId"]
            }
        ]
    });
module.exports = Affectation;