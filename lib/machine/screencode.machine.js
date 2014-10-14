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

// constants
var COMMAND_INIT = 'init';
var COMMAND_SYNC = 'sync';
var COMMAND_AUTO = 'auto';

// options
var _options = {

};

// commands
var _commands = [
  COMMAND_INIT,
  COMMAND_SYNC,
  COMMAND_AUTO
];

// application components
var ui = require('../interface/screencode.interface');

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
        this.command = cli.command || 'auto';
        this.handle('command' + '.' + this.command);
      },
      'command.init': function () {
        this.transition('init');
      },
      'command.sync': function () {
        this.transition('sync');
      },
      'command.auto': function () {
        this.transition('auto');
      }
      // nothing to do
    },
    'sync': {
      _onEnter: function () {
        this.handle('sync.repo');
      },
      'sync.repo': function () {
        cli.info('Synchronizing with repository..');
        // TODO: Synchronize with repository
        this.transition('done');
      }
    },
    'auto': {
      _onEnter: function () {
        this.handle('auto.discover');
      },
      'auto.discover': function () {
        cli.info('Automatically determining what to do..');
        // TODO: automatically discover what to do
        this.transition('done');
      }
    },
    'init': {
      _onEnter: function () {
        this.handle('init.repo');
      },
      'init.repo': function () {
        cli.info('Initializing a Screencode repository..');
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
  }

  /*

   //SCREENCODE
   ui.show.loading(1,function(){
   });

   */

  /*
   applicationOffline: function () {
   var offline = false;
   // checks window.navigator.online and more, sets the offline value
   return offline;
   },

   verifyState: function (payload) {
   if (applicationOffline() && this.state !== "offline") {
   this.offlineMarkerTime = new Date();
   this.transition("offline");
   return false;
   }
   else if (!applicationOffline() && this.state === "offline") {
   this.transition("online");
   return false;
   }
   return true;
   },

   initialState: "offline",

   states: {
   "online": {
   _onEnter: function () {
   this.handle("sync.customer");
   },

   "save.customer": function (payload) {
   if (verifyState()) {
   storage.saveToRemote(payload);
   }
   },

   "sync.customer": function () {
   if (verifyState(payload)) {
   var unsynced = storage.getFromLocal({ startTime: this.offlineMarkerTime });
   // Big assumption here!  In the real world,
   // we'd batch this sync in reasonable chunks.
   storage.saveBatchToRemote(unsynced);
   this.emit("CustomerSyncComplete", { customers: unsynced });
   }
   }
   },

   "offline": {
   "save.customer": function (payload) {
   if (verifyState()) {
   storage.saveToLocal(payload);
   }
   }
   }
   }
   */

});