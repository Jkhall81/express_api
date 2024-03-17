const { Router } = require("express");
const pool = require("../db");

const router = Router();

router.get("/", (req, res, next) => {
  pool.query("select * from lives", (err, response) => {
    if (err) return next(err);

    res.json(response.rows);
  });
});

router.get("/conditions", (req, res, next) => {
  pool.query(
    "select * from lives join habitats on lives.habitat = habitats.name",
    (err, response) => {
      if (err) return next(err);

      res.json(response.rows);
    }
  );
});

module.exports = router;
