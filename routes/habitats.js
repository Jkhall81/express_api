const { Router } = require("express");
const pool = require("../db");

const router = Router();

router.get("/", (req, res, next) => {
  pool.query("select * from habitats order by id asc", (err, result) => {
    if (err) return next(err);

    res.json(result.rows);
  });
});

router.post("/", (req, res, next) => {
  const { name, climate, temperature } = req.body;
  pool.query(
    "insert into habitats(name, climate, temperature) values($1, $2, $3)",
    [name, climate, temperature],
    (err, response) => {
      if (err) return next(err);

      res.redirect("/habitats");
    }
  );
});

module.exports = router;
