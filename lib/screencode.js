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

// Command Line Interface (CLI)
var cli = require('cli');
// Plugins
cli.enable('version', 'status');

// Screencode Finite State Machine (FSM)
var machine = require('./machine/screencode.machine.js');

/**
 * Exports
 * @type {*}
 */
module.exports = {
  cli: cli,
  machine: machine
};

