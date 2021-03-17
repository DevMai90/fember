import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL,
});

Router.map(function() {
  // teams*
  this.route('teams', function() {
    // teams/(LinkedIn)*
    this.route('team', { path: ':teamId' }, function() {
      // teams/(LinkedIn)/(channel)*
      this.route('channel', { path: ':channelId' });
    });
  });
  this.route('login');
});

export default Router;
