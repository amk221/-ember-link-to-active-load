import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('foo', { path: '/foo/:fooId' }, function() {
    this.route('bar');
  });
});

export default Router;
