#! /usr/bin/env node

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

var _cli = require('cli').enable('version', 'status');
var _options = _cli.parse();
var _machine = require('./machine/screencode.machine.js');

/**
 * Exports
 * @type {*}
 */
module.exports = {
  cli: _cli,
  options: _options,
  machine: _machine
};

