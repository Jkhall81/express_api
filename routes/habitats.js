const { Router } = require("express");
const pool = require("../db");

const router = Router();

router.get("/", (req, res, next) => {
  pool.query("select * from habitats order by id asc", (err, result) => {
    if (err) return next(err);

    res.json(result.rows);
  });
});

module.exports = router;
