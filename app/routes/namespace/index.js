import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    let namespace = this.modelFor('namespace');
    return namespace.get('repositories');
  }
});
