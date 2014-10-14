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

var cli = require('cli');
var colors = require('colors');

module.exports = {

  /**
   * Show UI
   */
  show: {

    /**
     * Title Banner
     */
    banner: function () {
      cli.output('\n');
      cli.output('   ___ ___ ___ ___ ___ ___ ___ ___ __. ___   \n'.gray.bold);
      cli.output('  |_ -|  _|  _| -_| -_|   |  _| . | . | -_|  \n'.gray.bold);
      cli.output('  |___|___|_| |___|___|_|_|___|___|___|___|  \n'.gray.bold);
      cli.output('\n');
      cli.output('          by Outright Mental Inc.'.gray + '\n\n');
    },

    /**
     * Loading Progress
     * @param total seconds
     * @param done
     */
    loading: function (total, done) {
      var i = 0, interval = setInterval(function () {
        cli.progress(++i / 100);
        if (i >= 100) {
          clearInterval(interval);
          done();
        }
      }, total * 10);
    },

    /**
     * Failure
     */
    fail: function (message) {
      cli.error(colors.bold(message));
      cli.output('\n');
    },

    /**
     * All done!
     */
    done: function () {
      cli.output('\n' + '»'.gray + ' ' + 'Screencode'.bold + ' ' + 'OK'.green.bold + '\n\n');
    }

  },
  /**
   * Messages
   */
  message: {
    automatically_determining_what_to_do: 'Automatically determining what to do',
    cant_sync: 'Can\'t sync',
    done:'Done',
    initializing_a_screencode_repository: 'Initializing a Screencode repository',
    locating_repository: 'Locating repository',
    not_a_screencode_repository: 'Not a Screencode repository',
    synchronizing_with_repository: 'Synchronizing with repository'
  }

};