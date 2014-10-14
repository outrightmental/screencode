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
var machina = require('machina');
var cli = require('cli');
var exit = require('exit');

// spy CLI exit function; add blank line
cli.exit = function () {
  cli.output('\n');
  exit();
};

// options
var _options = {

};

// commands
var _commands = [
  'create',
  'sync'
];

// application components
var ui = require('../interface/screencode.interface');
var repository = require('../service/repository.service');

/**
 * // Finite State Machine (FSM)
 * @type {machina.Fsm}
 */
module.exports = new machina.Fsm({

  options: {},

  command: '',

  initialState: 'spawn',

  states: {
    /**
     * CLI begins offline, then immediately syncs.
     */
    'spawn': {
      _onEnter: function () {
        ui.show.banner();
        this.options = cli.parse(_options, _commands);
        this.command = cli.command;
        this.handle('command' + '.' + this.command);
      },
      'command.init': function () {
        this.transition('create');
      },
      'command.sync': function () {
        this.transition('sync');
      }
      // nothing to do
    },
    'sync': {
      _onEnter: function () {
        if (this.isRepository())
          this.handle('sync.repo');
        else
          this.handle('fail', {message: ui.message.cant_sync + ' - ' + ui.message.not_a_screencode_repository + '!'});
      },
      'sync.repo': function () {
        cli.info(ui.message.synchronizing_with_repository + '..');
        // TODO: Synchronize with repository
        this.transition('done');
      },
      'fail': function (payload) {
        ui.show.fail(payload.message);
        exit(1);
      }
    },
    'auto': {
      _onEnter: function () {
        this.handle('auto.discover');
      },
      'auto.discover': function () {
        cli.info(ui.message.automatically_determining_what_to_do + '..');
        // TODO: automatically discover what to do
        this.transition('done');
      }
    },
    'init': {
      _onEnter: function () {
        this.handle('init.repo');
      },
      'init.repo': function () {
        cli.info(ui.message.initializing_a_screencode_repository + '..');
        // TODO: Initialize a Screencode repository
        this.transition('done');
      }
    },
    'done': {
      _onEnter: function () {
        this.handle('done.exit');
      },
      'done.exit': function () {
        ui.show.done();
        exit();
      }
    }
  },

  /**
   * Is a Repository?
   */
  isRepository: function () {
    return repository.isOK();
  }

});