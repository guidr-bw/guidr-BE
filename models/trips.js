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

/*
select t.id, t.user_id, t.title, t.shortDescription, t.description, t.isProfessional, t.duration, t.distance, t.date, t.image
from trips as t
innerjoin tripTypes as p
where t.type = p.id


select ('id', "user_id", "title", "shortDescription", "description", "isProfessional", "tripTypes.type","duration", "distance", "date", "image") 
from ('trps')
innerJoin('tripTypes')
where "trips.type" is "tripType.id"
*/
/*

//getTripByTripId
function get(id){
    return db('trips')
    .where( { id })
    .first()
}
*/


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