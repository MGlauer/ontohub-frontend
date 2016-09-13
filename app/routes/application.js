import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    error: function() {
      return this.transitionTo('index');
    }
  }
});
