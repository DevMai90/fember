import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Helper | format-timestamp', function(hooks) {
  setupRenderingTest(hooks);

  // Replace this with your real tests.
  test('it renders', async function(assert) {
    this.set('myDate', '01/01/21');

    await render(hbs`{{format-timestamp myDate}}`);

    // this.element is the hbs wrapper element.
    assert.equal(this.element.textContent.trim(), 'Jan 1, 2021 00:00.00 AM');
  });
});
