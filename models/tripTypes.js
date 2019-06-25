const db = require("../data/dbConfig.js")

module.exports = {
    getAll,
    get,
    getBy,
    insert,
    remove,
    update
}

function getAll() {
    return db('tripTypes')
}

function get(id){
    return db('tripTypes')
    .where( { id })
    .first()
}

//get trip types by filter
function getBy(filter) {
    return db('tripTypes')
    .where(filter)
}

function insert(tripType) {
    return db('tripTypes')
    .insert(trip, 'id')
    .then(([id]) => get(id));
}

function remove(id) {
    return db('tripTypes')
    .where( {id} )
    .del();
}

async function update(id, changes) {
    return await db('tripTypes')
    .where({id})
    .update(changes)
    .then(updatedTrip => updatedTrip ? get(id) : null);
}