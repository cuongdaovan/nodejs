const User = require('../models').User

module.exports = {
    list(req, res) {
        return User
            .findAll()
            .then(users => res.status(200).send(users));
    },
};
console.log(module)