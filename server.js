require("dotenv").config();

const express = require("express");
const sequelize = require("./config/database");

const arbitreRoutes = require("./routes/arbitre.routes");
const matchRoutes = require("./routes/match.routes");
const affectationRoutes = require("./routes/affectation.routes");

const logger = require("./middlewares/logger.middleware");
const errorHandler = require("./middlewares/error.middleware");


const app = express();

app.use(express.json());

app.use(logger);

app.use("/arbitres", arbitreRoutes);
app.use("/matchs", matchRoutes);
app.use("/affectations", affectationRoutes);

sequelize
.sync()
.then(() => {
    console.log("Database connected");

    app.listen(process.env.PORT, () => {
        console.log(`Server started on port ${process.env.PORT}`);
    });
})
.catch(err => {
    console.log(err);
});

app.use(errorHandler);