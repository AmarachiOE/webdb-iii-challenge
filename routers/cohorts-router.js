const cohortsRouter = require("express").Router();
const cohortsDb = require("../data/helpers/cohortsModel.js");


// ============ GET ALL
cohortsRouter.get("/", (req, res) => {
    cohortsDb.find().then(cohorts => {
        res.status(200).json(cohorts);
    }).catch(err => {
        res
          .status(500)
          .json({ error: "The cohorts information could not be retrieved." });
      });
});



module.exports = cohortsRouter;
