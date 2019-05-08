const db = require('../')

module.exports = {
    find: function (id) {
        const query = db('users')
        return id ? query.where({ id }).first : query
    },

    findBy: function (col) {
        return db('users').where(col)
    },

    post: async function (user) {
        const [id] = await db('users').insert(user);
        return id
    }
}
