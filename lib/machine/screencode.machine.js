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

var machina = require('machina');
var cli = require('cli');
var ui = require('../interface/screencode.interface');

module.exports = new machina.Fsm({

  initialState: "offline",

  states: {
    /**
     * CLI begins offline, then immediately syncs.
     */
    "offline": {
      _onEnter: function () {
        ui.show.banner();
        ui.show.loading(1,function(){
          ui.show.done();
        });
      }
      // nothing to do
    },
    "sync": {
      _onEnter: function () {
        this.handle("repo.sync");
      },
      "repo.sync": function () {
        cli.info('Synchronizing with repository..');
        // TODO: begin synchronization
      }
    }
  }

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