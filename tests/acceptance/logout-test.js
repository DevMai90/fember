import { module, test } from 'qunit';
import { visit, currentURL, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import MockAuthService from 'shlack/tests/stubs/auth-service';

module('Acceptance | logging out', function(hooks) {
  setupApplicationTest(hooks);

  hooks.beforeEach(function() {
    // Look at this app. Register service:auth with the constructor (MockAuthService).
    this.owner.register('service:auth', MockAuthService);
  })

  test('visiting /teams and clicking "Logout"', async function(assert) {
    await visit('/teams');

    assert.equal(currentURL(), '/teams');

    await click('.team-sidebar__logout-LinkTo');

    assert.equal(currentURL(), '/login');
  });
});
