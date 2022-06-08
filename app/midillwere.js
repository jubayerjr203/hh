const cors = require("cors");
const express = require("express");
const morgan = require("morgan");
const medelwere = [morgan("dev"), cors(), express.json()];
module.exports = medelwere;
