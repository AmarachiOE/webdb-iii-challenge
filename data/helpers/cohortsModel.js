const db = require("../dbConfig");

module.exports = {
    find,
    // findById,
    // insert,
    // update,
    // remove
  };

  function find() {
    return db("cohorts");
  }