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
require('colors');

module.exports = {

  /**
   * Show UI
   */
  show: {

    /**
     * Title Banner
     */
    banner: function () {
      cli.output('\n' + 'Screencode'.bold + ' by Outright Mental Inc.'.blue + '\n\n');
    },

    /**
     * Loading Progress
     * @param total seconds
     * @param done
     */
    loading: function(total, done) {
      var i = 0, interval = setInterval(function () {
        cli.progress(++i / 100);
        if (i >= 100) {
          clearInterval(interval);
          done();
        }
      }, total * 10);
    },

    /**
     * All done!
     */
    done: function() {
      cli.output('\n' + 'Screencode'.bold + ' ' + 'OK'.green.bold + '.' + '\n\n');
    }

  }

};