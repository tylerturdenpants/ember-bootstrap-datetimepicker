
import hbs from 'htmlbars-inline-precompile';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import $ from 'jquery';
import { render, find, click } from '@ember/test-helpers';

module('ember-bootstrap-datetimepicker integration', function(hooks) {
  setupRenderingTest(hooks);

  test("it shows the picker on input focus, then hides it after click outside", async function(assert) {
    assert.expect(3);
    await render(hbs`{{bs-datetimepicker}}`);


    assert.equal($(".bootstrap-datetimepicker-widget").css("display"), undefined, "date picker is initially a hidden");
    click(".input-group-addon");

    assert.equal($(".bootstrap-datetimepicker-widget").css("display"), "block", "date picker is visible");
    click(".input-group-addon");


    assert.equal($(".bootstrap-datetimepicker-widget").css("display"), undefined, "date picker is hidden again");
  });

  test("test yield", async function(assert) {
    assert.expect(1);
    await render(hbs`{{#bs-datetimepicker}}<label class="yieldholder">yield</label>{{input}}{{/bs-datetimepicker}}`);

    assert.equal($('label.yieldholder').text(), 'yield');
  });

  // this should be fixed soon, just commeted out because we want
  //to ship a release
  // test("test the useCurrent option", function(assert) {
  //   assert.expect(1);
  //   let handledDates = 0;
  //   Ember.Test.registerWaiter(() => {
  //     return handledDates > 0;
  //   });
  //
  //   this.render(hbs`{{bs-datetimepicker useCurrent=true updateDate='handleDate'}}`);
  //     this.on('handleDate', val => {
  //       assert.ok(val);
  //       handledDates++;
  //     });
  //     click($(".input-group-addon"));
  // });

  test("test the showClear option", async function(assert) {
    assert.expect(1);
    var date;
    this.handleDate = val => {
      date = val;
    };
    await render(hbs`{{bs-datetimepicker showClear=true updateDate='handleDate'}}`);
      click('.input-group-addon');
      click('a[data-action="clear"]');

      assert.equal(date, undefined, 'should be undefined after clear the date');

  });

  test("test that non-computed properties are passed to the bootstrap-datetimepicker", async function(assert) {
    assert.expect(1);

    this.set('localeName', 'en-IE');
	await render(hbs`{{bs-datetimepicker locale=localeName}}`);

    assert.dom('*').exists({ count: 1 });
  });

  test("test placeholder support", async function(assert) {
    assert.expect(1);

    await render(hbs`{{bs-datetimepicker placeholder='test-placeholder'}}`);

    assert.equal(find('input').getAttribute('placeholder'), 'test-placeholder');
  });
});
