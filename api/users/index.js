const router = require('express').Router()
const Users = require('../../data/helpers')
const protect = require('../../protect')

router.get('/', protect, async (req, res) => {
    try {
        const get = Users.find().then(users => {
            res.json({ users, decodedToken: req.decodedToken })
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({ error: 'Internal Server Error' })
    }
})

module.exports = router
