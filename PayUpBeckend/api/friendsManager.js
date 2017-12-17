const route = require("express").Router();
const Friends = require("../database/modles").Friends;

route.get('/all', (req, res) => {
    getAllFriends().then(allFriends => res.send(allFriends));
});

route.post('/', (req, res) => {
    addFriend(req.body.name).then(newFriend => res.send(newFriend));
});

route.put('/:name', (req, res) => {
    updateFriendName(req.params.name, req.body.name).then(newData => res.send(newData));
});

route.delete('/:name', (req, res) => {
    deleteFriend(req.params.name).then(data => res.send(data))
});

function getAllFriends() {
    return Friends.findAll();
}

function addFriend(name) {
    return Friends.create({name: name});
}

function updateFriendName(originalName, newName) {
    return new Promise((resolve, reject) => {
        Friends.update({name: newName}, {where: {name: originalName}})
        .then(() => Friends.findOne({where: {name: newName}}))
            .then(result => resolve(result));
    })

}

function deleteFriend(name) {
    return new Promise((resolve, reject) => {
        let deletedFriend;
        Friends.findOne({where: {name: name}})
            .then(data => {
                deletedFriend = data;
                return Friends.destroy({where: {name: name}})
            })
            .then(() => resolve(deletedFriend));
    })
}

exports.route = route;