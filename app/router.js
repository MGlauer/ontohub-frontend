import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function router() {
  this.route('namespace', { path: ':namespace_id' }, function() {
    this.route('repository.new', { path: 'new' });
    this.route('repository', { path: ':repository_id' }, function() {
    });
  });
});

export default Router;
