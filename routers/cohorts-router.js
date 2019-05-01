const cohortsRouter = require("express").Router();
const cohortsDb = require("../data/helpers/cohortsModel.js");

// ============ GET ALL
cohortsRouter.get("/", (req, res) => {
  cohortsDb
    .find()
    .then(cohorts => {
      res.status(200).json(cohorts);
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: "The cohorts information could not be retrieved." });
    });
});

// ============ GET BY ID
cohortsRouter.get("/:id", (req, res) => {
  const cohortId = req.params.id;
  cohortsDb
    .findById(cohortId)
    .then(cohort => {
      if (cohort) {
        res.status(200).json(cohort);
      } else {
        res.status(404).json({ error: "This cohort could not be found." });
      }
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: "This cohort's information could not be retrieved." });
    });
});

// ============ GET STUDENTS BY COHORT ID
cohortsRouter.get("/:id/students", (req, res) => {
  const cohortId = req.params.id;
  cohortsDb
    .findStudentsById(cohortId)
    .then(cohort => {
      if (cohort) {
        res.status(200).json(cohort);
      } else {
        res.status(404).json({ error: "This cohort could not be found." });
      }
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: "This cohort's information could not be retrieved." });
    });
});

// ============ POST
cohortsRouter.post("/", (req, res) => {
  const cohort = req.body;
  if (!cohort || !cohort.name) {
    res.status(400).json({
      error: "You must include a cohort with a name."
    });
  } else {
    cohortsDb
      .insert(cohort, "id")
      .then(cohort => {
        res.status(200).json(cohort);
      })
      .catch(err => {
        res.status(500).json({
          error: "There was an error while saving the cohort to the database"
        });
      });
  }
});

// ============ UPDATE
cohortsRouter.put("/:id", (req, res) => {
  const cohort = req.body;
  const cohortId = req.params.id;
  if (!cohort || !cohort.name) {
    res.status(400).json({
      error: "You must include a cohort with a name."
    });
  } else {
    cohortsDb
      .update(cohortId, cohort)
      .then(count => {
        if (count > 0) {
          res.status(200).json({
            message: `${count} ${count > 1 ? "cohorts" : "cohort"} updated!`
          });
        } else {
          res.status(404).json({ error: "This cohort could not be found." });
        }
      })
      .catch(err => {
        res.status(500).json({
          error:
            "There was an error while updating the cohort from the database"
        });
      });
  }
});

// ============ DELETE
cohortsRouter.delete("/:id", (req, res) => {
  const cohortId = req.params.id;
  cohortsDb
    .remove(cohortId)
    .then(count => {
      if (count > 0) {
        res.status(200).json({
          message: `${count} ${count > 1 ? "cohorts" : "cohort"} deleted!`
        });
      } else {
        res.status(404).json({ error: "This cohort could not be found." });
      }
    })
    .catch(err => {
      res.status(500).json({
        error: "There was an error while updating the cohort from the database"
      });
    });
});
module.exports = cohortsRouter;
