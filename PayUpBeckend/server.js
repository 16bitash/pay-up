const express = require("express");
const path = require("path");
const SERVER = require("./config").SERVER;
const cors = require("cors");

const app = express();

let routes = {
    friends: require("./api/friendsManager").route,
    transactions: require("./api/transactionManager").route
};

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/friends', routes.friends);
app.use('/transactions', routes.transactions);

app.listen(SERVER.PORT, () => {
    console.log("Yo dawg! Server's at http://localhost:" + SERVER.PORT);
});