const express = require("express");
const routes = express.Router();

const MailController = require("./controllers/MailController");

routes.get('/sendmail', MailController.sendmail);

module.exports = routes;