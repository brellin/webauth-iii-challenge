const router = require('express').Router()
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Users = require('../../data/helpers')

router.post('/register', async (req, res) => {
    let user = req.body
    user.password = bcrypt.hashSync(user.password, 10)
    try {
        const post = await Users.post(user)
        res.status(200).json({
            username: user.username,
            id: post
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({
            error: 'Internal Server Error',
            err
        })
    }
})

router.post('/login', async (req, res) => {
    const { username, password } = req.body

    try {
        await Users.findBy({ username }).first()
            .then(user => {
                if (user && bcrypt.compareSync(password, user.password)) {
                    const token = buildToken(user)
                    res.status(200).json({
                        message: `Welcome, ${user.username}!`,
                        token
                    })
                } else {
                    res.status(401).json({ error: 'Invalid Credentials' })
                }
            })
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})

function buildToken(user) {
    const payload = {
        subject: user.id,
        username: user.username,
    }

    const options = {
        expiresIn: '1h'
    }

    return jwt.sign(payload, require('./secrets').secret, options)
}

module.exports = router
