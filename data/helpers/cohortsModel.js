const db = require("../dbConfig");

module.exports = {
  find,
  findById,
  findStudentsById,
  insert,
  update,
  remove
};

// ==== NOTE on Cohorts table:  cohorts_id
// ==== NOTE on Students table: cohort_id

function find() {
  return db("cohorts");
}

function findById(id) {
  return db("cohorts")
    .where({ cohorts_id: Number(id) }) // id field on table is 'cohorts_id' not 'id'
    .first();
}

function findStudentsById(id) {
  return db("cohorts as c")
    .join("students as s", "s.cohort_id", "c.cohorts_id") // cohort_id AND cohorts_id
    .select("c.cohorts_id", "c.name", "s.name as StudentName")
    .where({ cohorts_id: Number(id) });
}

function insert(cohort) {
  return db("cohorts")
    .insert(cohort)
    .then(ids => ({ cohorts_id: ids[0] }));
}

function update(id, cohort) {
  return db("cohorts")
    .where({ cohorts_id: Number(id) })
    .update(cohort);
}
function remove(id) {
  return db("cohorts")
    .where({ cohorts_id: Number(id) })
    .del();
}
