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

module.exports = cohortsRouter;
