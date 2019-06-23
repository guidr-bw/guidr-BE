const jwt = require('jsonwebtoken');
const secrets = require('../config/secrets');

module.exports = (req,res,next) => {
    const token = req.headers.authorization;
    if(token) {
        jwt.verify(token, secrets.jwtSecret, (err, decodedToken) => {
            if(err) {
                //invalid token
                res.status(401).json({message : 'You have an invalid token!!!'})
            } else {
                //valid token
                req.user = { username : decodedToken.username, id : decodedToken.subject };
                next();
            }
        })
    } else {
        res.status(400).json({ message: "You do not have a token" })
}
}