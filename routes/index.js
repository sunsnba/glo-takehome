var express = require("express");

/* GET home page. */
module.exports = function(req, res) {
  res.render("index", { title: "Glo" });
};
