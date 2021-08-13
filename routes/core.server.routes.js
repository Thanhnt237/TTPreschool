"core.server.routes.js";

/**
* @module routes
* @description
* Define all core routes of applications
*/
"user strict";

var express = require('express');
var router = express.Router();

const coreCtrl = require('../controllers').Core;

  router.route('/').get(coreCtrl.renderHomePage);
  router.route('/about').get(coreCtrl.renderAboutPage);
  router.route('/class').get(coreCtrl.renderClassPage);
  router.route('/contact').get(coreCtrl.renderContactPage);
  router.route('/blog').get(coreCtrl.renderBlogPage);
  router.route('/gallery').get(coreCtrl.renderGalleryPage);
  router.route('/single').get(coreCtrl.renderSinglePage);
  router.route('/team').get(coreCtrl.renderTeamPage)


module.exports = router;
