const mongoose = require("mongoose");
const mg = require("./pass");

const user = mg.userMongo;
const pass = mg.passMongo;
const database = mg.databaseMongo;
const serverName = mg.serverNameMongo;

module.exports = {
    init: () => {
        mongoose
            .connect(
                `mongodb+srv://${user}:${pass}@${serverName}/${database}?retryWrites=true&w=majority`,
                {
                    useNewUrlParser: true,
                    useUnifiedTopology: true,
                    //useFindAndModify: false, // not supported
                    //useCreateIndex: true, // not supported
                }
            )
            .then((res) => console.log(`Connection Succesful ${res}`))
            .catch((err) => console.log(`Error in DB connection ${err}`));
    },
};