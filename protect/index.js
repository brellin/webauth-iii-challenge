const jwt = require('jsonwebtoken')
const secret = 'secret'

module.exports = (req, res, next) => {
    const token = req.headers.authorization

    jwt.verify(token, secret, (err, decodedToken) => {
        if (err) {
            console.log(err)
            res.status(401).json(err)
        } else {
            req.decodedToken = decodedToken
            next()
        }
    })
}