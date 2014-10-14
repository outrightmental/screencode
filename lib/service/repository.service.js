/**
 * Screencode™
 *
 * @author Nick Kaye <nick.c.kaye@gmail.com>
 * @laboratory Outright Mental Inc.
 * @code https://github.com/outrightmental/screencode
 *
 * Copyright (c) 2014 Outright Mental Inc.
 * Licensed under the MIT license.
 */

// vendor dependencies
var git = require('gitty');
var cli = require('cli');

// application components
var ui = require('../interface/screencode.interface');

/**
 * Base path to Git repository
 * @type {String|null}
 * @private
 */
var base_path = null;

/**
 * Git Repository
 * @type {Repository}
 */
var repository = null;

/**
 * Determine the base path to the Git repository.
 * @returns String
 */
function determineBasePathToRepository() {
  base_path = process.cwd();
  return base_path;
}

/**
 * Finds and initializes the Git Repository
 * @returns {Repository}
 */
function initializeRepository() {
  if (getBasePath() === null) return null;
  repository = git(getBasePath());
  cli.spinner(ui.message.locating_repository + '..');
  while(!repository._ready){
    // do nothing
  };
  cli.spinner(ui.message.locating_repository + '..' + ui.message.done + '!', true); //End the spinner
  console.log(repository);
  repository.status(function (err, status) {
    if (err) return console.log('Error:', err);
  });
  return repository;
}

/**
 * Get Base Path
 * @returns {String|null}
 */
function getBasePath() {
  return base_path || determineBasePathToRepository();
}

/**
 * Get Repository
 * @returns {Repository}
 */
function getRepository() {
  return repository || initializeRepository();
}

/**
 * Is the Repository OK?
 * @returns {boolean}
 */
function isOK() {
  return getRepository() !== null;
}

/**
 * Repository Service
 * @type {*}
 */
module.exports = {
  isOK: isOK,
  getBasePath: getBasePath,
  getRepository: getRepository
};