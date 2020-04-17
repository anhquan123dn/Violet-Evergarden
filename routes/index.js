var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", (req, res) => {
  res.set("Cache-Control", "public, max-age=31,536,000, s-maxage=31,536,000");
  res.render("homepage");
});

module.exports = router;
