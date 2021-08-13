const jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');

module.exports = {
  renderHomePage: renderHomePage,
  renderAboutPage: renderAboutPage,
  renderClassPage: renderClassPage,
  renderContactPage: renderContactPage,
  renderBlogPage: renderBlogPage,
  renderGalleryPage: renderGalleryPage,
  renderSinglePage: renderSinglePage,
  renderTeamPage: renderTeamPage
};

/**
* @name renderHomePage
* @param  {object} req HTTP request
* @param  {object} res HTTP response
*/
function renderHomePage(req, res) {
  res.render("index");
}

/**
* @name renderAboutPage
* @param  {object} req HTTP request
* @param  {object} res HTTP response
*/
function renderAboutPage(req, res) {
  res.render("about");
}

/**
* @name renderClassPage
* @param  {object} req HTTP request
* @param  {object} res HTTP response
*/
function renderClassPage(req, res) {
  res.render("class");
}

/**
* @name renderContactPage
* @param  {object} req HTTP request
* @param  {object} res HTTP response
*/
function renderContactPage(req, res) {
  res.render("contact");
}

/**
* @name renderBlogPage
* @param  {object} req HTTP request
* @param  {object} res HTTP response
*/
function renderBlogPage(req, res) {
  res.render("blog");
}

/**
* @name renderGalleryPage
* @param  {object} req HTTP request
* @param  {object} res HTTP response
*/
function renderGalleryPage(req, res) {
  res.render("gallery");
}

/**
* @name renderSinglePage
* @param  {object} req HTTP request
* @param  {object} res HTTP response
*/
function renderSinglePage(req, res) {
  res.render("single");
}

/**
* @name renderTeamPage
* @param  {object} req HTTP request
* @param  {object} res HTTP response
*/
function renderTeamPage(req, res) {
  res.render("team");
}
