#! /usr/bin/env node
/**
 * Screencode
 * https://github.com/outrightmental/screencode
 *
 * Copyright (c) 2014 Outright Mental Inc.
 * Licensed under the MIT license.
 */

var cli = require('cli').enable('version', 'status');
var options = cli.parse();

cli.info('Screencode by Outright Mental Inc.');

/*
 cli.withStdinLines(function(lines, newline) {
 lines.sort(!options.n ? null : function(a, b) {
 return parseInt(a) > parseInt(b);
 });
 if (options.r) lines.reverse();
 this.output(lines.join(newline));
 });
 */

cli.info('Done.');

/**
 * Exports
 * @type {*}
 */
module.exports = {
  cli: cli
};