import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    let namespace = this.modelFor('namespace');
    return namespace.get('repositories');
  }
});
