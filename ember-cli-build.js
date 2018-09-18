'use strict';
/* global require, module */
var EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

const EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function(defaults) {
  var app = new EmberAddon({
    'ember-bootstrap-datetimepicker': {
      'importBootstrapCSS': true,
      'importBootstrapJS': true,
      'importFontAwesome': true
    }
  });

  /*
    This build file specifies the options for the dummy test app of this
    addon, located in `/tests/dummy`
    This build file does *not* influence how the addon or the app using it
    behave. You most likely want to be modifying `./index.js` or app's build file
  */

  if (app.env !== 'production') {
    app.import('bower_components/ember/ember-template-compiler.js');
  }

  return app.toTree();
};
