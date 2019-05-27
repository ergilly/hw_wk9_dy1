var express = require("express");
var router = express.Router();
const MongoHelper = require("../db/mongo_helper.js");

/* GET users listing. */
router.get("/", function(req, res, next) {
  MongoHelper.get("customer").then(results => {
    res.status(200).json(results);
  });
});

// create a new post
router.post("/", function(req, res) {
  MongoHelper.create("customer", req.body).then(results => {
    res.status(201).json("New customer created");
  });
});

/* Update a posts */
router.put("/:id", function(req, res) {
  MongoHelper.update("customer", req.params.id, req.body).then(results => {
    res.status(200).json("Customer updated");
  });
});

/* Delete a posts */
router.delete("/:id", function(req, res) {
  MongoHelper.delete("customer", req.params.id).then(results => {
    res.status(204).json("Customer deleted");
  });
});

router.post("/:id/accounts", function(req, res) {
  MongoHelper.addAccount("customer", req.params.id, req.body).then(
    results => {
      res.status(201).json("New account created");
    }
  );
});



module.exports = router;
