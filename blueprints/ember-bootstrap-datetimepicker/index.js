module.exports = {
  normalizeEntityName: function() {},

  afterInstall: function() {
    return this.addAddonToProject('ember-cli-moment-shim', '~0.6.1').then(function() {
      return this.addPackageToProject('eonasdan-bootstrap-datetimepicker', 'philmayfield/bootstrap-datetimepicker');
    }.bind(this));
  }
};
