const route = require("express").Router();
const Transactions = require("../database/modles").Transactions;

route.get('/all', (req, res) => {
    getAllTransactions().then(data => res.send(data));
});

route.get('/id', (req, res) => {
    getTransactionsById(req.query.id).then(data => res.send(data))
});

route.get('/name', (req, res) => {
    getTransactionsByName(req.query.name).then(data => res.send(data));
});

route.post('/', (req, res) => {
    addTransaction(req.body.name, req.body.amount).then(data => res.send(data));
});

route.put('/id/:id', (req, res) => {
    updateTransactionAmount(req.params.id, req.body.amount).then(data => res.send(data));
});

route.put('/name/:name', (req, res) => {
    updateTransactionsName(req.params.name, req.body.name).then(data => res.send(data));
});

route.delete('/id/:id', (req, res) => {
    deleteTransactionById(req.params.id).then(deletedTransaction => res.send(deletedTransaction));
});

route.delete('/name/:name', (req, res) => {
    deleteTransactionByName(req.params.name).then(deletedTransactions => res.send(deletedTransactions));
});

function getAllTransactions() {
    return Transactions.findAll();
}

function getTransactionsByName(name) {
    return Transactions.findAll({where: {name: name}});
}

function getTransactionsById(id) {
    return Transactions.findOne({where: {id: id}});
}

function addTransaction(name, amount) {
    return Transactions.create({name: name, amount: amount});
}

function updateTransactionAmount(id, amount) {
    return new Promise((resolve, reject) => {
        Transactions.update({amount: amount}, {where: {id: id}})
            .then(() => Transactions.findOne({where: {id: id}}))
            .then(result => resolve(result))
    })
}

function updateTransactionsName(oldName, newName) {
    return new Promise((resolve, reject) => {
        Transactions.update({name: newName}, {where: {name: oldName}})
            .then(() => Transactions.findAll({where: {name: newName}}))
            .then(data => resolve(data));
    })
}

function deleteTransactionById(id) {
    return new Promise((resolve, reject) => {
        let deletedTransaction;
        Transactions.findOne({where: {id: id}})
            .then(data => {
                deletedTransaction = data;
                return Transactions.destroy({where: {id: id}})
            })
            .then(() => resolve(deletedTransaction));
    })
}

function deleteTransactionByName(name) {
    return new Promise((resolve, reject) => {
        let deletedTransactions;
        Transactions.findAll({where: {name: name}})
            .then(data => {
                deletedTransactions = data;
                return Transactions.destroy({where: {name: name}})
            })
            .then(() => resolve(deletedTransactions));
    })
}

exports.route = route;