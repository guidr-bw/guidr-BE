const router = require('express').Router();

const Users = require('../models/users.js');
const verifyToken = require('../middlewares/verifyToken.js');

router.get('/', verifyToken,  (req, res) => {
    Users.get(req.user.id)
    .then( user => {
        user.password = undefined;
        res.status(200).json(user)
    })
    .catch( error => {
        res.status(500).json({ message: "Error connecting to database", error: error.toString()})
    })
})

router.get('/trips', verifyToken, (req, res) => {
    Users.getUserTrips(req.user.id)
    .then( response => {
        res.status(200).json(response)
    })
    .catch( error => {
        res.status(500).json({message: "Error registering", error: error.toString()})
    })
})

//middlewares

function validateId(req, res, next) {
    if(req.params.id) {
        Users.get(req.params.id) 
        .then( user => {
            if(user) {
                next();
            } else {
                res.status(404).json({message: "user not found"})
            }
        })
    } else {
        res.status(500).json({ message: "no user id provided"})
    }
}

function restricted(req, res, next) {
    if(req.params.id == req.user.id) next();
    else {
        res.status(403).json({message: "You have no permission to view these trips"})
    }
}

module.exports = router;