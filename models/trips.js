const db = require("../data/dbConfig.js")

module.exports = {
    get,
    getBy,
    insert,
    remove,
    update
}


function get(id){
    return db
    .select ('trips.id', "trips.user_id", "trips.title", "trips.shortDescription", "trips.description", "trips.isProfessional", "tripTypes.type", "trips.duration", "trips.distance", "trips.date", "trips.image") 
    .from('trips')
    .innerJoin('tripTypes', 'trips.type', 'tripTypes.id')
    .where({ 'trips.id' : id })
    .first()
}

//getTripByfilter
function getBy(filter) {
    return db('trips')
    .where(filter)
}

function insert(trip) {
    return db('trips')
    .insert(trip, 'id')
    .then(([id]) => get(id));
}

function remove(id) {
    return db('trips')
    .where( {id} )
    .del();
}

async function update(id, changes) {
    return await db('trips')
    .where({id})
    .update(changes)
    .then(updatedTrip => updatedTrip ? get(id) : null);
}