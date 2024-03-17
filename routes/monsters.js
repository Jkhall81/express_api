const { Router } = require("express");
const router = Router();
const pool = require("../db");

router.get("/", (req, res, next) => {
  pool.query(`select * from monsters`, (err, result) => {
    if (err) {
      return next(err);
    }
    res.json(result.rows);
  });
});

router.get("/:id", (request, response, next) => {
  const { id } = request.params;

  pool.query(`select * from monsters where id = $1`, [id], (err, res) => {
    if (err) return next(err);

    response.json(res.rows);
  });
});

router.post("/", (req, res, next) => {
  const { name, personality } = req.body;

  pool.query(
    "insert into monsters(name, personality) values($1, $2)",
    [name, personality],
    (err, result) => {
      if (err) {
        return next(err);
      }
      res.redirect("/monsters");
    }
  );
});

router.put("/:id", (req, res, next) => {
  const { id } = req.params;
  const keys = ["name", "personality"];
  const fields = [];

  keys.forEach((key) => {
    if (req.body[key]) fields.push(key);
  });

  fields.forEach((field, index) => {
    pool.query(
      `update monsters set ${field}=($1) where id=($2)`,
      [req.body[field], id],
      (err, result) => {
        if (err) return next(err);

        if (index === fields.length - 1) res.redirect("/monsters");
      }
    );
  });
});

router.delete("/:id", (req, res, next) => {
  const { id } = req.params;

  pool.query("delete from monsters where id=($1)", [id], (err, result) => {
    if (err) return next(err);

    res.redirect("/monsters");
  });
});

module.exports = router;
