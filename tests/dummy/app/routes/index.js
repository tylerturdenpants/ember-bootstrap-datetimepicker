import EmberObject from '@ember/object';
import Route from '@ember/routing/route';
import moment from 'moment';
import FaIconsMixin from 'dummy/mixins/faicons';

export default Route.extend({
  model: function() {
    return EmberObject.extend(FaIconsMixin).create({
      date1: moment(),
      date2: undefined,
      mindate: moment("2014-11-01"),
      maxdate: moment("2015-12-01"),
      disabled:true
    });
  }
});
